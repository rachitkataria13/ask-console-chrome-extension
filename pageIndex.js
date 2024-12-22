const locationSplitIndex = location.href.split('/');

const validUrls = [
    'https://developer.amazon.com/alexa/console/ask#/skills',
    'https://developer.amazon.com/alexa/console/ask'
];

const localesMap = {
    'English (IN)': 'en_IN',
    'English (AU)': 'en_AU',
    'English (US)': 'en_US',
    'English (CA)': 'en_CA',
    'English (UK)': 'en_GB',
    'German (DE)': 'de_DE',
    'Portuguese (BR)': 'pt_BR',
    'French (CA)': 'fr_CA',
    'French (FR)': 'fr_FR',
    'Spanish (MX)': 'es_MX',
    'Spanish (ES)': 'es_ES',
    'Spanish (US)': 'es_US',
    'Italian (IT)': 'it_IT',
    'Japanese (JP)': 'jp_JP',
    'Hindi (IN)': 'hi_IN',
};

// Observer utilities
const observers = {
    setupSkillsTable: () => {
        const debounce = (fn, delay) => {
            let timeoutId;
            return (...args) => {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(() => {
                    fn(...args);
                }, delay);
            };
        };

        const observer = new MutationObserver(debounce((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) { // Element node
                            const $node = $(node);
                            if ($node.hasClass('astro-table-row')) {
                                processSkillRow($node);
                            } else {
                                const $rows = $node.find('tr.astro-table-row');
                                if ($rows.length > 0) {
                                    $rows.each(function() {
                                        processSkillRow($(this));
                                    });
                                }
                            }
                        }
                    });
                }
            });
        }, 100));

        // Start observing the table or wait for it
        const startObserving = () => {
            const table = document.querySelector('.astro-table-body');
            if (table) {
                observer.observe(table, {
                    childList: true,
                    subtree: true
                });
                processAllRows();
            } else {
                // If table doesn't exist, observe the container
                const container = document.querySelector('#tenant-content');
                if (container) {
                    const containerObserver = new MutationObserver((mutations, obs) => {
                        const table = document.querySelector('.astro-table-body');
                        if (table) {
                            observer.observe(table, {
                                childList: true,
                                subtree: true
                            });
                            processAllRows();
                            obs.disconnect();
                        }
                    });
                    
                    containerObserver.observe(container, {
                        childList: true,
                        subtree: true
                    });
                } else {
                    console.warn('[pageIndex.js][startObserving] Container element not found');
                }
            }
        };

        startObserving();

        // Cleanup
        window.addEventListener('unload', () => {
            try {
                observer.disconnect();
            } catch (error) {
                console.error('[pageIndex.js][unload] Error during cleanup:', error.message, error);
            }
        });
    }
};

function processAllRows() {
    const rows = $('.astro-table-body tr.astro-table-row');
    
    rows.each(function() {
        processSkillRow($(this));
    });
}

function processSkillRow($row) {

    const skillNameLink = $row.find('a.skill-list-page__name__link').first();
    if (skillNameLink.length > 0) {
        const skillNameHref = skillNameLink.attr('href');
        if (!skillNameHref) {
            console.warn('[pageIndex.js][processSkillRow] Skill name href not found in row');
            return;
        }

        // Extract components using regex
        const skillIdMatch = skillNameHref.match(/amzn1\.ask\.skill\.[a-zA-Z0-9-]+/);
        const localeMatch = skillNameHref.match(/[a-z]{2}_[A-Z]{2}/);
        const stageMatch = skillNameHref.match(/(development|live|certified)/);

        const skillId = skillIdMatch ? skillIdMatch[0] : null;
        const locale = localeMatch ? localeMatch[0] : 'en_US';
        const stage = stageMatch ? stageMatch[0] : 'development';

        if (!skillId) {
            console.warn('[pageIndex.js][processSkillRow] Could not extract skill ID from:', skillNameHref);
            return;
        }

        // Create test link with all components
        const testHref = `https://developer.amazon.com/alexa/console/ask/test/${skillId}/${stage}/${locale}`;

        // Add test link if it doesn't exist
        const existingTestLink = $row.find(`a[href*="/test/${skillId}"]`);
        if (existingTestLink.length === 0) {
            const $testLink = $('<a>', {
                href: testHref,
                text: `Test ${stage.charAt(0).toUpperCase() + stage.slice(1)}`,
                class: 'ask-header__nav-link',
                css: { 
                    display: 'inline-block'
                }
            });
            skillNameLink.after($testLink);
        } else {
            console.warn(`[pageIndex.js][processSkillRow] Test link already exists for skill ${skillId}`);
        }

        // Process locales if multiple exist
        if (locale.includes(',')) {
            $localeCell.empty();
            
            locale.split(',').forEach(item => {
                const trimmedItem = item.trim();
                if (localesMap[trimmedItem]) {
                    const localeDashboardHref = skillNameHref.replace(
                        /\/([\w]{2})_([\w]{2})\//gi, 
                        '/' + localesMap[trimmedItem] + '/'
                    );
                    const $localeLink = $('<a>', {
                        href: localeDashboardHref,
                        text: trimmedItem
                    });
                    if ($localeCell.children().length > 0) {
                        $localeCell.append(', ');
                    }
                    $localeCell.append($localeLink);
                } else {
                    console.warn(`[pageIndex.js][processSkillRow] Locale mapping not found for: ${trimmedItem}`);
                }
            });
        }
    } else {
        console.warn('[pageIndex.js][processSkillRow] Skill name link not found in row');
    }
}

if (validUrls.includes(location.href)) {
    $(document).ready(() => {
        observers.setupSkillsTable();
    });
}

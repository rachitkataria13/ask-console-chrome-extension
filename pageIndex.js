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

if (validUrls.includes(location.href)) {
    $(document).ready(function() {
        
        console.log('[pageIndex.js][ready] Document ready, initializing skills page functionality');
        
        function processSkillRow($row) {

            console.group($row);
            console.log('[pageIndex.js][processSkillRow] Starting to process skill row');
            
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

                console.log(`[pageIndex.js][processSkillRow] Extracted components:`, {
                    skillId,
                    stage,
                    locale
                });
                
                // Create test link with all components
                const testHref = `https://developer.amazon.com/alexa/console/ask/test/${skillId}/${stage}/${locale}`;
                console.log(`[pageIndex.js][processSkillRow] Generated test URL: ${testHref}`);
                
                // Add test link if it doesn't exist
                const existingTestLink = $row.find(`a[href*="/test/${skillId}"]`);
                if (existingTestLink.length === 0) {
                    console.log(`[pageIndex.js][processSkillRow] Adding new test link for skill ${skillId}`);
                    const $testLink = $('<a>', {
                        href: testHref,
                        text: `Test ${stage.charAt(0).toUpperCase() + stage.slice(1)}`,
                        class: 'ask-header__nav-link',
                        css: { 
                            // marginLeft: '10px',
                            display: 'inline-block'
                        }
                    });
                    skillNameLink.after($testLink);
                    console.log(`[pageIndex.js][processSkillRow] Successfully added test link for skill ${skillId}`);
                } else {
                    console.log(`[pageIndex.js][processSkillRow] Test link already exists for skill ${skillId}`);
                }

                // Process locales if multiple exist
                if (locale.includes(',')) {
                    console.log('[pageIndex.js][processSkillRow] Starting locale processing');
                    $localeCell.empty();
                    
                    locale.split(',').forEach(item => {
                        const trimmedItem = item.trim();
                        if (localesMap[trimmedItem]) {
                            console.log(`[pageIndex.js][processSkillRow] Processing locale: ${trimmedItem}`);
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
                            console.log(`[pageIndex.js][processSkillRow] Added locale link for ${trimmedItem}`);
                        } else {
                            console.warn(`[pageIndex.js][processSkillRow] Locale mapping not found for: ${trimmedItem}`);
                        }
                    });
                    console.log('[pageIndex.js][processSkillRow] Completed locale processing');
                }
            } else {
                console.warn('[pageIndex.js][processSkillRow] Skill name link not found in row');
            }
            console.log('[pageIndex.js][processSkillRow] Completed processing skill row');
            console.groupEnd($row);
        }

        // Process all existing rows
        function processAllRows() {
            console.log('[pageIndex.js][processAllRows] Starting to process all skill rows');
            const rows = $('.astro-table-body tr.astro-table-row');
            console.log(`[pageIndex.js][processAllRows] Found ${rows.length} rows to process`);
            
            rows.each(function() {
                processSkillRow($(this));
            });
            console.log('[pageIndex.js][processAllRows] Completed processing all rows');
        }

        // Set up observer for the skills table
        const observer = new MutationObserver((mutations) => {
            console.log('[pageIndex.js][observer] Detected mutations in skills table');
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length > 0) {
                    console.log(`[pageIndex.js][observer] Processing ${mutation.addedNodes.length} added nodes`);
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) { // Element node
                            const $node = $(node);
                            if ($node.hasClass('astro-table-row')) {
                                console.log('[pageIndex.js][observer] Processing single added row');
                                processSkillRow($node);
                            } else {
                                const $rows = $node.find('tr.astro-table-row');
                                if ($rows.length > 0) {
                                    console.log(`[pageIndex.js][observer] Processing ${$rows.length} nested rows`);
                                    $rows.each(function() {
                                        processSkillRow($(this));
                                    });
                                }
                            }
                        }
                    });
                }
            });
            console.log('[pageIndex.js][observer] Completed processing mutations');
        });

        // Start observing the table or wait for it
        function startObserving() {
            console.log('[pageIndex.js][startObserving] Starting observation setup');
            const table = document.querySelector('.astro-table-body');
            if (table) {
                console.log('[pageIndex.js][startObserving] Found skills table, setting up observer');
                observer.observe(table, {
                    childList: true,
                    subtree: true
                });
                processAllRows();
            } else {
                console.log('[pageIndex.js][startObserving] Skills table not found, setting up container observer');
                // If table doesn't exist, observe the container
                const container = document.querySelector('#tenant-content');
                if (container) {
                    console.log('[pageIndex.js][startObserving] Found container, watching for table creation');
                    const containerObserver = new MutationObserver((mutations, obs) => {
                        const table = document.querySelector('.astro-table-body');
                        if (table) {
                            console.log('[pageIndex.js][startObserving] Table found, switching to table observer');
                            observer.observe(table, {
                                childList: true,
                                subtree: true
                            });
                            processAllRows();
                            obs.disconnect();
                            console.log('[pageIndex.js][startObserving] Container observer disconnected');
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
            console.log('[pageIndex.js][startObserving] Observation setup completed');
        }

        startObserving();

        // Cleanup
        window.addEventListener('unload', () => {
            console.log('[pageIndex.js][unload] Cleaning up observers');
            try {
                if (observer) {
                    observer.disconnect();
                    console.log('[pageIndex.js][unload] Observer disconnected successfully');
                }
            } catch (error) {
                console.error('[pageIndex.js][unload] Error during cleanup:', error);
            }
        });
    });
}

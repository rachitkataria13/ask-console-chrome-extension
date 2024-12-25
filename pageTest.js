const locationSplitTest = location.href.split('/');

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

// load only in simulator
if (locationSplitTest.length >= 7 && locationSplitTest[6] === 'test') {

// Icons by Eleonor Wang - https://www.flaticon.com/authors/eleonor-wang
// <div>Icons made by <a href="https://www.flaticon.com/authors/eleonor-wang" title="Eleonor Wang">Eleonor Wang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

const redoImage = `<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI3NS42MjIgMjc1LjYyMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjc1LjYyMiAyNzUuNjIyIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0yNzEuNDU5LDczLjQyNmMtMy40OC0xLjc0LTEwLjQ0MSwwLTEyLjE4MSwzLjQ4bC0xOS4xMDYsMzIuMjQ0Yy0xMi43Mi01My43NTItNjAuNC05My4xNDktMTE4LjM2My05My4xNDktNjcuODY1LDAuMDAxLTEyMS44MDksNTMuOTQ1LTEyMS44MDksMTIxLjgxczUzLjk0NCwxMjEuODA4IDEyMS44MDgsMTIxLjgwOGM1LjIyLDAgOC43MDEtMy40OCA4LjcwMS04LjcwMXMtMy40OC04LjcwMS04LjcwMS04LjcwMWMtNTcuNDI0LDAtMTA0LjQwNy00Ni45ODMtMTA0LjQwNy0xMDQuNDA3czQ2Ljk4NC0xMDQuNDA2IDEwNC40MDctMTA0LjQwNmM1MS4yODEsNy4xMDU0M2UtMTUgOTQuMTIzLDM3LjUgMTAyLjczNyw4Ni4zOTdsLTQwLjA5Mi0yMy43NTJjLTUuMjItMS43NC0xMC40NDEsMC0xMi4xODEsMy40NC0xLjc0LDUuMjIgMCwxMC40NDEgMy40NCwxMi4xODFsNTMuOTQ0LDMzLjA2MmMxLjc0LDEuNzQgMy40NCwxLjc0IDUuMjIsMS43NCAwLDAgMS43NCwwIDEuNzQtMy40OCAxLjc0LDAgMy40NC0xLjc0IDUuMjItMy40OGwxLjA2Mi0xLjc0aDAuNjc5YzAtMC4zNDgtMC4wNTItMC42NzktMC4wNTItMS4wMWwzMS4zNzUtNTEuMTk0YzEuNzM5LTUuMjIxLTAuMDAxLTEwLjQ0Mi0zLjQ4MS0xMi4xODJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgo8L3N2Zz4K" />`;
const saveImage = `<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIyNi4yMTYgMjI2LjIxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjI2LjIxNiAyMjYuMjE2IiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0yMTcuNTE1LDEwNC40MDdoLTk1LjcwN3YtOTUuNzA2YzAtNS4yMi0zLjQ4LTguNzAxLTguNzAxLTguNzAxcy04LjcwMSwzLjQ4LTguNzAxLDguNzAxdjk1LjcwN2gtOTUuNzA1Yy01LjIyLDAtOC43MDEsMy40OC04LjcwMSw4LjcwMXMzLjQ4LDguNzAxIDguNzAxLDguNzAxaDk1LjcwN3Y5NS43MDdjMCw1LjIyIDMuNDgsOC43MDEgOC43MDEsOC43MDFzOC43MDEtMy40OCA4LjcwMS04LjcwMXYtOTUuNzA3aDk1LjcwN2M1LjIyLDAgOC43MDEtMy40OCA4LjcwMS04LjcwMXMtMy40ODMtOC43MDItOC43MDMtOC43MDJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgo8L3N2Zz4K" />`;

const skillId = location.href.split('/')[7];

let historyIndex = -1;

// Storage utilities
const storage = {
    get: skillId => new Promise(resolve => 
        chrome.storage.sync.get([skillId], result => {
            let locale = result.locale;
            resolve(result?.[skillId] || { buttons: {}, history: { [locale]: [] } })
        })
    ),
    save: (skillId, data) => new Promise(resolve => 
        chrome.storage.sync.set({ [skillId]: data }, resolve)
    ),
    clear: () => new Promise(resolve => 
        chrome.storage.sync.clear(resolve)
    )
};

// Button utilities
const buttons = {
    add: debounce(text => {
        if (!$('.request-buttons').length) {
            $('<div class="request-buttons"></div>').insertAfter('.askt-simulator__input');
        }
        const existingButton = $('.request-buttons .button-container button.post[value="' + text + '"]');
        if (existingButton.length) {
            return;
        }
        $('<div class="button-container"></div>')
            .append([
                $('<button>', {
                    class: 'asksos-button post',
                    value: text,
                    text,
                    title: `Post ${text}`,
                    click: () => postText(text)
                }),
                $('<button>', {
                    class: 'asksos-button remove',
                    value: text,
                    text: 'x',
                    title: 'Remove button',
                    click: () => buttons.remove(text)
                })
            ])
            .appendTo('.request-buttons');
    }, 500),
    remove: async text => {
        const data = await storage.get(skillId);
        let locale = data.locale|| "unknown"


        if (data.buttons[locale]) {
            data.buttons[locale] = data.buttons[locale].filter(t => t !== text);
            await storage.save(skillId, data);
            $(`.request-buttons button[value="${text}"]`).parent().remove();
        }
    },
    
    save: async text => {
        if (!text) return;

        text = text.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();

        const data = await storage.get(skillId);
        let locale = data.locale|| "unknown"
        
        if (!data.buttons[locale]?.includes(text)) {
            data.buttons[locale] = [...(data.buttons[locale] || []), text];
            await storage.save(skillId, data);
            buttons.add(text);
        }
    },
    
    init: async () => {
        $('.request-buttons.ui-sortable').remove();
        const data = await storage.get(skillId);
        let locale = data.locale|| "unknown"
        
        if (data.buttons[locale]?.length) {
            data.buttons[locale].forEach(buttons.add);
            $(".request-buttons").sortable({
                placeholder: "button-placeholder",
                stop: buttons.updateOrder
            }).disableSelection();
        }
    },
    
    updateOrder: async () => {
        const data = await storage.get(skillId);
        let locale = data.locale|| "unknown"


        data.buttons[locale] = $('.request-buttons .button-container button.post')
            .map((_, el) => $(el).val()).get();
        await storage.save(skillId, data);
    },
    
    reset() {
        $('.request-buttons').remove();
        $('.button-placeholder').remove();
    }
};

// Observer utilities
const observers = {
    setupLanguage: async () => {
        // Adding a MutationObserver to check for language changes
        const languageObserver = new MutationObserver(async (mutations) => {
            mutations.forEach(async (mutation) => {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    const langElement = document.querySelector('.askt-alexa-lang .Select-value');
                    if (langElement) {
                        const currentLanguage = langElement.innerText;
                        // Reset buttons and reload suggestions
                        let data = await storage.get(skillId);
                        let locale = currentLanguage;
                        await storage.save(skillId, { ...data, locale });

                        buttons.reset();
                        await buttons.init();
                    }
                }
            });
        });

        // Start observing the specified element for changes
        const targetNode = document.querySelector('.askt-alexa-lang .Select-value');
        if (targetNode) {
            languageObserver.observe(targetNode, { 
                childList: true, 
                subtree: true,
                characterData: true 
            });
            return languageObserver;
        }
    },
    
    setupDialog: () => {
        const dialogObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(async node => {
                    if (node.nodeType === 1 && 
                        $(node).hasClass('askt-dialog__message') &&
                        $(node).hasClass('askt-dialog__message--request')) {
                        
                        const $node = $(node);
                        const messageText = $node.parent().text().trim();
                        const data = await storage.get(skillId);
                        let locale = data.locale|| "unknown"
                        const isButtonSaved = data.buttons[locale]?.includes(messageText);
                        
                        $node.parent().find('.askt-dialog__icon--plus').remove();
                        $node.prepend(`
                            <span class="asksos-action-icon repost" title="Repost">${redoImage}</span>
                            ${!isButtonSaved ? `<span class="asksos-action-icon save" title="Add request button">${saveImage}</span>` : ''}
                        `);
                        
                        // Add event listener for save button
                        $node.on('click', '.save', async () => {
                            if (!isButtonSaved) {
                                await buttons.save(messageText);
                                // Update DOM to hide the save button
                                $node.find('.save').remove();
                            }
                        });
                        
                        // Add to history
                        if (!data.history[locale]) {
                            data.history[locale] = [];
                        }
                        if (!data.history[locale].includes(messageText)) {
                            data.history[locale].unshift(messageText);
                            await storage.save(skillId, data);
                        }
                    }
                });
            });
        });

        const dialog = document.querySelector('.askt-dialog');
        if (dialog) {
            dialogObserver.observe(dialog, { childList: true, subtree: true });
            return dialogObserver;
        }
    }
};

// Initialize
$(document).ready(async () => {
    try {
        let activeObservers = await Promise.all([
            observers.setupLanguage(),
            observers.setupDialog()
        ])
        activeObservers = activeObservers.filter(Boolean);

        await buttons.init();
        
        // Event handlers
        $('.askt-dialog')
            .on('click', '.repost', e => {
                e.preventDefault();
                e.stopPropagation();
                const $target = $(e.target).closest('.askt-dialog__message');
                const text = $target.text().trim();

                if (text) {
                    postText(text);
                }
            })
            .on('click', '.save', e => {
                e.preventDefault();
                e.stopPropagation();
                const $target = $(e.target).closest('.askt-dialog__message');
                const text = $target.text().trim();

                if (text) {
                    buttons.save(text);
                }
            });

        $('#astro-input-0').on('keydown', async e => {
            const data = await storage.get(skillId);
            let locale = data.locale|| "unknown"

            const history = data.history[locale] || [];
            
            switch(e.key) {
                case 'Enter':
                    if (!e.shiftKey) {
                        e.preventDefault();
                        const text = e.target.value.trim();
                        if (text) {
                            data.history[locale] = [text, ...history];
                            await storage.save(skillId, data);
                            historyIndex = -1;
                            postText(text);
                        }
                    }
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    historyIndex = Math.min(historyIndex + 1, history.length - 1);
                    $('#astro-input-0').val(historyIndex >= 0 ? history[historyIndex] : '');
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    historyIndex = Math.max(historyIndex - 1, -1);
                    $('#astro-input-0').val(historyIndex >= 0 ? history[historyIndex] : '');
                    break;
            }
        });

        // Cleanup on unload
        window.addEventListener('beforeunload', () => 
            activeObservers.forEach(observer => {
                if (observer) {
                    observer.disconnect && observer.disconnect();
                }
            })
        );
        
    } catch (error) {
        console.error('TestPage Error:', error);
    }
});

/**
 * Posts text
 * @param text
 */
function postText(text) {
    text = text.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();

    console.log('posting: ' + text);
    $('.react-autosuggest__input').val(text).change();

    // trigger input
    $('.react-autosuggest__input')[0].dispatchEvent(new Event("input", { 'bubbles': true,'cancelable': true }));
    $('.react-autosuggest__input').focus();

    // trigger press on enter
    const keypress = new KeyboardEvent("keypress", {
        bubbles: true, cancelable: true, keyCode: 13, key: 'Enter'
    });
    $('.react-autosuggest__input')[0].dispatchEvent(keypress);
}

function draggableSideBar() {
    $('.askt-input').append('<div id="dragbar"></div>');
    let dragging = false;
    $('#dragbar').on('mousedown', function(e) {
        e.preventDefault();
        dragging = true;
        $(document).on('mousemove', function(e){
            const percentage = (e.pageX / window.innerWidth) * 100;
            const mainPercentage = 100 - percentage;
            $('.askt-input').css("width", percentage + "%");
            $('.askt-output').css("width", mainPercentage + "%");
        });
    });

    $(document).on('mouseup', function(e){
        if (dragging) {
            $(document).unbind('mousemove');
            dragging = false;
        }
    });
}
}
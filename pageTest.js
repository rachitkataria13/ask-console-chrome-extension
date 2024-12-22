const locationSplitTest = location.href.split('/');

// load only in simulator
if (locationSplitTest.length >= 7 && locationSplitTest[6] === 'test') {

// Icons by Eleonor Wang - https://www.flaticon.com/authors/eleonor-wang
// <div>Icons made by <a href="https://www.flaticon.com/authors/eleonor-wang" title="Eleonor Wang">Eleonor Wang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

const redoImage = `<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI3NS42MjIgMjc1LjYyMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjc1LjYyMiAyNzUuNjIyIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0yNzEuNDU5LDczLjQyNmMtMy40OC0xLjc0LTEwLjQ0MSwwLTEyLjE4MSwzLjQ4bC0xOS4xMDYsMzIuMjQ0Yy0xMi43Mi01My43NTItNjAuNC05My4xNDktMTE4LjM2My05My4xNDktNjcuODY1LDAuMDAxLTEyMS44MDksNTMuOTQ1LTEyMS44MDksMTIxLjgxczUzLjk0NCwxMjEuODA4IDEyMS44MDgsMTIxLjgwOGM1LjIyLDAgOC43MDEtMy40OCA4LjcwMS04LjcwMXMtMy40OC04LjcwMS04LjcwMS04LjcwMWMtNTcuNDI0LDAtMTA0LjQwNy00Ni45ODMtMTA0LjQwNy0xMDQuNDA3czQ2Ljk4NC0xMDQuNDA2IDEwNC40MDctMTA0LjQwNmM1MS4yODEsNy4xMDU0M2UtMTUgOTQuMTIzLDM3LjUgMTAyLjczNyw4Ni4zOTdsLTQwLjA5Mi0yMy43NTJjLTUuMjItMS43NC0xMC40NDEsMC0xMi4xODEsMy40NC0xLjc0LDUuMjIgMCwxMC40NDEgMy40NCwxMi4xODFsNTMuOTQ0LDMzLjA2MmMxLjc0LDEuNzQgMy40NCwxLjc0IDUuMjIsMS43NCAwLDAgMS43NCwwIDEuNzQtMy40OCAxLjc0LDAgMy40NC0xLjc0IDUuMjItMy40OGwxLjA2Mi0xLjc0aDAuNjc5YzAtMC4zNDgtMC4wNTItMC42NzktMC4wNTItMS4wMWwzMS4zNzUtNTEuMTk0YzEuNzM5LTUuMjIxLTAuMDAxLTEwLjQ0Mi0zLjQ4MS0xMi4xODJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgo8L3N2Zz4K" />`;
const saveImage = `<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIyNi4yMTYgMjI2LjIxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjI2LjIxNiAyMjYuMjE2IiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0yMTcuNTE1LDEwNC40MDdoLTk1LjcwN3YtOTUuNzA2YzAtNS4yMi0zLjQ4LTguNzAxLTguNzAxLTguNzAxcy04LjcwMSwzLjQ4LTguNzAxLDguNzAxdjk1LjcwN2gtOTUuNzA1Yy01LjIyLDAtOC43MDEsMy40OC04LjcwMSw4LjcwMXMzLjQ4LDguNzAxIDguNzAxLDguNzAxaDk1LjcwN3Y5NS43MDdjMCw1LjIyIDMuNDgsOC43MDEgOC43MDEsOC43MDFzOC43MDEtMy40OCA4LjcwMS04LjcwMXYtOTUuNzA3aDk1LjcwN2M1LjIyLDAgOC43MDEtMy40OCA4LjcwMS04LjcwMXMtMy40ODMtOC43MDItOC43MDMtOC43MDJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgo8L3N2Zz4K" />`;

const skillId = location.href.split('/')[7];
const locale = location.href.split('/')[9].substring(0, 2);
let historyIndex = -1;

// Storage utilities
const storage = {
    get: skillId => new Promise(resolve => 
        chrome.storage.sync.get([skillId], result => 
            resolve(result?.[skillId] || { buttons: {}, history: { [locale]: [] } })
        )
    ),
    save: (skillId, data) => new Promise(resolve => 
        chrome.storage.sync.set({ [skillId]: data }, resolve)
    )
};

// Button utilities
const buttons = {
    add: text => {
        if (!$('.request-buttons').length) {
            $('<div class="request-buttons"></div>').insertAfter('.askt-simulator__input');
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
    },
    
    remove: async text => {
        const data = await storage.get(skillId);
        if (data.buttons[locale]) {
            data.buttons[locale] = data.buttons[locale].filter(t => t !== text);
            await storage.save(skillId, data);
            $(`.request-buttons button[value="${text}"]`).parent().remove();
        }
    },
    
    save: async text => {
        if (!text) return;
        const data = await storage.get(skillId);
        
        if (!data.buttons[locale]?.includes(text)) {
            data.buttons[locale] = [...(data.buttons[locale] || []), text];
            await storage.save(skillId, data);
            buttons.add(text);
        }
    },
    
    init: async () => {
        $('.request-buttons').remove();
        const data = await storage.get(skillId);
        
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
        data.buttons[locale] = $('.request-buttons .button-container button.post')
            .map((_, el) => $(el).val()).get();
        await storage.save(skillId, data);
    }
};

// Observer utilities
const observers = {
    setupLanguage: () => {
        const langObserver = new MutationObserver(() => {
            const newLocale = location.href.split('/')[9].substring(0, 2);
            if (newLocale !== locale) {
                locale = newLocale;
                buttons.init();
            }
        });

        const langSelector = document.querySelector('.askt-alexa-lang .Select-control');
        if (langSelector) {
            langObserver.observe(langSelector, {
                childList: true,
                subtree: true,
                characterData: true
            });
            return langObserver;
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
        const activeObservers = [
            observers.setupLanguage(),
            observers.setupDialog()
        ].filter(Boolean);

        await buttons.init();
        
        // Event handlers
        $('.askt-dialog')
            .on('click', '.repost', e => postText($(e.target).parent().text()))
            .on('click', '.save', e => buttons.save($(e.target).parent().text()));

        $('#astro-input-0').on('keydown', async e => {
            const data = await storage.get(skillId);
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
        window.addEventListener('unload', () => 
            activeObservers.forEach(observer => observer?.disconnect())
        );
        
    } catch (error) {
        console.error('[pageTest.js] Error:', error);
    }
});

/**
 * Posts text
 * @param text
 */
function postText(text) {

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

/**
 * Add new entry to history
 * @param text
 */
function addToHistory(text) {
    // Get object for given skill id
    chrome.storage.sync.get([skillId], function(result) {
        // Set index back to starting point
        historyIndex = -1;
        if (result && result[skillId] && result[skillId].history) {
            commandHistory = result[skillId].history[locale];
            // Add entry to front, and remove it if already exists
            if (commandHistory) {
                let index = commandHistory.indexOf(text);
                if (index >= 0) {
                    commandHistory.splice(index, 1);
                }
                // Cap length at 50 to prevent this from growing too large.
                if (commandHistory.length > 50) {
                    commandHistory.length = 50;
                }
                commandHistory.unshift(text);
            } else {
                result[skillId].history[locale] = [text];
            }
            chrome.storage.sync.set({[skillId]: result[skillId]});
        } else if (result && result[skillId]) { // create new object for given skill id

            result[skillId].history = {
                [locale]: [text]
            };

            chrome.storage.sync.set({[skillId]: result[skillId]});
        } else {
            const obj = {
                buttons: {
                    [locale]: []
                },
                history: {
                    [locale]: [text]
                },
            };
            chrome.storage.sync.set({[skillId]: obj})
        }
    });
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
}}

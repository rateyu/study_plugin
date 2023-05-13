document.getElementById('convert').addEventListener('click', () => {
    // Inject a content script into the active tab
    chrome.tabs.executeScript({
        file: 'contentScript.js'
    });
});

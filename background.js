function copyToClipboard(text) {
    function onCopy(event) {
        event.clipboardData.setData("text/plain", text);
        event.preventDefault();
    }
    document.addEventListener("copy", onCopy, true);
    document.execCommand("copy");
    document.removeEventListener("copy", onCopy, true);
}

function getTabUrls(tabs) {
    let urls = tabs.map(tab => tab.url).join('\n');
    copyToClipboard(urls);
}

browser.browserAction.onClicked.addListener(() => {
    browser.tabs.query({}).then(getTabUrls);
});

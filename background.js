chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/shorts")) {
    chrome.tabs.update({url: "https://scrimba.com/learn/learnjavascript/deploy-the-final-version-coc8640b4ab7ea074c56f6bdc"});   
    window.close()
  }
});

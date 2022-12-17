chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/shorts")) {
    chrome.tabs.update({url: "https://scrimba.com/learn/frontend"});   
  }
});


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only act on loading tabs
  if (changeInfo.status !== 'loading') return;
  if(tab.url){

    // Exceptions
    if (tab.url.includes("OmachiPham")) {
      // No action for this URL
      return;
    }
    // Youtube, Tiktok, IG, FB
    else if ((tab.url.includes("youtube.com") || tab.url.includes("tiktok") || tab.url.includes("instagram") || tab.url.includes("facebook"))) {
      chrome.tabs.update(tabId, {url: "https://calendar.google.com/calendar/u/0/r?tab=rc"});
    }}

});

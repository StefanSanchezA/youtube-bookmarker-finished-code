let lastTab = "https://www.youtube.com/watch?v=yLUqkgpSw7Y&t=39892s&ab_channel=OmachiPham";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only act on loading tabs
  if (changeInfo.status !== 'loading') return;
  if(tab.url){

    //Dealing with Millisecond URL changes
    if (tab.url.includes(lastTab)) {
      return;
    }
    lastTab = tab.url.slice(0, 40)

    // Exceptions
    if ((tab.url.includes("OmachiPham") || tab.url.includes("AndrewHuberman") || tab.url.includes("RianDoris")|| tab.url.includes("https://www.youtube.com/watch?v=yLUqkgpSw7Y&t=39892"))) {
      // No action for this URL
      return;
    }

    // Youtube, Tiktok, IG, FB
    else if ((tab.url.includes("youtube.com") || tab.url.includes("tiktok") || tab.url.includes("instagram") || tab.url.includes("facebook")|| tab.url.includes("shorts") || tab.url.includes("leonardo.ai"))) {
      lastTab = {};
      chrome.tabs.update(tabId, {url: "https://calendar.google.com/calendar/u/0/r?tab=rc"});
    }}

});
// Einzelgänger
// https://www.youtube.com/watch?v=yLUqkgpSw7Y&t=39892
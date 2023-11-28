
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only act on loading tabs
  if (changeInfo.status !== 'loading') return;

  // Exceptions
  if (tab.url && tab.url.includes("OmachiPham")) {
    // No action for this URL
    return;
  }
  // Youtube Shorts, Tiktok, IG Reels, FB Reels
  else if (tab.url && (tab.url.includes("youtube") || tab.url.includes("tiktok") || tab.url.includes("instagram") || tab.url.includes("facebook"))) {
    chrome.tabs.update(tabId, {url: "https://calendar.google.com/calendar/u/0/r?tab=rc"});
  }
});

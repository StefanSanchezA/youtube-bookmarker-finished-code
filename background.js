chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only act on loading tabs
  if (changeInfo.status !== 'loading') return;

  // Exact URL match for the exception
  const exceptionUrl = "https://www.youtube.com/watch?v=yLUqkgpSw7Y&t=39892s&ab_channel=OmachiPham";
  if (tab.url === exceptionUrl) {
    return; // Do nothing if the URL matches exactly
  }

  // Redirect for specific sites
  if (tab.url.includes("youtube") || tab.url.includes("tiktok") || tab.url.includes("instagram") || tab.url.includes("facebook")) {
    chrome.tabs.update(tabId, {url: "https://calendar.google.com/calendar/u/0/r?tab=rc"});
  }
});

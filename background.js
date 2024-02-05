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
        if ((tab.url.includes("market") || tab.url.includes("riandoris") || tab.url.includes("OmachiPham") || tab.url.includes("AndrewHuberman")|| tab.url.includes("hubermanlab") || tab.url.includes("RianDoris") || tab.url.includes("AlexHormozi") || tab.url.includes("hughesspaceschool"))) {
        // No action for this URL
        return;
        }
    }

    // Banned Applications
    const banned = ["https://www.youtube.com/", "https://tiktok.com/", "https://www.instagram.com/", "https://www.facebook.com/", "shorts"];
    const isBanned = banned.some(site => tab.url.includes(site));
    if (isBanned) {
        // Redirected into Google Calendars
        chrome.tabs.update(tabId, {url: "https://calendar.google.com/calendar/u/0/r?tab=rc"});
    }
});
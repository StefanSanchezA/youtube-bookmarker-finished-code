
chrome.tabs.onUpdated.addListener((tabId, tab) => {
  //Youtube Shorts
  if (tab.url && tab.url.includes("Youtube")) {
    chrome.tabs.update({url: "https://calendar.google.com/calendar/u/0/r?tab=rc"});   
  }

  //Tiktok
  else if (tab.url && tab.url.includes("tiktok")) {
    chrome.tabs.update({url: "https://calendar.google.com/calendar/u/0/r?tab=rc"});   
  }

  //IG Reels
  else if (tab.url && tab.url.includes("instagram")) {
    chrome.tabs.update({url: "https://calendar.google.com/calendar/u/0/r?tab=rc"});   
  }

  //FB Reels 
  else if (tab.url && tab.url.includes("facebook")) {
    chrome.tabs.update({url: "https://calendar.google.com/calendar/u/0/r?tab=rc"});   
  }
});

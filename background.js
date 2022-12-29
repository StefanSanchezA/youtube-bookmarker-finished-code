chrome.tabs.onUpdated.addListener((tabId, tab) => {
  //Youtube Shorts
  if (tab.url && tab.url.includes("youtube.com/shorts")) {
    chrome.tabs.update({url: "https://scrimba.com/learn/frontend"});   
  }

  //Tiktok
  if (tab.url && tab.url.includes("tiktok.com")) {
    chrome.tabs.update({url: "https://scrimba.com/learn/frontend"});   
  }

  //IG Reels
  if (tab.url && tab.url.includes("https://www.instagram.com/reels")) {
    chrome.tabs.update({url: "https://scrimba.com/learn/frontend"});   
  }

  //FB Reels 
  if (tab.url && tab.url.includes("https://www.facebook.com/reel")) {
    chrome.tabs.update({url: "https://scrimba.com/learn/frontend"});   
  }
});

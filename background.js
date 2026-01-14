chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translatePlus",
    title: "Translate Plus: %s",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translatePlus" && info.selectionText) {
    // Open the side panel
    chrome.sidePanel.open({ tabId: tab.id });
    
    // Send the selected text to the side panel
    chrome.runtime.sendMessage({
      type: "selectedText",
      text: info.selectionText
    });
  }
});
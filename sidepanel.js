chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "selectedText") {
    const searchUrl = `https://jisho.org/search/%23words%20${encodeURIComponent(message.text)}`;
    document.getElementById("jishoFrame").src = searchUrl;
  }
});
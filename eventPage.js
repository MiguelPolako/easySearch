
// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Search it on Brainly";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var text = info.selectionText;
  var url = "https://brainly.com/app/ask?entry=hero&q=" + encodeURIComponent(text);
  window.open(url, '_blank');
};
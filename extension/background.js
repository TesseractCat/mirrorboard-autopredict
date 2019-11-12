extensionOn = true;

chrome.commands.onCommand.addListener(function(command) {
  extensionOn = !extensionOn;
  if (extensionOn) {
    chrome.browserAction.setIcon({path:"icon-on.png"});
  } else {
    chrome.browserAction.setIcon({path:"icon-off.png"});
  }
  
  chrome.tabs.query({}, function(tabs) {
    var message = {on: extensionOn};
    for (var i=0; i<tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, message);
    }
  });
});
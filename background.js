// background.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'logKey') {
      console.log('Keylogger detected! Input is being monitored.');
    }
  });
 

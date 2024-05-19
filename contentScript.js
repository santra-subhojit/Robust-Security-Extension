// contentScript.js

document.addEventListener('keydown', function (event) {
    const inputField = document.activeElement;
  
    if (inputField && inputField.tagName === 'INPUT' && inputField.type === 'text') {
      chrome.runtime.sendMessage({ action: 'logKey' });
    }
  });
  
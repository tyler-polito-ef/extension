// ===================
// TAB MOVING
// ===================
function moveToNextTab() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    let currentTab = tabs[0];
    chrome.tabs.query({ currentWindow: true }, function (allTabs) {
      let nextTabIndex = (currentTab.index + 1) % allTabs.length;
      chrome.tabs.update(allTabs[nextTabIndex].id, { active: true });
    });
  });
}

function moveToPreviousTab() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    let currentTab = tabs[0];
    chrome.tabs.query({ currentWindow: true }, function (allTabs) {
      let previousTabIndex =
        (currentTab.index - 1 + allTabs.length) % allTabs.length;
      chrome.tabs.update(allTabs[previousTabIndex].id, { active: true });
    });
  });
}

function newTabToTheRight() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    let currentTab = tabs[0];
    chrome.tabs.create({ index: currentTab.index + 1 });
  });
}

function openChromenewTab() {
  chrome.tabs.create({ url: "chrome://newtab" });
}

chrome.commands.onCommand.addListener(function (command) {
  switch (command) {
    case "next-tab":
      moveToNextTab();
      break;
    case "previous-tab":
      moveToPreviousTab();
      break;
    case "new-tab-to-the-right":
      newTabToTheRight();
      break;
    case "chrome-new-tab":
      openChromenewTab();
      break;
    default:
      break;
  }
});
// ===================
// NEW_TAB
// ===================
// Note: This is hack found here (https://stackoverflow.com/a/74540001) because by default you cannot unfocus chromes omni-bar
chrome.tabs.onCreated.addListener((tab) => {
  if (tab.pendingUrl === "chrome://newtab/") {
    chrome.tabs.remove(tab.id);
    chrome.tabs.create({
      url: "./new_tab.html",
    });
  }
});

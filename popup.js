function openChromenewTab() {
  chrome.tabs.create({ url: "chrome://newtab" });
}
document.getElementById("new-tab").addEventListener("click", openChromenewTab);

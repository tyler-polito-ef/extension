function openChromenewTab() {
  chrome.tabs.create({ url: "chrome://newtab" });
}
document.getElementById("new-tab").addEventListener("click", openChromenewTab);

// ===================
// GITHUB.DEV FEATURE
// ===================
function isGitHubPullRequest(url) {
  if (!url) return false;
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/').filter(part => part);
    // GitHub PR URL pattern: github.com/{owner}/{repo}/pull/{number}
    return (
      urlObj.hostname === 'github.com' &&
      pathParts.length >= 4 &&
      pathParts[2] === 'pull' &&
      /^\d+$/.test(pathParts[3])
    );
  } catch (e) {
    return false;
  }
}

function convertToGithubDev(url) {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/').filter(part => part);
    // Extract owner, repo, and pull number
    const owner = pathParts[0];
    const repo = pathParts[1];
    const pullNumber = pathParts[3];
    
    // Build github.dev URL: github.dev/{owner}/{repo}/pull/{number}
    return `https://github.dev/${owner}/${repo}/pull/${pullNumber}`;
  } catch (e) {
    return null;
  }
}

function openInGithubDev() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    if (currentTab && currentTab.url) {
      const githubDevUrl = convertToGithubDev(currentTab.url);
      if (githubDevUrl) {
        chrome.tabs.create({ url: githubDevUrl });
      }
    }
  });
}

// Check if current tab is a GitHub PR and enable/disable button
const githubDevButton = document.getElementById("open-in-github-dev");
githubDevButton.addEventListener("click", function() {
  if (!this.disabled) {
    openInGithubDev();
  }
});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const currentTab = tabs[0];
  
  if (currentTab && isGitHubPullRequest(currentTab.url)) {
    githubDevButton.disabled = false;
  } else {
    githubDevButton.disabled = true;
  }
});

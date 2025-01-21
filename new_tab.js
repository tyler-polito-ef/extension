import { links } from "./links.js";
function init() {
  setDateTime();
  setupHotkeys();
  populateLinkGrid();
}

function setDateTime() {
  let el = document.querySelector(".dateTime");
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateOfMonth = date.getDate();

  el.textContent = `${day}, ${month} ${dateOfMonth}`;
}

function setupHotkeys() {
  document.addEventListener("keydown", (event) => {
    if (
      event.target.tagName === "INPUT" ||
      event.target.tagName === "TEXTAREA"
    ) {
      return;
    }

    const key = event.key.toLowerCase();
    const isShift = event.shiftKey;

    const matchingLink = links.find((link) => {
      if (!link.hotkey) return false;

      const hotkeyIsUpperCase = link.hotkey === link.hotkey.toUpperCase();
      const hotkeyKey = link.hotkey.toLowerCase();

      return hotkeyKey === key && isShift === hotkeyIsUpperCase;
    });

    if (matchingLink) {
      window.location.href = matchingLink.url;
    }
  });
}

function populateLinkGrid() {
  const linkContainer = document.querySelector(".link-container");

  links.forEach((link) => {
    const container = document.createElement("a");
    container.href = link.url;
    container.classList.add("link");
    if (link.icon !== null) {
      const linkImg = document.createElement("img");
      linkImg.src = link.icon;
      container.appendChild(linkImg);
    } else {
      const linkIcon = document.createElement("span");
      linkIcon.classList.add("linkIcon");
      linkIcon.textContent = "🔗";
      container.appendChild(linkIcon);
    }
    // Add title under the icon
    const linkName = document.createElement("span");
    linkName.textContent = link.name;
    container.appendChild(linkName);

    // Add hotkey span in the top right corner if available
    if (link.hotkey) {
      const hotkeyIcon = document.createElement("span");
      hotkeyIcon.textContent = link.hotkey;
      hotkeyIcon.classList.add("linkHotkey");
      container.appendChild(hotkeyIcon);
    }

    linkContainer.appendChild(container);
  });
}

init();

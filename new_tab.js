function init() {
  setDateTime();
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

function populateLinkGrid() {
  const linkContainer = document.querySelector(".link-container");
  const links = [
    {
      name: "EF repos",
      category: "development",
      url: "https://github.com/orgs/eftours/repositories",
      icon: "./assets/links/github.png",
    },
    {
      name: "wojo-web",
      category: "development",
      url: "https://github.com/eftours/wojo-web",
      icon: "./assets/links/github.png",
    },
    {
      name: "wojo-api",
      category: "development",
      url: "https://github.com/eftours/wojo-api",
      icon: "./assets/links/github.png",
    },
    {
      name: "wojo rfc",
      category: "development",
      url: "https://github.com/eftours/wj-rfcs/discussions",
      icon: "./assets/links/github.png",
    },
    {
      name: "PR's",
      category: "development",
      url: "https://github.com/eftours/wojo-web/pulls?q=is%3Apr+is%3Aopen+-reviewed-by%3Atyler-polito-ef",
      icon: "./assets/links/pull-request.png",
    },
    {
      name: "jira",
      category: "development",
      url: "https://ef-wojo.atlassian.net/jira/software/projects/WWB/boards/196",
      icon: "./assets/links/jira.png",
    },
    {
      name: "wojo admin",
      category: "development",
      url: "https://wojo.tours",
      icon: "./assets/links/ef_wojo.png",
    },
    {
      name: "UB",
      category: "development",
      url: "https://ub-us.wojo-web.tours/",
      icon: "./assets/links/ultimatebreak.png",
    },
    {
      name: "GAT",
      category: "development",
      url: "https://gat-us.wojo-web.tours/",
      icon: "./assets/links/goahead.png",
    },
    {
      name: "Storyblok",
      category: "development",
      url: "https://app.storyblok.com/#/me/spaces",
      icon: "./assets/links/storyblok.ico",
    },
    {
      name: "Claude",
      category: "development",
      url: "https://claude.ai/new",
      icon: "./assets/links/claude.svg",
    },
    {
      name: "AWS",
      category: "development",
      url: "https://eftours.awsapps.com/",
      icon: "./assets/links/aws.svg",
    },
  ];

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
    const linkName = document.createElement("span");
    linkName.textContent = link.name;
    container.appendChild(linkName);
    linkContainer.appendChild(container);
  });
}

init();

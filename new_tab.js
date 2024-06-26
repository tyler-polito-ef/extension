function init() {
  setDateTime();
  populateLinkGrid();
}

function setDateTime() {
  let el = document.querySelector('.dateTime');
  const date = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateOfMonth = date.getDate();

  el.textContent = `${day}, ${month} ${dateOfMonth}`;
}

function populateLinkGrid() {
  const linkContainer = document.querySelector('.linkContainer');
  const links = [
    {
      name: 'Mail',
      category: 'mail',
      url: 'https://outlook.office.com/mail/inbox/id/AAQkAGRlOTE0MjNlLTY4ODAtNDM3OS1iNmVkLTkxZWZlZjk2ODRjMwAQACriAWRxIAhAjocWKg3j16g%3D',
      icon: './assets/links/mail.jpeg',
    },
    {
      name: 'Calendar',
      category: 'mail',
      url: 'https://outlook.office.com/calendar/view/workweek',
      icon: './assets/links/calendar.png',
    },
    {
      name: 'EF repos',
      category: 'development',
      url: 'https://github.com/orgs/eftours/repositories',
      icon: './assets/links/github.png',
    },
    {
      name: 'wojo-web',
      category: 'development',
      url: 'https://github.com/eftours/wojo-web',
      icon: './assets/links/github.png',
    },
    {
      name: "PR's",
      category: 'development',
      url: 'https://github.com/eftours/wojo-web/pulls?q=is%3Apr+is%3Aopen+-reviewed-by%3Atyler-polito-ef',
      icon: './assets/links/pull-request.png',
    },
    {
      name: 'wojo-api',
      category: 'development',
      url: 'https://github.com/eftours/wojo-api',
      icon: './assets/links/github.png',
    },
    {
      name: 'ub-web',
      category: 'development',
      url: 'https://github.com/eftours/ub-web',
      icon: './assets/links/github.png',
    },
    {
      name: 'wojo rfc',
      category: 'development',
      url: 'https://github.com/eftours/wj-rfcs/discussions',
      icon: './assets/links/github.png',
    },
    {
      name: 'jira',
      category: 'development',
      url: 'https://ef-wojo.atlassian.net/jira/software/projects/WWB/boards/196',
      icon: './assets/links/jira.png',
    },
    {
      name: 'UB',
      category: 'development',
      url: 'https://ub-us.wojo-web.tours/',
      icon: './assets/links/ultimatebreak.png',
    },
    {
      name: 'GAT',
      category: 'development',
      url: 'https://gat-us.wojo-web.tours/',
      icon: './assets/links/goahead.png',
    },
    {
      name: 'Storyblok',
      category: 'development',
      url: 'https://app.storyblok.com/#/me/spaces',
      icon: './assets/links/storyblok.ico',
    },
    {
      name: 'ChatGPT',
      category: 'development',
      url: 'https://chatgpt.com/',
      icon: './assets/links/chatgpt.svg',
    },
    {
      name: 'Local account',
      category: 'development',
      url: 'http://localhost:3000/myaccount',
      icon: null,
    },
  ];

  links.forEach((link) => {
    const container = document.createElement('a');
    container.href = link.url;
    container.classList.add('link');
    if (link.icon !== null) {
      const linkImg = document.createElement('img');
      linkImg.src = link.icon;
      container.appendChild(linkImg);
    } else {
      const linkIcon = document.createElement('span');
      linkIcon.classList.add('linkIcon');
      linkIcon.textContent = '🔗';
      container.appendChild(linkIcon);
    }
    const linkName = document.createElement('span');
    linkName.textContent = link.name;
    container.appendChild(linkName);
    linkContainer.appendChild(container);
  });
}

init();

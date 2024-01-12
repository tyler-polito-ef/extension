function getCookieValue(cookieName) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + '=')) {
      return cookie.substring(cookieName.length + 1);
    }
  }
  return null;
}

function setCookieValue(cookieName, cookieValue) {
  document.cookie = `${cookieName}=${cookieValue}`;
}

document.getElementById('get-loginCreds').addEventListener('click', () => {
  const loginCreds = getCookieValue('loginCreds');
  if (loginCreds) {
    document.getElementById('loginCreds').value = loginCreds;
  } else {
    alert('No login creds');
  }
});

document.getElementById('set-loginCreds').addEventListener('click', () => {
  const loginCreds = document.getElementById('loginCreds').value;
  setCookieValue('loginCreds', loginCreds);
});

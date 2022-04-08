export const addNotificationHelper = (notification, content, notificationType) => {
  notification && notification.addNotification({
    message: content.toString(),
    level: notificationType
  });
};

export const emailValidation = value => {
  if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
    return true;
  }
  return false;
};

export const getCookie = (name) => {
  const getCookieValues = (cookie) => {
    const cookieArray = cookie.split('=');
    return cookieArray[1].trim();
  };

  const getCookieNames = (cookie) => {
    const cookieArray = cookie.split('=');
    return cookieArray[0].trim();
  };

  const cookies = document.cookie.split(';');
  const cookieValue = cookies.map(getCookieValues)[cookies.map(getCookieNames).indexOf(name)];
  return (cookieValue === undefined) ? null : cookieValue;
};
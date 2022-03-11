const cookieKey = /token=/;

export const isCheckLogin = (cookie) => {
  const isCookie = cookie.filter((item) => {
    const findCookie = cookieKey.test(item);
    return findCookie && item;
  });

  return !!isCookie.length;
};

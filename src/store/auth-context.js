import React, { useCallback, useEffect, useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  userData: {},
  isLoggedIn: false,
  userRole: null,
  login: (token, userRole, userData, exp) => {},
  logout: () => {},
  baseURL: 'http://localhost:8080',
  setBaseURL: (url) => {},
});

let timeout;

const calcRemainingTime = (expTime) => {
  const currTime = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Tehran' })
  ).getTime();
  const expiring = new Date(
    new Date(expTime).toLocaleString('en-US', { timeZone: 'Asia/Tehran' })
  ).getTime();
  return expiring - currTime;
};

const checkInitToken = () => {
  // const data = JSON.parse(localStorage.getItem('creds'));
  const storedToken = localStorage.getItem('token');
  const expTime = localStorage.getItem('exp');
  const remaining = calcRemainingTime(expTime);
  if (remaining <= 3600) {
    localStorage.clear();
    return null;
  }
  return {
    token: storedToken,
    remaining,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = checkInitToken();
  let initToken;
  if (tokenData) {
    initToken = tokenData.token;
  }
  const [token, setToken] = useState(initToken);
  // const data = JSON.parse(localStorage.getItem('creds'));
  const [userRole, setUserRole] = useState(localStorage.getItem('role'));
  const [baseURL, setBaseURL] = useState(
    localStorage.getItem('baseURL')
      ? localStorage.getItem('baseURL')
      : 'http://localhost:8080'
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  const userLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setUserRole(null);
    // localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('exp');
    if (timeout) {
      clearTimeout(timeout);
    }
  }, []);

  const loginHandler = (token, userRole, userData, expTime) => {
    setUserRole(userRole);
    setUserData({
      firstName: userData.firstName,
      lastName: userData.lastName,
      code: userData.code,
    });
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('role', userRole);
    localStorage.setItem(
      'user',
      JSON.stringify({
        firstName: userData.firstName,
        lastName: userData.lastName,
        code: userData.code,
      })
    );
    localStorage.setItem('exp', expTime);
    localStorage.setItem('baseURL', baseURL);
    const remaining = calcRemainingTime(expTime);
    timeout = setTimeout(logoutHandler, remaining);
  };

  const setURL = (url) => {
    setBaseURL(url);
  };

  useEffect(() => {
    if (tokenData) {
      timeout = setTimeout(logoutHandler, tokenData.remaining);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    userData: userData,
    isLoggedIn: userLoggedIn,
    userRole: userRole,
    login: loginHandler,
    logout: logoutHandler,
    baseURL: baseURL,
    setBaseURL: setURL,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
// localStorage.setItem(
//   'creds',
//   JSON.stringify({
//     token: token,
//     role: userRole,
//     baseURL: baseURL,
//     exp: expTime,
//     user: {
//       firstName: userData.firstName,
//       lastName: userData.lastName,
//       code: userData.code,
//     },
//   })
// );
export default AuthContext;

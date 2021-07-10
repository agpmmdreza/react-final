import { Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { useContext, Suspense } from 'react';
import AuthContext from './store/auth-context';
// import SignInPage from './pages/SignInPage';
import Dashboard from './components/Dashboards/Dashboard';
import LoginPage from './pages/LoginPage';
// const Dashboard = React.lazy(() => import('./components/Dashboards/Dashboard'));

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <div className='app-container'>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            {authCtx.isLoggedIn && (
              <Route path='/dashboard'>
                <Dashboard />
              </Route>
            )}
            {!authCtx.isLoggedIn && (
              <Route path='/signin'>
                <LoginPage />
              </Route>
            )}
            <Route path='*'>
              {authCtx.isLoggedIn ? (
                <Redirect to='/dashboard' />
              ) : (
                <Redirect to='/signin' />
              )}
            </Route>
          </Switch>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;

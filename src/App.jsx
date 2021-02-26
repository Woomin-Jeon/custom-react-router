import React from 'react';

import BrowserRouter from './react-router/BrowserRouter';
import Switch from './react-router/Switch';
import Route from './react-router/Route';
import useHistory from './react-router/useHistory';

export default function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}

function Navigator() {
  const history = useHistory();

  return (
    <>
      <button type="button" onClick={() => history.push('/')}>/home</button>
      <button type="button" onClick={() => history.push('/login')}>/login</button>
      <button type="button" onClick={() => history.push('/about')}>/about</button>
    </>
  );
}

function Home() {
  return <h1>Home 페이지 입니다</h1>;
}

function Login() {
  return <h1>Login 페이지 입니다</h1>;
}

function About() {
  return <h1>About 페이지 입니다</h1>;
}

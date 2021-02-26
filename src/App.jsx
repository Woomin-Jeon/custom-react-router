import React from 'react';

import Router from './react-router/Router';
import Route from './react-router/Route';

export default function App() {
  return (
    <>
      <Navigator />
      <Router>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
      </Router>
    </>
  );
}

function Navigator() {
  return (
    <>
      <button type="button" onClick={() => location.href = '/'}>/home</button>
      <button type="button" onClick={() => location.href = '/login'}>/login</button>
      <button type="button" onClick={() => location.href = '/about'}>/about</button>
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

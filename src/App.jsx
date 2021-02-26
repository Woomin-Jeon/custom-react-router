import React from 'react';

export default function App() {
  return (
    <>
      <Navigator />
      <Home />
      <Login />
      <About />
    </>
  );
}

function Navigator() {
  return (
    <>
      <button type="button">/home</button>
      <button type="button">/login</button>
      <button type="button">/about</button>
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

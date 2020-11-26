import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--raisin-black);
  color: var(--copper-rose);
`;

const GlobalStyle = createGlobalStyle`
body {
    background-color:  #272838ff;
    color:  #9b6a6cff;

}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Pamith Ratnayake</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

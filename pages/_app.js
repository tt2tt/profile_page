import '../styles/globals.css';
import { Global } from '@emotion/react';
import typeWriter from '../styles/globals.js';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={typeWriter} />
      <Component {...pageProps} />
    </>
  );
}
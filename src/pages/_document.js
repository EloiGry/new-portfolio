import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&family=Unbounded:wght@300;500&display=swap" rel="stylesheet"></link>
      </Head>
      <body className='text-black font-Inter text-base'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

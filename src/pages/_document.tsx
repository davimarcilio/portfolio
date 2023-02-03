import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta
          property="og:title"
          content="Davi Marcilio - Full-Stack Developer"
          key="title"
        />
        <meta
          property="og:image"
          content="https://uploaddeimagens.com.br/images/004/328/774/full/Screenshot_51.png?1675453186"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Davi Marcilio - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="JavaScript, TypeScript Full Stack Developer"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          media="(prefers-color-scheme: dark)"
          href="/icon/dark/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          media="(prefers-color-scheme: dark)"
          href="/icon/dark/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          media="(prefers-color-scheme: dark)"
          href="/icon/dark/favicon-16x16.png"
        />
        <link rel="manifest" href="icon/dark/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          media="(prefers-color-scheme: light)"
          href="/icon/light/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          media="(prefers-color-scheme: light)"
          href="/icon/light/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          media="(prefers-color-scheme: light)"
          href="/icon/light/favicon-16x16.png"
        />
        <link rel="manifest" href="icon/light/site.webmanifest" />
      </Head>
      <body className="bg-stone-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>Davi Marcilio</title>
        <meta
          property="og:title"
          content="Davi Marcilio - Full-Stack Developer"
          key="title"
        />
        <meta
          property="og:image"
          content="https://uploaddeimagens.com.br/imagens/LNyMsEA"
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
      </Head>
      <body className="bg-stone-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

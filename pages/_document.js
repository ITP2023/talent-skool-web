import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/Talent Skool Updated Logo PNG Format 1.png" />
        <meta property="og:url" content="https://talentskool.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Welcome to TalentSkool" />
        <meta
          property="og:description"
          content="Join a community that values and harnesses unique talents."
        />
        <meta
          property="og:image"
          content="/Talent Skool Updated Logo PNG Format 1.png"
        />

        {/* for twitter */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="talentskool.com" />
        <meta property="twitter:url" content="https://talentskool.com" />
        <meta name="twitter:title" content="Welcome to TalentSkool" />
        <meta
          name="twitter:description"
          content="Join a community that values and harnesses unique talents."
        />
        <meta
          name="twitter:image"
          content="/Talent Skool Updated Logo PNG Format 1.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

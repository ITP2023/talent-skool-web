import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/Talent Skool Updated Logo PNG Format 1.png" />
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-MFRWV4S"></script>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R1899FMVK0"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-R1899FMVK0');
              `,
          }}
        />
        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R1899FMVK0"
        ></script>
        {/* <script>
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-R1899FMVK0');
      `}
        </script> */}
        {/* End Google Analytics (gtag.js) */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NGQWBV4D"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

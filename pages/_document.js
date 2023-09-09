import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/Talent Skool Updated Logo PNG Format 1.png" />
        <Script src="https://www.googleoptimize.com/optimize.js?id=OPT-MFRWV4S"></Script>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V22PT6W925"
        ></Script>
        <Script id="google-analytics">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-V22PT6W925');
              `}
        </Script>

        {/* End Google Analytics (gtag.js) */}
        <Script src="https://www.googleoptimize.com/optimize.js?id=OPT-MFRWV4S"></Script>
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NGQWBV4D');
      `}
        </Script>
        {/*<noscript>
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

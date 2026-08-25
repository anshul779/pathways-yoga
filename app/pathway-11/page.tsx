"use client";

import Script from "next/script";
import { bodyHtml } from "./page-content";

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script src="/js/pathway-11-main.js" strategy="afterInteractive" />
    </>
  );
}

import Head from "@docusaurus/Head";
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'esp-web-install-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default function EspInstallButton({ unsupportedMessage = "Provisioning via USB only works in browsers which support Web Serial, such as Chrome or Edge." }) {
  return (
    <>
      <Head>
        <script
          type="module"
          src="https://unpkg.com/esp-web-tools@9/dist/web/install-button.js?module"
        ></script>
      </Head>
      <esp-web-install-button manifest="https://shop.horner.tj/api/upsy-desky-firmware/manifest">
        <span slot="unsupported">{unsupportedMessage}</span>
      </esp-web-install-button>
    </>
  )
}
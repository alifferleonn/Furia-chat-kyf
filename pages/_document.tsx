import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          #dify-chatbot-bubble-button {
            background-color: #000000 !important;
            right: 2rem !important;
            bottom: 2rem !important;
          }
          #dify-chatbot-bubble-window {
            width: 24rem !important;
            height: 40rem !important;
            right: 4rem !important;
            bottom: 4rem !important;
          }
        `}</style>
      </Head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.difyChatbotConfig = {
        token: 'd3XFR0gJkNJid01v',
        draggable: true,
        dragAxis: 'both',
        systemVariables: {}
      };

      (function() {
        var script = document.createElement('script');
        script.src = 'https://udify.app/embed.min.js';
        script.id = 'd3XFR0gJkNJid01v';
        script.defer = true;
        document.body.appendChild(script);
      })();

      (function waitForChatbot() {
        const chatWindow = document.getElementById('dify-chatbot-bubble-window');
        if (!chatWindow) {
          return setTimeout(waitForChatbot, 500); // Aguarda até o chatbot aparecer
        }

        // Deixa o container transparente
        chatWindow.style.backgroundColor = 'transparent';
        chatWindow.style.backdropFilter = 'none';
        chatWindow.style.boxShadow = 'none';

        // Tenta alterar o fundo interno
        const innerDiv = chatWindow.querySelector('div');
        if (innerDiv) {
          innerDiv.style.backgroundColor = 'black';
          innerDiv.style.borderRadius = '1rem'; // deixa as bordas arredondadas
        }
      })();
    `,
          }}
        />
      </body>
    </Html>
  );
}

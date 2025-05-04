import { useState } from "react";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "yellow" })}>FURIA</span>
          <br />
          <span className={title()}>Chat & KYF</span>
          <div className={subtitle({ class: "mt-4" })}>
            Chat interativo para obter informações e KYF para obter informações sobre os fãs.
          </div>
        </div>

        {/* Botões principais */}
        {/* <div className="flex gap-3 mt-10">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div> */}

        {/* Feed do Instagram com estilo melhorado */}
      <div className="mt-12 w-full max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-foreground text-center mb-6">
          Últimos Posts da FURIA
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-2xl  p-4">
          <div className="relative w-full h-[550px] flex justify-center items-center">
            <iframe
              src="https://www.instagram.com/furiagg/embed"
              width="100%"
              height="100%"
              className="rounded-xl border-none"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      </section>
    </DefaultLayout>
  );
}

import { Link } from "@nextui-org/react";
import Image from "next/image";

function LibFinderArticle() {
  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Image
            className="mr-2 w-8 h-8 rounded-lg"
            src="/svg/python.svg"
            alt="JavaScript"
            width={32}
            height={32}
          />
          <div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              pywhatsapp
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                Feb. 8, 2022
              </time>
            </p>
          </div>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">
        Una librería simple para enviar mensajes a través de WhatsApp Web. Fue
        publicada recientemente y tiene una actualización en el marco de tiempo
        especificado.
      </p>
      <div className="flex items-center gap-2 mt-3 flex-wrap">
        <Link
          isExternal
          showAnchorIcon
          href="https://pypi.org/project/pywhatsapp/"
          color="foreground"
        >
          pywhatsapp
        </Link>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/sirishakumar/pywhatsapp"
          color="foreground"
        >
          pywhatsapp en GitHub
        </Link>
      </div>
    </article>
  );
}

export default LibFinderArticle;

import { format } from "@formkit/tempo";
import { Link } from "@nextui-org/react";
import Image from "next/image";

import { LibFinderRecommendation } from "@/interfaces/libfinder.interface";

interface Props {
  recommendation: LibFinderRecommendation;
}

function LibFinderArticle({ recommendation }: Props) {
  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Image
            className="mr-2 w-6 h-6 rounded-lg"
            src="/svg/python.svg"
            alt="JavaScript"
            width={32}
            height={32}
          />
          <div>
            <span className="text-base font-semibold text-gray-900 dark:text-white">
              {recommendation.name}
            </span>
          </div>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">
        {recommendation.description}
      </p>
      <div className="flex items-center gap-2 mt-3 flex-wrap">
        <Link
          isExternal
          showAnchorIcon
          href={recommendation.link}
          color="foreground"
        >
          {recommendation.name}
        </Link>
      </div>
    </article>
  );
}

export default LibFinderArticle;

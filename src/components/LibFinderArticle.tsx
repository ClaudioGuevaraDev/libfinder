import { format } from "@formkit/tempo";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

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
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                {format(recommendation.publication_date, {
                  date: "medium",
                })}
              </time>
            </p>
          </div>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">
        {recommendation.description}
      </p>
      <div className="flex items-center gap-2 mt-3 flex-wrap">
        <a
          href={recommendation.link}
          target="_blank"
          className="inline-flex items-center font-medium text-white hover:text-opacity-80 ease-out duration-200"
        >
          {recommendation.name}
          <FaExternalLinkAlt className="w-3 h-3 ms-2" />
        </a>
      </div>
    </article>
  );
}

export default LibFinderArticle;

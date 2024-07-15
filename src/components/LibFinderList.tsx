"use client";

import { useStore } from "exome/react";

import { libFinderStore } from "@/store/libfinder.store";

import LibFinderArticle from "./LibFinderArticle";

function LibFinderList() {
  const { recommendations, isLoading } = useStore(libFinderStore);

  return (
    <div className="mt-12">
      {isLoading && (
        <div className="space-y-4">
          {Array.from(Array(3).keys()).map((index) => (
            <div
              key={index}
              role="status"
              className="flex items-center justify-center h-44 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ))}
        </div>
      )}

      {recommendations.map((recommendation) => (
        <LibFinderArticle
          key={recommendation.name}
          recommendation={recommendation}
        />
      ))}
    </div>
  );
}

export default LibFinderList;

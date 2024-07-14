"use client";

import { Skeleton } from "@nextui-org/react";
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
            <Skeleton key={index} className="rounded-lg">
              <div className="h-44 rounded-lg bg-default-300"></div>
            </Skeleton>
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

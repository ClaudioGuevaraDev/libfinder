"use client";

import { useStore } from "exome/react";

import { libFinderStore } from "@/store/libfinder.store";

import LibFinderArticle from "./LibFinderArticle";

function LibFinderList() {
  const { recommendations } = useStore(libFinderStore);

  return (
    <div className="mt-12">
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

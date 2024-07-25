import { Selection } from "@nextui-org/react";

import { LibFinderRecommendation } from "@/interfaces/libfinder.interface";

export const libfinderRequest = async (
  search: string,
  languages: Selection,
  licenses: Selection,
  model: string,
  recommendations: string
): Promise<LibFinderRecommendation[]> => {
  const response = await fetch("/api/libfinder", {
    method: "POST",
    body: JSON.stringify({
      prompt: search,
      languages: Array.from(languages).join(","),
      licenses:
        Array.from(licenses).length === 0
          ? "Any"
          : Array.from(licenses).join(","),
      model: model,
      recommendations: recommendations,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return JSON.parse(data.libraries);
};

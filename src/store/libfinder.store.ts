import { Selection } from "@nextui-org/react";
import { Exome } from "exome";

import { LibFinderRecommendation } from "@/interfaces/libfinder.interface";

export class LibFinderStore extends Exome {
  public recommendations: LibFinderRecommendation[] = [];
  public isLoading = false;
  public languages: Selection = new Set([
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "PHP",
  ]);
  public licenses: Selection = new Set([]);

  public setRecommendations(recommendations: LibFinderRecommendation[]) {
    this.recommendations = recommendations;
  }

  public setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  public setLanguages(languages: Selection) {
    this.languages = languages;
  }

  public setLicenses(licenses: Selection) {
    this.licenses = licenses;
  }
}

export const libFinderStore = new LibFinderStore();

import { Selection } from "@nextui-org/react";
import { Exome } from "exome";

import { LibFinderRecommendation } from "@/interfaces/libfinder.interface";
import { languageRecommendationOptions, modelOptions } from "@/utils/menus";

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
  public model: Selection = new Set([modelOptions[0]]);
  public languageRecommendations: Selection = new Set([
    languageRecommendationOptions[0],
  ]);

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

  public setModel(model: Selection) {
    this.model = model;
  }

  public setLanguageRecommendations(recommendations: Selection) {
    this.languageRecommendations = recommendations;
  }
}

export const libFinderStore = new LibFinderStore();

import { Exome } from "exome";

import { LibFinderRecommendation } from "@/interfaces/libfinder.interface";

export class LibFinderStore extends Exome {
  public recommendations: LibFinderRecommendation[] = [];
  public isLoading = false;

  public setRecommendations(recommendations: LibFinderRecommendation[]) {
    this.recommendations = recommendations;
  }

  public setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}

export const libFinderStore = new LibFinderStore();

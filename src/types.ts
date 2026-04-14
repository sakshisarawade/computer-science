export interface NearbyMonument {
  name: string;
  distance: string;
}

export interface Monument {
  id?: string;
  name: string;
  location: string;
  description: string[];
  builtYear: string;
  architect: string;
  significance: string;
  image: string;
  nearbyMonuments?: NearbyMonument[];
  interestingFacts?: string[];
  // Legacy fields for compatibility if needed
  nearbyAttractions?: any[];
  restaurants?: any[];
  hotels?: any[];
  travelTips?: string[];
}

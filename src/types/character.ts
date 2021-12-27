export interface CharacterData {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  images: {
    headShot: string;
    main: string;
  };
  gender: string;
  species: string;
  homePlanet: string;
  occupation: string;
  sayings: [string];
  id: number;
  age: string;
}

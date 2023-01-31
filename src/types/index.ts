export interface Story {
  story: string;
  characters: {
    name: string;
    active: boolean;
  }[];
  locations: {
    name: string;
    active: boolean;
  }[];
  items: {
    name: string;
    active: boolean;
  }[];
}

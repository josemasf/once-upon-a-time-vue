export interface Story {
  title?: string;
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

export interface Character {
  name: string;
  active: boolean;
}

export interface Location {
  name: string;
  active: boolean;
}

export interface Item {
  name: string;
  active: boolean;
}

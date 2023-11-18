// General tab

export interface ISearXNGResultsGeneral {
  query: string;
  number_of_results: number;
  results: Array<{
    title: string;
    url: string;
    content: string;
    engine: string;
    parsed_url: Array<string>;
    template: string;
    engines: Array<string>;
    positions: Array<number>;
    img_src: string;
    score: number;
    category: string;
  }>;
  answers: Array<any>;
  corrections: Array<any>;
  infoboxes: Array<{
    infobox: string;
    id: string;
    content: string;
    img_src: string;
    urls: {
      title: string;
      url: string;
    }[];
    attributes: Array<any>;
    engine: string;
    engines: Array<string>;
  }>;
  suggestions: Array<any>;
  unresponsive_engines: Array<string[]>;
}

// Images tab

export interface ISearXNGResultsImages {
  query: string;
  number_of_results: number;
  results: Array<{
    title: string;
    url: string;
    template: string;
    thumbnail_src: string;
    img_src: string;
    engine: string;
    parsed_url: Array<string>;
    engines: Array<string>;
    positions: Array<number>;
    content: string;
    source: string;
    img_format: string;
    score: number;
    category: string;
  }>;
  answers: Array<any>;
  corrections: Array<any>;
  infoboxes: Array<any>;
  suggestions: Array<any>;
  unresponsive_engines: Array<string[]>;
}

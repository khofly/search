export interface IHoverData {
  description: string;
  linkUrl: string;
  wikiUrl: string;
  bangsEngine: string[];
  bangsCategory: string[];
}

export const HOVER_DATA: { [key in string]: IHoverData } = {
  bing: {
    description:
      "Microsoft Bing, commonly referred to as Bing, is a web search engine owned and operated by Microsoft. The service traces its roots back to Microsoft's earlier search engines, including MSN Search, Windows Live Search, and Live Search. Bing offers a broad spectrum of search services, encompassing web, video, image, and map search products, all developed using ASP.NET. (Source: wikipedia)",
    linkUrl: "https://www.bing.com",
    wikiUrl: "wikidata.org/wiki/Q182496",
    bangsEngine: ["!bing", "!bi"],
    bangsCategory: ["!general", "!web"],
  },
};

export const shouldDisplayIA = (query: string | null, keywords: string[]) => {
  let shouldDisplay = false;

  keywords.map((val) => {
    if (query?.toLowerCase().includes(val)) shouldDisplay = true;
  });

  return shouldDisplay;
};

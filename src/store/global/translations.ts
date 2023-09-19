import { DotNestedKeys } from "@ts/global.types";
import { ITranslations } from "./store";

export const getValueByString = (
  obj: ITranslations,
  keyString: DotNestedKeys<ITranslations>
): string => {
  const keys = keyString.split(".") as any[];

  let loopObj = obj;
  let result;

  for (const key of keys) {
    // @ts-ignore
    if (keys.indexOf(key) === keys.length - 1) result = loopObj[key];
    // @ts-ignore
    loopObj = loopObj[key];
  }

  return result;
};

import nextConfigBase from "../../../../next.config.mjs";
import { homeRoute } from "~/routes";

export function href(path: string): string {
  return `${nextConfigBase.basePath}${homeRoute}${path}/`;
}

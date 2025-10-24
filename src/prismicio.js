import * as prismic from "@prismicio/client";
import config from "../slicemachine.config.json";

export const repositoryName = config.repositoryName;

export const routes = [
  { type: "page_home", path: "/" },
  { type: "page_sector", path: "/:uid" },
];

export function createClient(options = {}) {
  const client = prismic.createClient(repositoryName, {
    routes,
    ...options,
  });

  return client;
}

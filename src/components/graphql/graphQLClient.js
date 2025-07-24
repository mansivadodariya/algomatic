import { GraphQLClient } from "graphql-request";
export const graphcms = new GraphQLClient("https://fx-strapi.rejoicehub.com/graphql", {
  cache: "no-store",
});

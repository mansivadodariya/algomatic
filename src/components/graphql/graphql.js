import { gql } from "graphql-request";
export const GetFxStrategie = gql`
  query FxStrategie($pagination: PaginationArg, $sort: [String]) {
    fxStrategie(pagination: $pagination, sort: $sort) {
      Title
      Slug
      Price
      Link
      CoverImage {
        url
      }
      ShortDescription
      Description
      documentId
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

export const GetFxStrategieDetails = gql`
  query FxStrategie($filters: FxStrategiesFiltersInput) {
    fxStrategie(filters: $filters) {
      Title
      Slug
      Price
      Link
      CoverImage {
        url
      }
      ShortDescription
      Description
      documentId
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

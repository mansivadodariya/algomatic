import { GetFxStrategieDetails } from "@/components/graphql/graphql";
import { graphcms } from "@/components/graphql/graphQLClient";
import StrategiesDetails from "@/renderning/strategiesDetails";
export default function index() {
  return (
    <div>
      <StrategiesDetails />
    </div>
  );
}
// export async function getServerSideProps({ query }) {
//   const variables = {
//     filters: {
//       Slug: {
//         eq: query?.slug,
//       },
//     },
//   };
//   const { fxStrategie } = await graphcms?.request(GetFxStrategieDetails, variables);
//   if (!fxStrategie?.[0]) {
//     return {
//       redirect: {
//         destination: "/strategies",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       FX_StrategieDetails: fxStrategie?.[0],
//     },
//   };
// }

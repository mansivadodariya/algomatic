import { GetFxStrategie } from "@/components/graphql/graphql";
import { graphcms } from "@/components/graphql/graphQLClient";
import { getStrategies } from "@/lib/strategyApi";
import Strategies from "@/renderning/strategies";
export default function index() {
  return (
    <div>
      <Strategies/>
    </div>
  );
}
// export async function getServerSideProps() {
//   const variables = {
//     pagination: {
//       limit: 10000,
//     },
//     sort: ["createdAt:desc"],
//   };
//   const Data = await graphcms?.request(GetFxStrategie, variables);
//   return {
//     props: {
//       FX_StrategieContent: Data?.fxStrategie || [],
//     },
//   };
// }

// export async function getServerSideProps() {
//   const data = await getStrategies(1, 10)
//   return {
//     props: {
//       FX_StrategieContent: data?.payload?.data || [],
//     },
//   }

  // const variables = {
  //   pagination: {
  //     limit: 10000,
  //   },
  //   sort: ["createdAt:desc"],
  // };
  // const Data = await graphcms?.request(GetFxStrategie, variables);
  // return {
  //   props: {
  //     FX_StrategieContent: data || [],
  //   },
  // };
// }


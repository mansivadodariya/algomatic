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

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

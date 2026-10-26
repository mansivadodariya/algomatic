import { useEffect } from "react";
import { useRouter } from "next/router";
import AffiliateDashboard from "@/renderning/affiliateDashboard";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard?tab=affiliate");
  }, []);

  return (
    <div>
      <AffiliateDashboard />
    </div>
  );
}

import { useRouter } from "next/router";
import React from "react";

function useUrlParams() {
  const router = useRouter();
  const returnUrl = router.query.return_url;

  return {
    returnUrl,
  };
}

export default useUrlParams;

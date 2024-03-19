import { useRouter } from "next/router";

function useUrlParams() {
  const router = useRouter();
  const returnUrl = router.query.return_url;
  const total = router.query.total

  return {
    returnUrl,
    total
  };
}

export default useUrlParams;

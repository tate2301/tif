import { useRouter } from "next/router";

function useUrlParams() {
  const router = useRouter();
  const returnUrl = router.query.return_url;
  const total = router.query.total;
  const key = router.query.key;
  const sessionId = router.query.sessionId;

  return {
    returnUrl,
    total,
    key,
    sessionId,
  };
}

export default useUrlParams;

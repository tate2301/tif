/* eslint-disable @typescript-eslint/ban-types */
import { useRouter } from "next/router";

type Props = {};

const OverviewNavbar = (props: Props) => {
  const router = useRouter();

  const { pathname } = router;
  const overview_options = [
    { name: "All Payments", _id: "all-payments", location: "/payments" },
    { name: "Transactions", _id: "transactions", location: "/transactions" },
  ];

  return (
    <div className="flex overflow-scroll no-scrollbar flex-row items-center pb-4 border-b border-zinc-400/20 w-full">
      {overview_options.map((item, index) => (
        <button
          onClick={() => {
            router.push(`${item.location}`);
          }}
          key={index}
          className={`${
            pathname === item.location ? "bg-secondary font-semibold " : ""
          } py-2 outline-none px-4 rounded-full main-link-text cursor-pointer `}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default OverviewNavbar;

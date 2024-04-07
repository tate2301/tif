/* eslint-disable @typescript-eslint/ban-types */
import { useRouter } from "next/router";

type Props = {};

const DevelopersNavigation = (props: Props) => {
  const router = useRouter();

  const { pathname } = router;
  const overview_options = [
    { name: "API Keys", _id: "all-payments", location: "/settings/developers" },
    { name: "Webhooks", _id: "transactions", location: "/transactions" },
    { name: "Events", _id: "transactions", location: "/transactions" },
    { name: "Logs", _id: "transactions", location: "/transactions" },
    { name: "Apps", _id: "transactions", location: "/transactions" },
  ];

  console.log(pathname)

  return (
    <div className="flex overflow-scroll no-scrollbar flex-row items-center p-1 rounded-full">
      {overview_options.map((item, index) => (
        <button
          onClick={() => {
            router.push(`${item.location}`);
          }}
          key={index}
          className={`${
            pathname === item.location ? "bg-secondary font-semibold " : ""
          } py-2 outline-none px-4 text-sm rounded-full main-link-text cursor-pointer `}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default DevelopersNavigation;

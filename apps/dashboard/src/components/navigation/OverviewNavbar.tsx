/* eslint-disable @typescript-eslint/ban-types */
import { useRouter } from 'next/router';
import { useState } from 'react';

type Props = {};

const OverviewNavbar = (props: Props) => {
  const router = useRouter();

  const { pathname } = router;
  const overview_options = [
    { name: 'Overview', _id: 'overview', location: '/overview' },
    // { name: 'Analytics', _id: 'analytics' },
    { name: 'Transactions', _id: 'transactions', location: '/overview/transactions' },
    { name: 'Notifications', _id: 'notifications', location: '/overview/notifications' },
  ];
  return (
    <div className="flex overflow-scroll no-scrollbar flex-row items-center p-1 rounded bg-secondary">
      {overview_options.map((item, index) => (
        <button
          onClick={() => {
            router.push(`${item.location}`);
          }}
          key={index}
          className={`${
            pathname === item.location ? 'bg-primary font-semibold ' : ''
          } py-2 outline-none px-4 text-sm rounded main-link-text cursor-pointer `}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default OverviewNavbar;

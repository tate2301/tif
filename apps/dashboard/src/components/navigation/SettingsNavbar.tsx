/* eslint-disable @typescript-eslint/ban-types */
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const SettingsNavbar = (props: Props) => {
  const router = useRouter();

  const { pathname } = router;

  const settings_options = [
    { name: 'Projects', _id: 'projects', location: '/settings' },
    { name: 'Profile', _id: 'profile', location: '/settings/profile' },
    { name: 'Password', _id: 'password', location: '/settings/password' },
    // {
    //   name: 'Notifications',
    //   _id: 'notifications',
    //   location: '/settings/notifications',
    // },
    // { name: 'API', _id: 'api', location: '/settings/api' },
  ];
  return (
    <div className="flex">
      <div className="flex overflow-scroll no-scrollbar flex-row items-center p-1 rounded bg-secondary">
        {settings_options.map((item, index) => (
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
    </div>
  );
};

export default SettingsNavbar;

/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useState } from 'react';
import SettingsLayout from '../../../layouts/SettingsLayout';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/20/solid';
import SettingsInput from '../../../components/inputs/SettingsInput';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface SettingsProps {}

const Profile = (props: SettingsProps) => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const router = useRouter();

  const { pathname } = router;

  const settings_options = [
    { name: 'Projects', _id: 'projects', location: '/settings' },
    { name: 'Profile', _id: 'profile', location: '/settings/profile' },
    { name: 'Password', _id: 'password', location: '/settings/password' },
    {
      name: 'Notifications',
      _id: 'notifications',
      location: '/settings/notifications',
    },
    { name: 'API', _id: 'api', location: '/settings/api' },
  ];
  return (
    <SettingsLayout heading="Profile Settings">
      <div className="flex flex-col space-y-6 max-w-5xl w-full h-full">
        <p className="heading-text text-xl font-semibold">Settings</p>
        {/* profile settings */}
        <div className="flex p-4 rounded bg-secondary max-w-3xl w-full flex-col space-y-4 items-center">
          <div className=" rounded-full p-4 bg-slate-200 dark:bg-slate-700 grid items-center content-center justify-center">
            <UserCircleIcon
              height={32}
              width={32}
              className="text-slate-700 dark:text-slate-400"
            />
          </div>
          <p className="main-text text-sm font-semibold">
            Image must be 256 * 256 - Max 2MB
          </p>
          <div className="flex flex-row items-center space-x-4">
            <div className="upload p-2 text-slate-700 dark:text-white bg-white dark:bg-slate-900 rounded-lg flex flex-row items-center space-x-2">
              <ArrowUpTrayIcon height={16} width={16} />
              <p>upload</p>
            </div>
            <div className="upload p-2 text-red-600 dark:text-red-600 bg-white dark:bg-slate-900 rounded-lg flex flex-row items-center space-x-2">
              <TrashIcon height={16} width={16} />
              <p>delete</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <SettingsInput
          label="First Name"
          setValue={setFirstName}
          placeholder="first name"
          value={first_name}
          className="col-span-1"
        />
        <SettingsInput
          label="Last Name"
          placeholder="last name"
          setValue={setLastName}
          value={last_name}
          className="col-span-1"
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <SettingsInput
          label="Email"
          setValue={setEmail}
          placeholder="email"
          value={email}
          className="col-span-1"
        />
        <SettingsInput
          label="Contact Number"
          placeholder="contact number"
          setValue={number}
          value={setNumber}
          className="col-span-1"
        />
      </div>
    </SettingsLayout>
  );
};

export default Profile;

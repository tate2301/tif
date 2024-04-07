/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import DashboardLayout from './DashboardLayout';
import SettingsNavbar from '../components/navigation/SettingsNavbar';

type Props = { children: any; heading: string };

const SettingsLayout = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="flex w-full max-w-7xl mx-auto text-main flex-col space-y-8 md:p-8 p-4 min-h-screen">
        <p className="heading-text text-3xl font-bold">{props.heading}</p>
        <SettingsNavbar />
        <div className="flex w-full flex-col space-y-8">{props.children}</div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsLayout;

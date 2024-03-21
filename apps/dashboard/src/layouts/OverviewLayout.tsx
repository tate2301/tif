/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import DashboardLayout from './DashboardLayout';
import OverviewNavbar from '../components/navigation/OverviewNavbar';

type Props = { children: any; heading: string };

const OverviewLayout = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="flex w-full max-w-7xl mx-auto text-main flex-col space-y-8 md:p-8 p-4 min-h-screen">
        <p className="heading-text text-3xl font-bold">{props.heading}</p>
        <div className="flex">
          <OverviewNavbar />
        </div>
        <div className="flex w-full flex-col space-y-8 max-w-7xl mx-auto min-h-screen">
          {props.children}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OverviewLayout;

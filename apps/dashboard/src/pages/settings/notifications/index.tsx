/* eslint-disable @typescript-eslint/ban-types */
import SettingsLayout from '../../../layouts/SettingsLayout';
import React from 'react';

type Props = {};

const Notification = (props: Props) => {
  return (
    <SettingsLayout heading="Notification Settings">
      Notifications
    </SettingsLayout>
  );
};

export default Notification;

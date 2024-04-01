/* eslint-disable @typescript-eslint/no-explicit-any */
import SettingsLayout from '../../layouts/SettingsLayout';
import {
  ChartBarIcon,
  GlobeEuropeAfricaIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';

/* eslint-disable-next-line */
export interface SettingsProps {}

export function Settings(props: SettingsProps) {
  return (
    <SettingsLayout heading="Project Settings">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <ProjectSettingsComponent
          icon={
            <GlobeEuropeAfricaIcon
              height={24}
              width={24}
              className="main-text"
            />
          }
          heading="Workflow marketplace"
          description="Explore the most popular workflows"
        />
        <ProjectSettingsComponent
          icon={<PlusCircleIcon height={24} width={24} className="main-text" />}
          heading="Create new project"
          description="Dive into the editor and start creating"
        />
        <ProjectSettingsComponent
          icon={<ChartBarIcon height={24} width={24} className="main-text" />}
          heading="Request analytics"
          description="See how well you have been doing"
        />

        {/* all projects */}
        <div className="flex flex-col">
          <p className="heading-text font-semibold text-lg">All Projects</p>
          <div className="main-text text-sm">
            Manage all your projects from here
          </div>
        </div>
      </div>
        <div className="flex">
          www          
        </div>
    </SettingsLayout>
  );
}

interface ProjectSettingsComponentProps {
  icon: any;
  heading: string;
  description: string;
}

const ProjectSettingsComponent = (props: ProjectSettingsComponentProps) => {
  return (
    <div className="flex cursor-pointer hover:bg-secondary flex-row p-4 rounded-lg space-x-4 main-border">
      <div className="main-border p-2 rounded-lg ">{props.icon}</div>
      <div className="flex flex-col">
        <p className="heading-text font-semibold">{props.heading}</p>
        <p className="text-sm light-text">{props.description}</p>
      </div>
    </div>
  );
};

export default Settings;

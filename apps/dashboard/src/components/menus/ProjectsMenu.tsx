/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Avatar,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';

type Props = {};

const ProjectsMenu = (props: Props) => {
    const {theme} = useTheme()
  return (
    <Menu>
      <MenuButton>
        <div className="flex flex-row items-center main-link-text  space-x-2 main-border bg-primary rounded p-2">
          <Avatar size={'xs'} name="projects" />
          <p className='text-sm font-semibold'>Projects</p>
          <ChevronDownIcon height={20} width={20} />
        </div>
      </MenuButton>
      <MenuList bg={theme === 'dark' ? '#1e293b' : 'white'} borderColor={theme === 'dark' ? 'gray.700' : 'gray.200'} >
        <MenuGroup bg={theme === 'dark' ? '#1e293b' : 'white'} className='heading-text' title="Projects">
          <MenuItem bg={theme === 'dark' ? '#1e293b' : 'white'} className='main-text'>
            <Avatar size={'xs'} />
            <span className="main-text text-sm font-semibold ml-2">Trolliey</span>
          </MenuItem>
          <MenuItem bg={theme === 'dark' ? '#1e293b' : 'white'} className='main-text'>
            <Avatar size={'xs'} />
            <span className="main-text text-sm font-semibold ml-2">Apttrack</span>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default ProjectsMenu;

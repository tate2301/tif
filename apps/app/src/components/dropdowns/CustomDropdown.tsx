import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

interface OptionProps {
  name: string;
  _id: string;
}

type Props = {
  heading: string;
  options: OptionProps[];
};

const CustomDropdown = ({ heading, options }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-row items-center flex-shrink-0 bg-primary font-medium main-text main-border p-1.5 text-sm cursor-pointer rounded-lg">
          {heading}
          <div className="flex items-center flex-col space-x-0">
            <ChevronDownIcon height={16} width={16} />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-primary main-border rounded">
        <DropdownMenuLabel className="heading-text">{heading}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {
            options?.map((item: OptionProps, index:number)=>(
                <DropdownMenuItem key={item._id} className="font-medium text-sm main-link-text">{index+1}. {item.name}</DropdownMenuItem>
            ))
          }
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdown;

import React from "react";
import ResumeItem, { ResumeItemType } from "./types/Resume";
import { AccountBalance, Computer, School, SchoolOutlined, StorefrontOutlined, TipsAndUpdates } from '@mui/icons-material';

export const resumeItemList: ResumeItem[]  = [
    {
      name: "Itaú unibanco",
      icon: <AccountBalance />,
      aboutText: '',
      isSelected: true,
      type: ResumeItemType.WORK,
      selectedIndex: 0
    },
    {
      name: "B2W Digital",
      icon: <StorefrontOutlined />,
      aboutText: '',
      isSelected: false,
      type: ResumeItemType.WORK,
      selectedIndex: 1
    },
    {
      name: "IBM Brasil",
      icon: <Computer />,
      aboutText: '',
      isSelected: false,
      type: ResumeItemType.WORK,
      selectedIndex: 2
    },
    {
      name: "TI+ Soluções",
      icon: <TipsAndUpdates />,
      aboutText: '',
      isSelected: false,
      type: ResumeItemType.WORK,
      selectedIndex: 3
    },
    {
      name: "Fatec Americana",
      icon: <School />,
      aboutText: '',
      isSelected: false,
      type: ResumeItemType.STUDY,
      selectedIndex: 4
    },
    {
      name: "Etec Americana",
      icon: <SchoolOutlined />,
      aboutText: '',
      isSelected: false,
      type: ResumeItemType.STUDY,
      selectedIndex: 5
    }
  ] 
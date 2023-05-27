import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IOptions {
    options: string[]
 }

export enum ResumeItemType{
    WORK = "W", STUDY = "S"
}

export default interface ResumeItem {
    name: string
    icon: any
    aboutText: string
    type: ResumeItemType
    selectedIndex: number
}

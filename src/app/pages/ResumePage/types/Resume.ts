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

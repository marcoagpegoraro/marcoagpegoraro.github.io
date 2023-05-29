export enum ResumeItemType{
    WORK = "W", STUDY = "S"
}

export default interface ResumeItem {
    name: string
    icon: any
    imageUrl?: string
    date?: string
    chips?: any[]
    aboutText: string[]
    type: ResumeItemType
    selectedIndex: number
}

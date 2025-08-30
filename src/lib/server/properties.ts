export type SkillCardProperties = {
    imageSource: string;
    title: string;
    body: string;
}

export type MainProperties = {
    name: string;
    skillCardProperties: SkillCardProperties[];
    profilePictureSource: string;
}
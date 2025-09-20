export type SkillCardProperties = {
    imageSource: string;
    title: string;
    body: string;
}

export type MainProperties = {
    name: string;
    description: string;
    skillCardProperties: SkillCardProperties[];
    profilePictureSource: string;
}
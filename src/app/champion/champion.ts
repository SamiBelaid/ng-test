import { Tag } from "./tag.enum";

export interface Champion {
    id: number;
    name: string;
    title: string;
    tags: Tag[];
    key: string;
}

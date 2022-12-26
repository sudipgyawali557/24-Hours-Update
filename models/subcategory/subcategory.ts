export interface SubCategory {
    id: number;
    name: string;
    category: string;
    imagekey: string;
}

export interface CreateSubCategory {
    items: SubCategory;
    callback: Function;
    updateOnCreate: Function;
    updateOnEdit: Function;
    children?: React.ReactNode;
}

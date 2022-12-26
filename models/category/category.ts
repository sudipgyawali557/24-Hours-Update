export interface Category {
    id: number;
    name: string;
    imagekey: string;
}

export interface CreateCategory {
    items: Category;
    callback: Function;
    updateOnCreate: Function;
    updateOnEdit: Function;
    children?: React.ReactNode;
}

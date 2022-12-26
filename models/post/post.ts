export interface Post {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    coverImage: string;
    category: string;
    subcategory: string;
    source: string;
    highlight: boolean;
}

export interface CreatePost {
    items: Post;
    callback: Function;
    updateOnCreate: Function;
    updateOnEdit: Function;
    children?: React.ReactNode;
}

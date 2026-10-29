// 상품 정보에 대한 타입 설정하기
export interface Product {
    id: number;
    category: string;
    subcategory: string;
    title: string;
    price: number;
    image: string;
    description: string;
    rating: number;
}

// menu 타입 설정하기
export interface Menu {
    key: string;
    label: string;
    sub?: { key: string; labal: string[] }
}
// 전역변수에 대한 타입 설정
export interface ProductState {
    items: Product[];
    menus: Menu[];
    searchWord: string;
    onSetSearchWord: (word: string) => void;
    searchWordAll:string;
    onSetSearchWordAll: (word: string) => void;

    onFetchItems: () => void;
    onItemCategory: (cate?: string) => Product[];
}
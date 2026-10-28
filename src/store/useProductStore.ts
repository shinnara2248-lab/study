import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProductState } from "../types/Product";
import { productsData } from "../data/productsData";

export const useProductStore = create<ProductState>()(
    persist((set, get) => ({
        // 상품목록과 메뉴
        items: [],
        menus: [],
        // 검색을 저장할 메서드
        // 검색을 실행할 메서드
        // 전체 검색을 해줄 메서드
        // 전체 검색을 실행할 메서드
        // 데이터를 불러올 메서드
        onFetchItems: () => {
            const item = get().items;
            if (item.length > 0) return;
            // 상품 정보를 가져와서 data 변수에 저장하기
            const data = productsData;
            // 메뉴생성
            const labels: { [key: string]: string } = {
                men: "남자", women: "여자", accessories: "악세서리", shoes: "신발"
            }
            // 카테고리 분리하기
            // const categories = ["all", data.map(item => item.category)]
            // 중복되는 카테고리는 한번만 사용하기
            // new set(배열) 중복되는 요소를 제거하고 새로운 배열 만들기
            const categories = ["all", ...new Set(data.map(item => item.category))]
            console.log(categories);
            const menus = categories.map((cate) => {
                if (cate === "all") {
                    return { key: "all", label: "모든", sub: [] }
                }

                return {
                    key: cate,
                    label: labels[cate],
                    sub: []
                }
            })
            set({
                items: data,
                menus
            })
            console.log(item, menus);
        },
        // 카테고리를 불러올 메서드
        // onItemCategory: (cate) => {
        //     return
        // }
    }), {
        name: "product-storage",
        partialize: (state) => ({

        })
    })
)
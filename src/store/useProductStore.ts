
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProductState } from "../types/Product";
import { productsData } from "../data/productsData";

export const useProductStore = create<ProductState>()(
    persist(
        (set, get) => ({
            // 상품 목록과 메뉴
            items: productsData,
            menus: [],

            // 검색
            searchWord: "",

            // 검색 메서드
            onSetSearchWord: (word) => set({ searchWord: word }),

            // 전체 검색
            searchWordAll: "",

            onSetSearchWordAll: (word) => set({ searchWordAll: word }),

            // 상품 데이터를 불러오는 메서드
            onFetchItems: () => {
                const items = get().items;

                // 이미 데이터가 있으면 실행하지 않음
                if (items.length > 0) return;

                const data = productsData;

                // 카테고리별 한글 이름
                const labels: Record<string, string> = {
                    men: "남자",
                    women: "여자",
                    accessories: "악세서리",
                    shoes: "신발",
                };

                // 중복 카테고리 제거
                const categories: string[] = [
                    "all",
                    ...new Set(data.map((item) => item.category)),
                ];

                // 메뉴 생성
                const menus = categories.map((cate) => {
                    if (cate === "all") {
                        return {
                            key: "all",
                            label: "모든",
                            sub: [],
                        };
                    }

                    return {
                        key: cate,
                        label: labels[cate] ?? cate,
                        sub: [],
                    };
                });

                // 스토어 업데이트
                set({
                    items: data,
                    menus,
                });
            },

            // 카테고리별 상품 조회
            onItemCategory: (cate) => {
                const allItems = get().items;

                if (!cate || cate === "all") {
                    return allItems;
                }

                return allItems.filter(
                    (item) => item.category === cate
                );
            },
        }),
        {
            name: "product-storage",

            // 저장할 상태 지정
            partialize: (state) => ({
                items: state.items,
                menus: state.menus,
            }),
        }
    )
);

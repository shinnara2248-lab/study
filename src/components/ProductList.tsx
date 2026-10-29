
import React, { useState } from 'react'
import { useProductStore } from '../store/useProductStore';
import { ProductItem } from './ProductItem';
import "./scss/ProductList.scss"

interface Props {
    category?: string;
}

type sortType = "popular" | "priceLow" | "priceHigh" | "name";

export const ProductList = ({ category }: Props) => {
    console.log("cate", category);
    const { searchWord, onItemCategory } = useProductStore();
    const cateItems = onItemCategory(category);
    console.log(category, cateItems);

    // 검색어에 맞는 상품만 필터링
    const searchItem = cateItems.filter((product) => {
        return product.title.toLocaleLowerCase().includes(searchWord.trim().toLocaleLowerCase())
    })

    const [sortType, setSortType] = useState<sortType>("popular");

    // 정렬 기준에 따라 상품 목록을 저장할 변수
    // const sortedItems = [...cateItems];
    const sortedItems = [...searchItem];

    // sort((a,b) => 계산결과가 음수면 a를 앞으로, 양수면 b를 앞으로)
    switch (sortType) {
        case "popular":
            // 평점이 높은 순으로 정렬
            sortedItems.sort((a, b) => b.rating - a.rating);
            break;
        case "priceLow":
            // 가격이 낮은 순으로 정렬
            sortedItems.sort((a, b) => a.price - b.price);
            break;
        case "priceHigh":
            // 가격이 높은 순으로 정렬
            sortedItems.sort((a, b) => b.price - a.price);
            break;
    }

    return (
        <div className="sub-goods-wrap">
            <div className="sort-buttons">
                <button type='button' className={sortType === "popular" ? "active" : ""} onClick={() => setSortType("popular")}>인기순</button>
                <button type='button' className={sortType === "priceLow" ? "active" : ""} onClick={() => setSortType("priceLow")}>가격 낮은순</button>
                <button type='button' className={sortType === "priceHigh" ? "active" : ""} onClick={() => setSortType("priceHigh")}>가격 높은순</button>
                <button type='button' className={sortType === "name" ? "active" : ""} onClick={() => setSortType("name")}>상품명순</button>
            </div>
            <div className='sub-goods-list'>
                {sortedItems.map((product) => (
                    <ProductItem sendItem={product} />
                ))}
            </div>
        </div>
    )
}

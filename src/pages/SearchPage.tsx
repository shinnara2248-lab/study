import React from 'react'
import { useProductStore } from '../store/useProductStore'
import { SectionTitle } from '../components/SectionTitle';
import { ProductItem } from '../components/ProductItem';

export const SearchPage = () => {
    const { items, searchWordAll } = useProductStore();

    let searchAll = items;

    if (searchWordAll) {
        searchAll = items.filter((item) => item.title.toLocaleLowerCase().includes(searchWordAll.trim().toLocaleLowerCase()))
    }
    return (
        <div className='sub-page'>
            <div className="inner">
                <SectionTitle title="검색결과" />
                <div className="sub-goods-list">
                    {searchAll.map((item) => (
                        <ProductItem sendItem={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

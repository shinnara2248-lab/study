import React from 'react'
import { SectionTitle } from './SectionTitle'
import { Search } from './Search';
import { ProductList } from './ProductList';

interface Props {
    title: string;
    category: string;
    bannerImg: string;
}
export const SubPage = ({ title, category, bannerImg }: Props) => {
    return (
        <div>
            {bannerImg && <div>
                <img src={bannerImg} alt="" />
            </div>}
            <div className="inner">
                <SectionTitle title={title} />
                <Search />
                <ProductList category={category} />
            </div>
        </div>
    )
}

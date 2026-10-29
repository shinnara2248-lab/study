import React from 'react'
import "./scss/SectionTitle.scss"

interface Props {
    title: string;
    subTitle?: string;
}
export const SectionTitle = ({ title, subTitle }: Props) => {
    return (
        <div className='section-title-box'>
            <h2 className='section-title'>{title}</h2>
            <p className='section-sub-title'>{subTitle}</p>
        </div>
    )
}

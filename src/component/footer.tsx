import * as React from 'react'
import { useEffect } from 'react'

export interface footerData {
    infomation: Array<{
        title: String,
        content: String
    }>
}


export default function Footer(ftData :footerData) {
    
    const renderFoot = () :any => {
        let foot = ftData.infomation.map((el, idx) => {
            return (
                <p key={idx} className='text-left text-sm capitalize'>
                    {`${el.title}: `}
                    <span className='text-left text-sm ml-5'>{el.content}</span>
                </p>
            )
        })
        return foot
    }

    return (
        <div className='container mt-3 h-10 border-1 rounded w-full mx-auto bg-slate-600 text-white flex justify-center text-start'>
            <div className=''>
                {renderFoot()}
            </div>
        </div>
    )
}
import * as React from 'react'
import { useEffect } from 'react'

export interface topBarData {
    logo: String,
    nav: Array<{label :String, href :String}>
}

export default function TopNav({logo, nav} :topBarData) {

    let rederNav = () :any => {
        let list = nav.map((el, idx) => {
            return (
                 <a key={idx} href={`${el.href}`} className='nav-link mt-2 mb-2 text-2xl hover:text-red-600'>{el.label}</a>
            )
        })
        return list
    }

    return (
        <div className='container top-nav mx-auto w-full h-10 border-1'>
            <div className=' bg-slate-600 text-white uppercase flex justify-around items-center border-1 rounded'>
                {rederNav()}
            </div>
        </div>
    )
}
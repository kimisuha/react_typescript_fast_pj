import * as React from 'react';
import { useEffect } from 'react';

export interface newCardData {
    news: Array<{
        title: String,
        image: String,
        views: Number,
        content: String,
        catelogy: Object,
        popup: Boolean
    }>
}


export default function NewCard(news: newCardData) {
    function delCard(): Boolean {
        return true
    }

    function popup(): void {
    }

    const renderCard = (): any => {
        let listCr = news.news.map((el, idx) => {
            return (
                <div key={idx} className='mx-auto card bg-slate-600 w-2/4 border-1 rounded hover:scale-110 transform transition duration-500 mb-5'>
                    <div className='container card-body flex justify-between bg-neutral-300 mt-14'>
                        <div className='image w-6/12 h-max'>
                            <img className='border rounded container' src={`${el.image}`}></img>
                        </div>

                        <div className='content w-3/4 h-max ml-3'>
                            <p className='text-left uppercase text-2xl mb-5 mt-2 text-blue-600'>{el.title}</p>
                            <p className='text-start capitalize'>{el.content}</p>
                        </div>
                    </div>

                    <div className='container card-footer text-center flex items-center justify-center'>
                        <button className='bg-blue-500 hover:bg-blue-100 text-white font-serif py-2 px-4 rounded text-center capitalize m-5'>button</button>
                    </div>
                </div>
            )
        })
        return listCr
    }

    return (
        <div className='mt-7 border-1 rounded-md bg-gray-900 pb-5 w-max mx-auto'>
            <h1 className='text-lime-50 text-start ml-32 relative pt-10 pb-7 capitalize text-3xl'>troll thể thao</h1>
            {
                renderCard()
            }
        </div>
    );
}

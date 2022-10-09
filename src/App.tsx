import React, { useLayoutEffect } from 'react';
import './App.css';
import NewCard, { newCardData } from './component/newsCard';
import TopNav from './component/topBar';
import Footer, { footerData } from './component/footer';
import { useState, useEffect } from 'react';
import { topBarData } from './component/topBar';



const data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')!) : require('./data.json');

function App() {
  const [news, setNews] = useState<newCardData>({
    news: []
  })
  const [navs, setNavs] = useState<topBarData>({
    logo: "test",
    nav: []
  })
  const [foots, setFoots] = useState<footerData>({
    infomation: [{
      title: "",
      content: ""
    }]
  })

  useEffect(() => {  
    if(!localStorage.getItem('data'))
      localStorage.setItem('data', JSON.stringify(data))

    readFootData()
    readNavData()
    readNewsData()
  }, [])

  function readNavData (): void {
    setNavs(data.topbar)
  }

  function readFootData () :void {
    setFoots(data.footer);
  }

  function readNewsData () :void {
    setNews({
      news: [...data.news]
    })
  }

  function addRawDataNews () :void {
    let rawData :newCardData = {
        news: []
    }

    let termData = {
      "title": "lisandro martinez, ông hoàng tuyến giữa - chúa tể tranh chấp - chú lùng hiếu chiến - người canh giữ miệng hang",
      "image": "https://pbs.twimg.com/media/FayzRa1aAAAKoWC?format=jpg&name=small",
      "views": 630,
      "content": "manchester united trong phiên chợ hè vừa qua vừa kiếm được một con hàng rất là chất. Có thể nói anh là một con cọp giữa bầy cáo, một người bình thường giữa các nghệ sĩ nhân dân của chúng ta. Đã từ lâu rồi chúng ta ko được thấy một hậu vệ nghiêm túc như này trong đội hình của MU. Các caption harry, chó điên mctominay hay khứa tóc dài fred liên tục chọc vào mắt chúng ta mỗi tuần. Như có thể thấy trong đêm qua, martinez dễ dàng bỏ túi sala, đè lane firmino, cho diaz hiểu thế nào là nỗi đau và dí cái đầu b*ôi vào caption trên ghế dự bị. Vâng có thể nói với fan MU lúc này, haaland cũng chỉ là thằng DBRR. Hãy cùng xem a thể hiện thế nào trong các trận đấu tiếp theo ",
      "catelogy": [
          "hotnews",
          "sport"
      ],
      "popup": false
    }

    rawData.news.push(termData)

    setNews({
      news: [...data.news, termData]
    })

    data.news = [...data.news, ...rawData.news]

    localStorage.setItem('data', JSON.stringify(data))

    console.log('@@@@@@@@@@@@@@@@@@', data.news);    
  }

  function popNewsData () {
    data.news.pop()
    localStorage.setItem('data', JSON.stringify(data))
    setNews({
      news: [...data.news]
    })

    console.log('@@@@@@@@@@@@@@@@@@', data.news);    

  }

  return (
    <div className="App m-5">
      <TopNav logo={navs!.logo} nav={navs!.nav}></TopNav>
      <div>
        <button className='bg-blue-700 text-slate-100 hover:bg-blue-500 capitalize p-3 border-1 rounded translate-y-14 cursor' onClick={addRawDataNews}>add new raw data</button>
        <button className='bg-yellow-400 text-slate-100 hover:bg-yellow-600 capitalize p-3 border-1 rounded translate-y-14 cursor ml-5' onClick={popNewsData}>pop data</button>
        <NewCard news={news.news}></NewCard>
      </div>
      <Footer infomation={foots.infomation}></Footer>
    </div>
  );
}

export default App;

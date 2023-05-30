import React from "react";
import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
      <div className='container' style={{ backgroundImage: `url(/img/海背景.jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
        <div className='container'>
          <ul className='horizontal-list center-align'>
            <li className="currentpage">トップページ</li>
            <li><Link to='/educational'>学歴</Link></li>
            <li><Link to='/career'>職歴</Link></li>
            <li><Link to='/hobby'>趣味</Link></li>
            <li><Link to='/family'>家族</Link></li>
          </ul>
          <h1 className="center-align">トップページ</h1>
          <p className="center-align content-text">当サイトは中尾佳揮の自己紹介サイトとなっております</p>
        </div>
      </div>
    )
  }
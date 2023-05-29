import React from "react";
import { Link } from 'react-router-dom'
export default function HobbyPage() {
    return (
      <div className='container' style={{ backgroundImage: `url(/img/海背景.jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
        <div className='container'>
          <ul className='horizontal-list center-align'>
            <li><Link to='/'>トップページ</Link></li>
            <li><Link to='/career'>職歴</Link></li>
            <li><Link to='/hobby'>趣味</Link></li>
            <li><Link to='/family'>家族</Link></li>
          </ul>
          <div className="center-align container-quot">
            <h1>学歴</h1>
            <div className="flex-container">
              <ul className="no-dot left-align container-third">
              <li className="list-item-text">
                1998年〜2004年<br />
                2004年〜2007年<br />
                2007年〜2010年<br />
                2010年〜2014年
              </li>
              </ul>
              <ul className="no-dot left-align">
                <li>桐朋学園小学校</li>
                <li>桐朋中学校</li>
                <li>桐朋高等学校</li>
                <li>中央大学経済学部</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
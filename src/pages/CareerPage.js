import React from "react";
import { Link } from 'react-router-dom'
export default function CareerPage() {
    return (
      <div className='container' style={{ backgroundImage: `url(/img/海背景.jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
        <div className='container'>
          <ul className='horizontal-list center-align'>
            <li><Link to='/'>トップページ</Link></li>
            <li><Link to='/educational'>学歴</Link></li>
            <li><Link to='/hobby'>趣味</Link></li>
            <li><Link to='/family'>家族</Link></li>
          </ul>
          <div className="center-align container-third">
            <h1>職歴</h1>
            <div className="flex-container">
                <ul className="no-dot left-align">
                    <li>
                        <div className="list-item-text">2012年〜2023年</div>
                        <div>ギタリスト・・・ギターレコーディング業務やライブ出演等。カラオケDAMの生音演奏のギター録音もやっていました。</div>
                    </li>
                    <li>
                        <div className="list-item-text">2014年〜2019年</div>
                        <div>損保ジャパン日本興亜コールセンター・・・自動車保険等の保険金請求受付業務等</div>
                    </li>
                    <li>
                        <div className="list-item-text">2018年〜2023年</div>
                        <div>音楽エンジニア・・・音楽の編集作業等</div>
                    </li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    )
  }
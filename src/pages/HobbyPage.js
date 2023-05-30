import React from "react";
  import { Link } from 'react-router-dom'
  export default function EducationalPage() {
      return (
        <div className='container' style={{ backgroundImage: `url(/img/海背景.jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
          <div className='container'>
            <ul className='horizontal-list center-align'>
              <li><Link to='/'>トップページ</Link></li>
              <li><Link to='/educational'>学歴</Link></li>
              <li><Link to='/career'>職歴</Link></li>
              <li className="currentpage">趣味</li>
              <li><Link to='/family'>家族</Link></li>
            </ul>
            <div className="center-align container-third">
              <h1>趣味</h1>
              <div className="flex-container">
                <ul className="no-dot left-align">
                  <li>ゴルフ・・・ゴルフ愛が高じて、2023年5月に埼玉〜岡山の15箇所のゴルフ場を3週間で回る一人旅をしておりました。</li>
                  <li>ダーツ・・・たまに夜な夜な自宅近くのダーツバーに行き、ひっそりと練習しております。</li>
                  <li>ギター・・・ギターが仕事では無くなった為、現在はたまに伸び伸びと弾いております。YOUTUBEにも時々演奏動画をアップしておりました。URL→→<a href="https://youtu.be/JqrGfbdDaQc" target="_blank" rel="noopener noreferrer">https://youtu.be/JqrGfbdDaQc</a></li>
                </ul>
              </div>
          </div>
          </div>
        </div>
      )
    }  

    
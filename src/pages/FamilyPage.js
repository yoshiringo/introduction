import React from "react";
import { Link } from 'react-router-dom'
export default function FamilyPage() {
    return (
        <div className='container' style={{ backgroundImage: `url(/img/海背景.jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
            <div className='container'>
                <ul className='horizontal-list center-align'>
                    <li><Link to='/'>トップページ</Link></li>
                    <li><Link to='/educational'>学歴</Link></li>
                    <li><Link to='/career'>職歴</Link></li>
                    <li><Link to='/hobby'>趣味</Link></li>
                </ul>
                <div className="center-align container-third">
                    <h1>家族</h1>
                        <ul className="no-dot center-align">
                        <li>妻と2歳の息子がいます。2017年に結婚し、2021年に息子が生まれました。</li>
                        </ul>
                </div>
            </div>
        </div>
    )
    }
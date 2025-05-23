import React from 'react'
import './Header.css'

function Header(){
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src="data:image/png;base64,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" alt="Louis Vuitton" />
                </div>
                <div className="marca">
                    <h4>Louis Vuitton</h4>
                </div>
            </header>
            <div className="banner">
                <img src="https://static.meucupom.com/uploads/public/55e/5ad/5d7/thumb_370_800x600_0_0_auto.jpg"
                    className="img"/>
            </div>
        </>
    )
}
export default Header
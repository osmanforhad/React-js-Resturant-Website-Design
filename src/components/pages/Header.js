import React from 'react';
import { Link } from 'react-scroll';

function Header() {
    return (
        <div id="main">
            <div className="header-heading">
                <h3>It's a Great Time For a Good Taste of Burger</h3>
                <h1><span>BURGER</span> FOR<br/> WEEK</h1>
                <p className="details">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                 essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                 passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="header-btns">
                    <Link to="" className="header-btn">Order</Link>
                </div>
            </div>
        </div>
    )
}

export default Header

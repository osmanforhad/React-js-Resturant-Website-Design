import React from 'react';
import Productbox from '../includes/Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

function Products() {
    return (
        <div id="products">
            <h1>CHOOSE & ENJOY</h1>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content 
            here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use 
            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
             Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <div className="a-container">
                <Productbox image={pimage1} title="Luger Burger" />
                <Productbox image={pimage2} title="Le Pigeon Burger" />
                <Productbox image={pimage1} title="Luger Burger" />
            </div>
        </div>
    )
}

export default Products

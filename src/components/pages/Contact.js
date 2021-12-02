import React from 'react';

function Contact() {
    return (
        <div id="contact">
            <h1>BOOK YOUR TABLE</h1>
            <form>
                <input type="text" name="fullname" placeholder="Full Name" />
                <input type="email" name="email" placeholder="Type Your E-Mail" />
                <textarea name="message" placeholder="Write Here...."></textarea>
                <input type="submit" value="BOOK" />
            </form>
        </div>
    )
}

export default Contact

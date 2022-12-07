import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='Footer'><footer>
        <hr style={{borderTop:"1px solid #c7c3c6"}}/>
        <p>Copyright ⓒ {year}</p>
      </footer>
      </div>
      
      
    );
}

export default Footer;

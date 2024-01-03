import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https:www.linkedin.com/in/jdlucaschaves/" className="home__social-link" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin"></i>
        </a>
        
        <a href="https://api.whatsapp.com/send?phone=542664035894" className="home__social-link" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://github.com/LucasChavesDWS" className="home__social-link" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github"></i>
        </a>
        <a href="https:www.instagram.com/jdlucaschaves" className="home__social-link" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
        </a>
    </div>
  )
}

export default HeaderSocials
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer_container container'>
            <h1 className='footer_title'>Oğulcan</h1>
            
            <ul className='footer_list'>
                <li>
                    <a href='#about' className='footer_link'>Hakkımda</a>
                </li>
                <li>
                    <a href='#skills' className='footer_link'>Yetenekler</a>
                </li>
                <li>
                    <a href='#services' className='footer_link'>Hizmetler</a>
                </li>
                <li>
                    <a href='#projects' className='footer_link'>Projeler</a>
                </li>
                <li>
                    <a href='#contact' className='footer_link'>İletişim</a>
                </li>
            </ul>
            <div className='footer_social'>
            <a href="https://www.instagram.com/metinogulcank/" className="footer_social-icon" target="_blank">
            <i className='uil uil-instagram'></i>
        </a>
        <a href="https://www.linkedin.com/in/metinogulcank/" className="footer_social-icon" target="_blank">
            <i className='uil uil-linkedin'></i>
        </a>
        <a href="https://github.com/metinogulcank" className="footer_social-icon" target="_blank">
            <i className='uil uil-github-alt'></i>
        </a>
            </div>
        <span className='footer_copy'>&#169; Metin Oğulcan Koca. Telif hakları saklıdır.</span>
        </div> 
    </footer>
  )
}

export default Footer
import React , {useState} from 'react';
import useLocalStorage from 'use-local-storage'
import "./header.css";
import { ReactComponent as Sun } from "../../assets/Sun.svg";
import { ReactComponent as Moon } from "../../assets/Moon.svg";
const Header = () => {

  const[Toggle,showMenu] = useState(false);
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme','dark')
  }
  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme','light')
  } 
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  }
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">Metin</a>
        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className='nav_item'>
              <a href="#home" className="nav_link">
                <i className='uil uil-estate nav_icon'></i>
                Ana Sayfa
              </a>
            </li>

            <li className='nav_item'>
              <a href="#about" className='nav_link'>
                <i className='uil uil-user nav_icon'></i>
                Hakkımda
              </a>
            </li>
            <li className='nav_item'>
              <a href="#skills" className="nav_link">
                <i className='uil uil-file-alt nav_icon'></i>
                Yetenekler
              </a>
            </li>
            <li className='nav_item'>
              <a href="#services" className="nav_link">
                <i className='uil uil-briefcase-alt nav_icon'></i>
                Hizmetler
              </a>
            </li>
            <li className='nav_item'>
              <a href="#work" className="nav_link">
                <i className='uil uil-scenery nav_icon'></i>
                Projeler
              </a>
            </li>
            <li className='nav_item'>
              <a href="#contact" className="nav_link">
                <i className='uil uil-message nav_icon'></i>
                İletişim
              </a>
            </li>
            <li className="nav_item">
            <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
            </li>
          </ul>
          <i className="uil uil-times nav_close" onClick={()=> showMenu(!Toggle)}></i>
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
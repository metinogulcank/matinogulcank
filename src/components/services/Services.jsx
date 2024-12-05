import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    
  return (
    <section className='section services' id='services'>
        <h2 className='section_title'>Hizmetler</h2>
        
        <div className='services_container container grid'>
            <div className='services_content'>
                <div>
                    <h3 className='services_title'>Web  Developer</h3>
                </div>
                <span className='services_button' onClick={() => toggleTab(1)}> Daha Fazlasını Gör
                <i className='uil uil-arrow-right services_button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "services_model active-model" : "services_model"}>
                    <div className='services_model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services_model-close'></i>
                        <h3 className='services_model-title'>Web Developer</h3>
                        <p className='services_model-description'>3 yıllık tecrübemle sizlere kaliteli ürünler sunmak için elimden geleni yapıyorum.</p>

                        <ul className='services_model-services grid'>
                            <li className='services_model-service'>
                                <i className='uil uil-check-circle services_model-icon'></i>
                                <p className='services_model-info'>Sizin için web sitesi geliştirebilirim</p>
                            </li>
                            <li className='services_model-service'>
                                <i className='uil uil-check-circle services_model-icon'></i>
                                <p className='services_model-info'>Sitenize hosting ve domain sağlayabilirim</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='services_content'>
                <div>
                    <h3 className='services_title'>UI/UX Designer</h3>
                </div>
                <span className='services_button' onClick={() => toggleTab(2)}>Daha Fazlasını Gör
                <i className='uil uil-arrow-right services_button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "services_model active-model" : "services_model"}>
                    <div className='services_model-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services_model-close'></i>
                        <h3 className='services_model-title'>UI/UX Designer </h3>
                        <p className='services_model-description'>3 yıllık tecrübemle sizlere kaliteli ürünler sunmak için elimden geleni yapıyorum.</p>

                        <ul className='services_model-services grid'>
                            <li className='services_model-service'>
                                <i className='uil uil-check-circle services_model-icon'></i>
                                <p className='services_model-info'>Sizin için kullanıcı arayüzü tasarlayabilirim</p>
                            </li>
                            <li className='services_model-service'>
                                <i className='uil uil-check-circle services_model-icon'></i>
                                <p className='services_model-info'>Sizin için kullanıcı deneyimini üst seviyeye çıkarabilirim</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
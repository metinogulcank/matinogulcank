import React from 'react'

const Info = () => {
  return (
    <div className='about_info grid'>
        <div className='about_box'>
            <i class="bx bx-award about_icon"></i>
            <h3 className='about_title'>Deneyim</h3>
            <span className='about_subtitle'>3 Yıl</span>
        </div>
        <div className='about_box'>
            <i class="bx bx-briefcase-alt about_icon"></i>
            <h3 className='about_title'>Tamamlanmış</h3>
            <span className='about_subtitle'>10+ Proje</span>
        </div>
        <div className='about_box'>
            <i class="bx bx-support about_icon"></i>
            <h3 className='about_title'>İletişim</h3>
            <span className='about_subtitle'>7/24 İletişim</span>
        </div>
    </div>
  )
}

export default Info
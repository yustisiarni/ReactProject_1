import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'
import Interests from './components/Interests'
// import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'
// import Facebook_icon from './icon/Facebook_Icon.svg'
// import GitHub_icon from './icon/GitHub_Icon.svg'
// import Instagram_icon from './icon/Instagram_Icon.svg'
// import Linkedin_icon from './icon/Linkedin_Icon.svg'
// import Twitter_icon from './icon/Twitter_Icon.svg'

export default function App(){
    return(
        <div className='container'>
        <Info />
        <About />
        <Interests />
        <Footer />
        </div>
    )
}
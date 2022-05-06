import React from 'react'
import me from '../images/me.jpg'

export default function Info(){
    return(
        <div className='info'>
            <div className='images'>
                <img src={me} alt='wag'/>
            </div>
            <h1>Yustisiarni</h1>
            <h3>Informatics Engineering Student</h3>
            <h4>yustismnao.website</h4>
            <div className='buttons'>
                <a  className='emailButt' href="mailto:yustismnao@gmail.com?subject=Hello">
                    <i className="fa-solid fa-envelope email" />
                    <p>Email</p>
                </a>
                <a className='linkedButt' href="https://www.linkedin.com/in/yustisiarni-g-manao/">
                    <i class="fa-brands fa-linkedin linked"></i>
                    <p>LikedIn</p>
                </a>
            </div>
        </div>
    )
}
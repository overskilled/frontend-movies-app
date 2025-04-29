import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import './Footer.css'

export default function Footer() {
    const [email, setEmail] = useState<string>('') ;
    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value) ;
    }
    return (
    <div className="Footer">
        <div className="FooterContainer">
            <ul className="footerListe">
                <li>
                    <div className="colone1">
                        <div className='logofooter'><img src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/logo1.png" alt="logo" /></div>
                        <span>Grand moullin, DOUALA <br /> New York, NY 10001</span>
                        <p>Call us: <span>(+237) 658341359</span></p>
                    </div>
                </li>
                <li>
                    <div className="colone2">
                        <h4>RESOURCES</h4>
                        <ul>
                            <li>About</li>
                            <li>Blockbuster</li>
                            <li>Contact us</li>
                            <li>Forums</li>
                            <li>Blog</li>
                            <li>Help Center</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="colone3">
                        <h4>Legal</h4>
                        <ul>
                            <li>Terms of Use</li>
                            <li>Privacy</li>
                            <li>Security</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="colone4">
                        <h4>Account</h4>
                        <ul>
                            <li>My Account</li>
                            <li>Watchlist</li>
                            <li>Collections</li>
                            <li>User guide</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="colone5">
                        <h4>Newsettler</h4>
                        <span>Subscribe to our newsletter system now to get latest news from us.</span>
                        <input type="text" placeholder='Ente your email...' value={email} onChange={handlechange} />
                        <p>SUBSCRITE NOW <ChevronRight /></p>
                    </div>
                </li>
            </ul>
        </div>
        <hr style={{width:'100%',marginBottom:'10px'}}/>
        <div className="end">
            <p>© fais par Andy</p>
        </div>
    </div>
  )
}

import React from 'react'
import './cards.css'
import bdaybg from '../HOME/IMG_VIDEOS/bday1.jpg'
import wedding from '../HOME/IMG_VIDEOS/wedd.jpg'
import business from '../HOME/IMG_VIDEOS/business.jpg'
import party3 from '../HOME/IMG_VIDEOS/p2.jpg'
export default function Maincards() {
    return (
        <div>
            <div className='main'>
                <div className='container'>
                    <div className='row rowspace'>
                        <div className='col-lg-3'>
                            {/* card-1 */}
                            <div class="card designn">
                                <img src={bdaybg} alt="" />
                                <div className='overlay2'>
                                    <div class="card-content">
                                        <h2>
                                            birthday
                                        </h2>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                        </p>
                                        <a href="#" class="button">
                                            Find out more
                                            <span class="material-symbols-outlined">
                                                __
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            {/* card-2 */}
                            <div class="card designn">
                                <img src={wedding} alt="" />
                                <div className='overlay2'>
                                    <div class="card-content">
                                        <h2>
                                            wedding
                                        </h2>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                        </p>
                                        <a href="#" class="button">
                                            Find out more
                                            <span class="material-symbols-outlined">
                                                __
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            {/* card-3 */}
                            <div class="card designn">
                                <img src={business} alt="" />
                                <div className='overlay2'>
                                    <div class="card-content">
                                        <h2>
                                            business
                                        </h2>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                        </p>
                                        <a href="#" class="button">
                                            Find out more
                                            <span class="material-symbols-outlined">
                                                __
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            {/* card-4 */}
                            <div class="card designn">
                                <img src={party3} alt="" />
                                <div className='overlay2'>
                                    <div class="card-content">
                                        <h2>
                                            private
                                        </h2>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                        </p>
                                        <a href="#" class="button">
                                            Find out more
                                            <span class="material-symbols-outlined">
                                                __
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}

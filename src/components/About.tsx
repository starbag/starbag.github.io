import Avatar3D from './Avatar3D';

import brush from '../assets/brush.svg';
import './componentStyle/About.css'

export default function About() {

    return (
        <section class='aboutMe'>
            <div class="brush-badge">
                <h3>About Me</h3>
                <img src={brush} alt="brush" width="150px" />
            </div>
            
            <div class="carousel-container">
                
                <div class="carousel-track">
                 
                    <div class='activity'>
                        <Avatar3D animation="relaxing" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Fast-Paced Games</h3>
                                <p>Chasing flawless flow states, brutal reflexes, and hypnotic arcade mastery.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="boxing" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Boxing</h3>
                                <p>Pure discipline, lightning-fast reflexes, and relentless ring focus.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="muayThai" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Muay Thai</h3>
                                <p>Devastating eight-limb strikes, unbreakable conditioning, and warrior spirit.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="pushUps" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Calisthenics</h3>
                                <p>Mastering bodyweight strength, fluid control, and absolute physical freedom.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="dancing1" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Guns N' Roses</h3>
                                <p>Immortal rock rebellion, raw riffs, and absolute legends.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="dancing2" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Scorpions</h3>
                                <p>Unforgettable power ballads and timeless guitar anthems.</p>
                            </div>
                        </div>
                    </div>
                    <div class='activity'>
                        <Avatar3D animation="dancing3" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Billy Idol</h3>
                                <p>Pure 80s edge, undeniable charisma, and iconic style.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="thinking" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>2D Game Dev</h3>
                                <p>Crafting interactive worlds, mechanics, and breathing life into digital stories.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="salto" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Pixel Art</h3>
                                <p>Painting nostalgic universes one meticulously placed colored pixel at a time.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="relaxing" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Fast-Paced Games</h3>
                                <p>Chasing flawless flow states, brutal reflexes, and hypnotic arcade mastery.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="boxing" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Boxing</h3>
                                <p>Pure discipline, lightning-fast reflexes, and relentless ring focus.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="muayThai" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Muay Thai</h3>
                                <p>Devastating eight-limb strikes, unbreakable conditioning, and warrior spirit.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="pushUps" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Calisthenics</h3>
                                <p>Mastering bodyweight strength, fluid control, and absolute physical freedom.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="dancing1" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Guns N' Roses</h3>
                                <p>Immortal rock rebellion, raw riffs, and absolute legends.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="dancing2" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Scorpions</h3>
                                <p>Unforgettable power ballads and timeless guitar anthems.</p>
                            </div>
                        </div>
                    </div>

                    <div class='activity'>
                        <Avatar3D animation="dancing3" />
                        <div class='skewed-banner'>
                            <div class='content'>
                                <h3 class='hobbyTitle'>Billy Idol</h3>
                                <p>Pure 80s edge, undeniable charisma, and iconic style.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
import "./componentStyle/HeroSection.scss"

import downArrow from '../assets/down-arrow.svg'
import Greeting from "./Greeting";

export default function HeroSection() {    
    return (
        <header class="heroImg">
            <Greeting/>

            <img class="down-arrow" src={downArrow} alt="down arrow"/>
        </header>
    );
}
import { createSignal } from "solid-js";

import "./componentStyle/HeroSection.css"
import downArrow from '../assets/down-arrow.svg'
import PixelAvatar from './PixelAvatar';
import Greeting from "./Greeting";

export default function HeroSection() {    
    return (
        <header class="heroImg">
            <PixelAvatar/>
            <Greeting/>

            <img class="down-arrow" src={downArrow} alt="down arrow"/>
        </header>
    );
}
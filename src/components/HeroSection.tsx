import { createSignal } from "solid-js";

import "./componentStyle/HeroSection.scss"

import downArrow from '../assets/down-arrow.svg'
import Greeting from "./Greeting";
import Authentication from "./Authentication";

export default function HeroSection() {    
    const [isLoggedIn, setIsLoggedIn] = createSignal(false);

    return (
        <header class="heroImg">
            <Greeting/>
            <Authentication />
            <img class="down-arrow" src={downArrow} alt="down arrow"/>
        </header>
    );
}
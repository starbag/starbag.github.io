import { createSignal, onMount, onCleanup, createEffect } from "solid-js";
import './componentStyle/Skills.scss';
import { skills } from '../data/skillsData';

import downArrow from "../assets/down-arrow.svg";

export default function Skills() {
    // Show/hide states for sections
    const [hardDisplay, setHardDisplay] = createSignal("none");
    const [softDisplay, setSoftDisplay] = createSignal("none");
    const [otherDisplay, setOtherDisplay] = createSignal("none");
    const [activeBars, setActiveBars] = createSignal(0);


    // References for each scrollable grid
    let gridRefHard!: HTMLDivElement;
    let gridRefSoft!: HTMLDivElement;
    let gridRefOther!: HTMLDivElement;

    // Mouse drag and hover states for each grid
    let isDownHard = false, startXHard = 0, scrollLeftHard = 0, isHoveredHard = false;
    let isDownSoft = false, startXSoft = 0, scrollLeftSoft = 0, isHoveredSoft = false;
    let isDownOther = false, startXOther = 0, scrollLeftOther = 0, isHoveredOther = false;

    let animationId: number;

    // Toggle functions for sections
    const toggleHard = () => {
        const isOpen = hardDisplay() === "none";
        setHardDisplay(isOpen ? "flex" : "none");
        setActiveBars(prev => isOpen ? prev + 1 : prev - 1);
    };
    
    const toggleSoft = () => {
        const isOpen = softDisplay() === "none";
        setSoftDisplay(isOpen ? "flex" : "none");
        setActiveBars(prev => isOpen ? prev + 1 : prev - 1);
    };

    const toggleOther = () => {
        const isOpen = otherDisplay() === "none";
        setOtherDisplay(isOpen ? "flex" : "none");
        setActiveBars(prev => isOpen ? prev + 1 : prev - 1);
    };

    // Auto-scroll loop for all grids
    onMount(() => {
        const step = () => {
            if (gridRefHard && !isDownHard && !isHoveredHard && hardDisplay() !== "none") {
                gridRefHard.scrollLeft += 1;
                if (gridRefHard.scrollLeft >= (gridRefHard.scrollWidth - gridRefHard.clientWidth)) {
                    gridRefHard.scrollLeft = 0;
                }
            }

            if (gridRefSoft && !isDownSoft && !isHoveredSoft && softDisplay() !== "none") {
                gridRefSoft.scrollLeft += 1;
                if (gridRefSoft.scrollLeft >= (gridRefSoft.scrollWidth - gridRefSoft.clientWidth)) {
                    gridRefSoft.scrollLeft = 0;
                }
            }

            if (gridRefOther && !isDownOther && !isHoveredOther && otherDisplay() !== "none") {
                gridRefOther.scrollLeft += 1;
                if (gridRefOther.scrollLeft >= (gridRefOther.scrollWidth - gridRefOther.clientWidth)) {
                    gridRefOther.scrollLeft = 0;
                }
            }

            animationId = requestAnimationFrame(step);
        };
        animationId = requestAnimationFrame(step);

        onCleanup(() => {
            cancelAnimationFrame(animationId);
        });
    });

    return (
        <section class='skills-section'>
            <h2 
                class="skills-section-title"
                classList={{
                    "lvl-1-heading": activeBars() === 1,
                    "lvl-2-heading": activeBars() === 2,
                    "lvl-3-heading": activeBars() === 3,
                }}
            >
                My Skills
            </h2>

            <div class='skill-category'>
                {/* 1. HARD SKILLS SECTION */}
                <div class="skills-group hard-skills">
                    <div 
                        class="skills-group-heading" 
                        onClick={toggleHard}
                        classList={{ active: hardDisplay() !== "none" }}
                    >
                        <h3>Hard Skills</h3>
                        <img class="arrow" src={downArrow} alt="arrow" />
                    </div>

                    <div
                        class='hard-skills-body skills-card-body skills-group-content'
                        classList={{active: hardDisplay() !== "none"}}
                    >
                        <div 
                            class='skills-grid' 
                            ref={gridRefHard}
                            onMouseDown={(e) => { isDownHard = true; gridRefHard.classList.add('active'); startXHard = e.pageX - gridRefHard.offsetLeft; scrollLeftHard = gridRefHard.scrollLeft; }}
                            onMouseLeave={() => { isDownHard = false; gridRefHard.classList.remove('active'); isHoveredHard = false; }}
                            onMouseUp={() => { isDownHard = false; gridRefHard.classList.remove('active'); }}
                            onMouseMove={(e) => { if (!isDownHard) return; e.preventDefault(); const x = e.pageX - gridRefHard.offsetLeft; gridRefHard.scrollLeft = scrollLeftHard - (x - startXHard) * 1.5; }}
                            onMouseEnter={() => { isHoveredHard = true; }}
                        >
                            {skills.hardSkills.map((el) => (
                                <div class='skill-card hard-skill'>
                                    <img src={el.icon} alt={el.skill} class='card-main-icon' />
                                    <h4>{el.skill}</h4>
                                    <h4>Technologies:</h4>
                                    <ul class='technologies-list'>
                                        {el.technologies.map((technology) => (
                                            <li class='technologies-item'>
                                                <i class={technology.icon}></i>
                                                <span>{technology.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. SOFT SKILLS SECTION */}
                <div class="skills-group soft-skills">
                    <div 
                        class="skills-group-heading" 
                        onClick={toggleSoft}
                        classList={{ active: softDisplay() !== "none" }}
                    >
                        <h3>Soft Skills</h3>
                        <img class="arrow" src={downArrow} alt="arrow" />
                    </div>

                    <div
                        class='soft-skills-body skills-card-body skills-group-content'
                        classList={{active: softDisplay() !== "none"}}
                    >
                        <div 
                            class='skills-grid' 
                            ref={gridRefSoft}
                            onMouseDown={(e) => { isDownSoft = true; gridRefSoft.classList.add('active'); startXSoft = e.pageX - gridRefSoft.offsetLeft; scrollLeftSoft = gridRefSoft.scrollLeft; }}
                            onMouseLeave={() => { isDownSoft = false; gridRefSoft.classList.remove('active'); isHoveredSoft = false; }}
                            onMouseUp={() => { isDownSoft = false; gridRefSoft.classList.remove('active'); }}
                            onMouseMove={(e) => { if (!isDownSoft) return; e.preventDefault(); const x = e.pageX - gridRefSoft.offsetLeft; gridRefSoft.scrollLeft = scrollLeftSoft - (x - startXSoft) * 1.5; }}
                            onMouseEnter={() => { isHoveredSoft = true; }}
                        >
                            {skills.softSkills.map((el) => (
                                <div class='skill-card soft-skill'>
                                    <img src={el.icon} alt={el.skill} class='card-main-icon' />
                                    <h4>{el.skill}</h4>
                                    <p>{el.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. OTHER SKILLS SECTION */}
                <div class="skills-group other-skills">
                    <div 
                        class="skills-group-heading" 
                        onClick={toggleOther}
                        classList={{ active: otherDisplay() !== "none" }}
                    >
                        <h3>Other Skills</h3>
                        <img class="arrow" src={downArrow} alt="arrow" />
                    </div>

                    <div
                        class='other-skills-body skills-card-body skills-group-content'
                        classList={{active: otherDisplay() !== "none"}}
                    >
                        <div 
                            class='skills-grid' 
                            ref={gridRefOther}
                            onMouseDown={(e) => { isDownOther = true; gridRefOther.classList.add('active'); startXOther = e.pageX - gridRefOther.offsetLeft; scrollLeftOther = gridRefOther.scrollLeft; }}
                            onMouseLeave={() => { isDownOther = false; gridRefOther.classList.remove('active'); isHoveredOther = false; }}
                            onMouseUp={() => { isDownOther = false; gridRefOther.classList.remove('active'); }}
                            onMouseMove={(e) => { if (!isDownOther) return; e.preventDefault(); const x = e.pageX - gridRefOther.offsetLeft; gridRefOther.scrollLeft = scrollLeftOther - (x - startXOther) * 1.5; }}
                            onMouseEnter={() => { isHoveredOther = true; }}
                        >
                            {skills.others.map((el) => (
                                <div class='skill-card other-skill'>
                                    <img src={el.icon} alt={el.skill} class='card-main-icon' />
                                    <h4>{el.skill}</h4>
                                    <p>{el.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import { onMount, onCleanup } from "solid-js";
import './componentStyle/Skills.css';
import { skills } from '../data/activitiesData';

export default function Skills() {
    let gridRef!: HTMLDivElement;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    let animationId: number;
    let isHovered = false;

    const handleMouseDown = (e: MouseEvent) => {
        isDown = true;
        gridRef.classList.add('active');
        startX = e.pageX - gridRef.offsetLeft;
        scrollLeft = gridRef.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown = false;
        gridRef.classList.remove('active');
        isHovered = false;
    };

    const handleMouseUp = () => {
        isDown = false;
        gridRef.classList.remove('active');
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gridRef.offsetLeft;
        const walk = (x - startX) * 1.5;
        gridRef.scrollLeft = scrollLeft - walk;
    };

    const handleMouseEnter = () => {
        isHovered = true;
    };

    onMount(() => {
        const step = () => {
            if (!isDown && !isHovered && gridRef) {
                gridRef.scrollLeft += 1;
                if (gridRef.scrollLeft >= (gridRef.scrollWidth - gridRef.clientWidth)) {
                    gridRef.scrollLeft = 0;
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
            <h2 class="section-title">My Skills</h2>

            <div class='skill-category'>
                <div 
                    class='skill-grid' 
                    ref={gridRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                >
                    
                    <div class='hard-skills skills-group'>
                        <h3 class='skills-group-text'>Hard Skills</h3>
                            {skills.hardSkills.map((el) => (
                                <div class='skill-card hard-skill'>
                                    <img src={el.icon} alt={el.skill} class='card-main-icon' />
                                    <h4>{el.skill}</h4>
                                    <h4>Technologies:</h4>
                                    
                                    <ul class='technologies-list'>
                                        {el.technologies.map((technology) => {
                                            return (
                                                <li class='technologies-item'>
                                                    <i class={technology.icon}></i>
                                                    <span>{technology.name}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            ))}
                    </div>

                    <div class='soft-skills skills-group'>
                        <h3 class='skills-group-text'>Soft Skills</h3>
                        {skills.softSkills.map((el) => (
                            <div class='skill-card soft-skill'>
                                <img src={el.icon} alt={el.skill} class='card-main-icon' />
                                <h4>{el.skill}</h4>
                            </div>
                        ))}
                    </div>

                    <div class='other-skills skills-group'>
                        <h3 class='skills-group-text'>Other Skills</h3>
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
         </section>
    );
}
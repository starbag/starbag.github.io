import { createSignal } from 'solid-js';

import HardwareModel from './HardwareModel';

import { hardware } from '~/data/hardwareData';
import './componentStyle/HardwareShowcase.scss'

export default function HardwareShowcase() {
    const [whatIsActive, setWhatIsActive] = createSignal(null)
    const [activeItemDescription, setActiveItemDescription] = createSignal(null)

    return (
        <section class="setup-showcase">
            <h3 class='showcase-section-title'>Showcase</h3>
            <div class='hardware-cards'>
                {
                    hardware.map((el) => (
                            <div
                                class='hardware-card'
                                onClick={() => {
                                    setWhatIsActive(el.title)
                                    setActiveItemDescription(el.description)
                                }}
                            >
                                <HardwareModel model={el.model} fov={el.fov}/>
                                <h4 class='hardware-name'>{el.title}</h4>
                            </div>
                    ))
                }
            </div>
            
            {
                whatIsActive() && (
                    <div
                        class='active-item'
                        onClick={() => setWhatIsActive(null)}
                    >
                        <div class='active-item-content'>
                            <h2>{whatIsActive()}</h2>
                            <p>{activeItemDescription()}</p>
                        </div>
                    </div>
                )
            }
        </section>
    )
}
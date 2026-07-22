import HardwareModel from './HardwareModel';

import { hardware } from '~/data/activitiesData';
import './componentStyle/HardwareShowcase.scss'

export default function HardwareShowcase() {

    return (
        <section class="setup-showcase">
            <h3 class='showcase-section-title'>Showcase</h3>
            <div class='hardware-cards'>
                {
                    hardware.map((el) => (
                        <div class='hardware-card'>
                            <HardwareModel model={el.model} fov={el.fov}/>
                            <h4 class='hardware-name'>{el.title}</h4>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
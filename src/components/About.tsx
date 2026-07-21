import { createSignal } from 'solid-js';
import Avatar3D from './Avatar3D';
import brush from '../assets/brush.svg';
import { activitiesData } from '../data/activitiesData';
import './componentStyle/About.css'

function ActivityItem(props: any) {
    const [showMore, setShowMore] = createSignal(false);

    return (
        <div class='activity'>
            <Avatar3D animation={props.animation} />
            <div 
                class='skewed-banner'
                onMouseEnter={() => setShowMore(true)}
            >
                <div class='content'>
                    <h3 class='hobbyTitle'>{props.title}</h3>
                    <p class='hobbyDescription'>{props.description}</p>
                </div>

       
                <div 
                    class={`more-info ${showMore() ? 'visible' : ''}`}
                    onMouseLeave={() => setShowMore(false)}
                >
                    <p>{props.moreInfo}</p>
                </div>
            </div>
        </div>
    );
}

export default function About() {
    const duplicatedActivities = [...activitiesData, ...activitiesData];

    return (
        <section class='aboutMe'>
            <div class="brush-badge">
                <h2>About Me</h2>
                <img src={brush} alt="brush" width="135px" />
            </div>
            
            <div class="carousel-container">
                <div class="carousel-track">
                    {duplicatedActivities.map((activity) => (
                        <ActivityItem
                            animation={activity.animation}
                            title={activity.title}
                            description={activity.description}
                            moreInfo={activity.moreInfo}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
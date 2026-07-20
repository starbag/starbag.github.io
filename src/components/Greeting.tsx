import "./componentStyle/Greeting.css"

export default function Greeting() {
    const text = "welcome";

    return (
        <h1 class="greetingText">
            {text.split("").map((letter, index) => (
                <span 
                    class="animated-letter" 
                    style={{ "--i": index }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </span>
            ))}
        </h1>
    )
}
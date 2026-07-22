export const activitiesData = [
    {
        animation: "thinking",
        title: "2D Game Dev",
        description: "Crafting interactive worlds, mechanics, and breathing life into digital stories.",
        moreInfo: "Using engines like Godot and Unity to prototype custom platformers and RPG mechanics."
    },
    {
        animation: "salto",
        title: "Pixel Art",
        description: "Painting nostalgic universes one meticulously placed colored pixel at a time.",
        moreInfo: "Specializing in 16-bit retro aesthetics, character sprites, and dynamic tilemaps."
    },
    {
        animation: "relaxing",
        title: "Fast-Paced Games",
        description: "Chasing flawless flow states, brutal reflexes, and hypnotic arcade mastery.",
        moreInfo: "Focusing on bullet hells, speedrunning techniques, and rhythm action games."
    },
    {
        animation: "boxing",
        title: "Boxing",
        description: "Pure discipline, lightning-fast reflexes, and relentless ring focus.",
        moreInfo: "Emphasizing footwork drills, heavy bag conditioning, and tactical sparring."
    },
    {
        animation: "muayThai",
        title: "Muay Thai",
        description: "Devastating eight-limb strikes, unbreakable conditioning, and warrior spirit.",
        moreInfo: "Training clinches, roundhouse kicks, and traditional conditioning methods."
    },
    {
        animation: "pushUps",
        title: "Calisthenics",
        description: "Mastering bodyweight strength, fluid control, and absolute physical freedom.",
        moreInfo: "Working towards advanced skills like muscle-ups, handstands, and front levers."
    },
    {
        animation: "dancing1",
        title: "Guns N' Roses",
        description: "Immortal rock rebellion, raw riffs, and absolute legends.",
        moreInfo: "A lifelong appreciation for classic hard rock guitar solos and stadium anthems."
    },
    {
        animation: "dancing2",
        title: "Scorpions",
        description: "Unforgettable power ballads and timeless guitar anthems.",
        moreInfo: "Melodic heavy metal masterpieces that defined an era of arena rock."
    },
    {
        animation: "dancing3",
        title: "Billy Idol",
        description: "Pure 80s edge, undeniable charisma, and iconic style.",
        moreInfo: "Blending punk rock attitude with synthetic new wave melodies."
    }
];

export const skills = {
    hardSkills: [
        {
            skill: "Frontend & Web Development",
            technologies: [
                { name: "HTML5", icon: "devicon-html5-plain colored" },
                { name: "CSS3", icon: "devicon-css3-plain colored" },
                { name: "JavaScript", icon: "devicon-javascript-plain colored" },
                { name: "TypeScript", icon: "devicon-typescript-plain colored" },
                { name: "React", icon: "devicon-react-original colored" },
                { name: "SolidJS", icon: "devicon-solidjs-plain" },
                { name: "SolidStart", icon: "devicon-solidjs-plain colored" },
                { name: "Three.js", icon: "devicon-threejs-original colored" }
            ],
            icon: "/icons/frontend.png"
        },
        {
            skill: "Backend, Databases & Systems",
            technologies: [
                { name: "Python", icon: "devicon-python-plain colored" },
                { name: "Django", icon: "devicon-django-plain colored" },
                { name: "C++", icon: "devicon-cplusplus-plain colored" },
                { name: "C", icon: "devicon-c-plain colored" },
                { name: "Java", icon: "devicon-java-plain colored" },
                { name: "Spring", icon: "devicon-spring-original colored" },
                { name: ".NET", icon: "devicon-dotnetcore-plain colored" },
                { name: "Elixir", icon: "devicon-elixir-plain colored" },
                { name: "Ruby", icon: "devicon-ruby-plain colored" },
                { name: "Ruby on Rails", icon: "devicon-rails-plain colored" },
                { name: "PHP", icon: "devicon-php-plain colored" },
                { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
                { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
                { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
                { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
                { name: "Pascal / Object Pascal", icon: "devicon-pascal-plain colored" }
            ],
            icon: "/icons/backend.png"
        },
        {
            skill: "DevOps & Infrastructure",
            technologies: [
                { name: "Docker", icon: "devicon-docker-plain colored" },
                { name: "Linux", icon: "devicon-linux-plain colored" },
                { name: "Git", icon: "devicon-git-plain colored" },
                { name: "GitHub Actions", icon: "devicon-githubactions-plain colored" }
            ],
            icon: "/icons/devops.png"
        },
        {
            skill: "Embedded Systems & IoT",
            technologies: [
                { name: "Arduino", icon: "devicon-arduino-plain colored" },
                { name: "Raspberry Pi", icon: "devicon-raspberrypi-plain colored" },
                { name: "C", icon: "devicon-c-plain colored" },
                { name: "C++", icon: "devicon-cplusplus-plain colored" }
            ],
            icon: "/icons/embedded.png"
        },
        {
            skill: "Scripting & Engine Tools",
            technologies: [
                { name: "Lua", icon: "devicon-lua-plain colored" },
                { name: "Custom Game Engines from Scratch", icon: "devicon-godot-plain colored" }
            ],
            icon: "/icons/engine.png"
        }
    ],
softSkills: [
        { 
            skill: "Problem Solving", 
            icon: "/icons/problem-solving.png",
            details: "Adept at breaking down complex, multifaceted challenges into manageable components, debugging issues efficiently, and engineering resilient, scalable solutions."
        },
        { 
            skill: "Teamwork & Collaboration", 
            icon: "/icons/teamwork.png",
            details: "Thrives in cross-functional team environments, openly sharing knowledge, actively listening to peer feedback, and driving collective project goals forward."
        },
        { 
            skill: "Bilingual Communication (Polish & English)", 
            icon: "/icons/languages.png",
            details: "Fluent in both Polish and English, enabling seamless technical documentation, smooth client interactions, and effective collaboration across international teams."
        },
        { 
            skill: "Rapid Self-Taught Adaptation", 
            icon: "/icons/learning.png",
            details: "Highly autonomous learner capable of quickly picking up emerging technologies, frameworks, and workflows to meet fast-paced project requirements."
        },
        { 
            skill: "Time Management & Prioritization", 
            icon: "/icons/time.png",
            details: "Exceptional at organizing daily workloads, estimating task durations accurately, and balancing multiple concurrent deadlines without compromising quality."
        },
        { 
            skill: "Critical Thinking", 
            icon: "/icons/critical.png",
            details: "Approaches obstacles with analytical objectivity, evaluating alternative architectures and strategies to make informed, long-term technical choices."
        }
    ],
    others: [
        { 
            skill: "Indie Game Development (From Scratch)", 
            details: "Building everything completely from scratch – code, architecture, and core systems without relying on pre-made heavy frameworks.",
            icon: "/icons/gamedev.png"
        },
        { 
            skill: "Complete 2D Game Creation", 
            details: "100% self-made content: hand-crafted pixel art graphics, original music, sound design, and game mechanics.",
            icon: "/icons/2dgame.png"
        },
        { 
            skill: "Advanced Typing & Keyboards", 
            details: "140 WPM typing speed | Ergonomic layouts mastery: QWERTY, Dvorak Programmers, and Colemak-DH.",
            icon: "/icons/typing.png"
        },
        { 
            skill: "Creative UI/UX & 3D Web", 
            details: "Figma, micro-interactions, custom CSS animations, and Three.js 3D web environments.",
            icon: "/icons/ui.png"
        },
        { 
            skill: "PC Building & Hardware", 
            details: "Custom PC assembly, component selection, hardware diagnostics, and thermal optimization.",
            icon: "/icons/pc.png"
        }
    ],
};

export const hardware = [
    {
        model: "geforce_rtx_3080_graphics_card",
        title: "NVIDIA GeForce RTX 3060 12GB VRAM",
        description: "High-performance graphics card built for high-end rendering and gaming.",
        specs: "Ampere architecture, 10GB/12GB GDDR6X, Ray Tracing cores.",
    },
    {
        model: "amd_ryzen_7_7800x3d",
        title: "AMD Ryzen 7 7800X3D",
        description: "The ultimate gaming processor featuring 3D V-Cache technology.",
        specs: "8 Cores, 16 Threads, up to 5.0 GHz boost.",
    },
    {
        model: "ram_corsair_vengeance_ddr4_rgb_pro",
        title: "Corsair Vengeance Pro",
        description: "High-performance DDR4/DDR5 memory with striking LED lighting.",
        specs: "Optimized for high frequencies and low latency.",
    },
    {
        model: "liquid_cpu_cooling",
        title: "Corsair iCUE H150i Elite LCD",
        description: "Advanced liquid cooling system ensuring optimal thermal performance.",
        specs: "High-efficiency pump, optimized radiator fans.",
    },
    {
        model: "x570_prime_motherboard_hq_pbr",
        title: "ASUS Prime X570 Motherboard",
        description: "Advanced motherboard with robust power delivery and stable performance.",
        specs: "PCIe 4.0 support, robust VRM cooling, high-end audio.",
    },
    {
        model: "power_supply_aerocool_kcas_500w_atx",
        title: "Aerocool KCAS 500W ATX",
        description: "Reliable power supply unit designed for stable power distribution.",
        specs: "500W output, ATX standard, efficient cooling fan.",
    },
    {
        model: "samsung_990_pro_ssd",
        title: "Samsung 990 Pro SSD",
        description: "Lightning-fast NVMe M.2 solid-state drive for extreme data speeds.",
        specs: "PCIe 4.0, ultra-high read/write speeds, high endurance.",
    },
    {
        model: "low_poly_steel_series_data_mouse",
        title: "SteelSeries Rival 3",
        description: "Ergonomic gaming mouse built with precise tracking sensor.",
        specs: "Low-poly design, smooth glide feet, responsive switches.",
    },
    {
        model: "logitech_mx_keys",
        title: "Logitech MX Keys",
        description: "Advanced wireless illuminated keyboard designed for productivity.",
        specs: "Spherically-dished keys, smart illumination, multi-device.",
    },
    {
        model: "rigged_monitor_iiyama_gb2770hsu_free_download",
        title: "Iiyama G-Master GCB3481WQSU",
        description: "High-refresh gaming monitor delivering smooth and immersive visuals.",
        specs: "27-inch FHD, high refresh rate, fast IPS panel.",
    },
    {
        model: "headphones",
        title: "Logitech G Pro X 2 Lightspeed",
        description: "Immersive audio headset for precise directional sound and comfort.",
        specs: "Over-ear design, clear acoustics, noise isolation.",
    },
];
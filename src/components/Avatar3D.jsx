import { onMount, onCleanup, createEffect } from 'solid-js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Avatar3D(props) {
    let canvasContainer;
    let mixer;
    let currentModel = null;
    let scene, camera, renderer, controls;
    const clock = new THREE.Clock();

    // Function to load and normalize 3D avatar animations/models (.glb)
    const loadAnimation = (animName) => {
        if (!animName) return;

        const loader = new GLTFLoader();
        loader.load(`/models/avatar/${animName}.glb`, (gltf) => {
            // Remove previous model from the scene to prevent memory leaks and overlapping
            if (currentModel) {
                scene.remove(currentModel);
            }

            currentModel = gltf.scene;

            // Center the model perfectly based on its bounding box
            const box = new THREE.Box3().setFromObject(currentModel);
            const center = box.getCenter(new THREE.Vector3());
            currentModel.position.sub(center);

            scene.add(currentModel);

            // Handle skeletal animations if present in the GLTF file
            if (gltf.animations && gltf.animations.length > 0) {
                mixer = new THREE.AnimationMixer(currentModel);
                const action = mixer.clipAction(gltf.animations[0]);
                action.play();
            } else {
                mixer = null;
            }
        }, undefined, (error) => {
            console.error("Error loading 3D avatar model", error);
        });
    };

    onMount(() => {
        // Initialize Three.js scene
        scene = new THREE.Scene();
        
        // Setup perspective camera optimized for character framing
        camera = new THREE.PerspectiveCamera(
            35, 
            canvasContainer.clientWidth / canvasContainer.clientHeight, 
            0.1, 
            1000
        );
        camera.position.set(0, 1.5, 3);

        // Setup WebGL renderer with high performance and transparency flags
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        canvasContainer.appendChild(renderer.domElement);

        // Setup Orbit Controls for interactive model rotation
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // --- MIAMI SUNSET LIGHTING SETUP (Optimized Colors & Intensities) ---

        // 1. Soft neutral ambient light to ensure deep shadows aren't completely pitch black
        const ambientLight = new THREE.AmbientLight(0xfff5e1, 1.2);
        scene.add(ambientLight);

        // 2. Warm golden hour sunlight from above (Sunset Orange: #FFB347)
        const sunsetLight = new THREE.DirectionalLight(0xffb347, 3.2);
        sunsetLight.position.set(5, 6, 4);
        scene.add(sunsetLight);

        // 3. Vibrant Miami neon-pink side rim light for contrast (Neon Pink: #FF2A6D)
        const neonLight = new THREE.DirectionalLight(0xff2a6d, 2.8);
        neonLight.position.set(-5, 1, -3);
        scene.add(neonLight);

        // 4. Subtle Caribbean turquoise fill light from below/front (Turquoise: #05D9E8)
        const fillLight = new THREE.PointLight(0x05d9e8, 2.0, 8);
        fillLight.position.set(0, 1.5, 2);
        scene.add(fillLight);

        // Load initial animation/model based on props
        loadAnimation(props.animation);

        // Main animation render loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            
            const delta = clock.getDelta();
            if (mixer) mixer.update(delta);

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Handle dynamic container resizing to maintain proper camera aspect ratio
        const handleResize = () => {
            if (!canvasContainer) return;
            camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup resources and event listeners on component unmount
        onCleanup(() => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            renderer.dispose();
        });
    });

    // Reactive effect to trigger animation changes when props update
    createEffect(() => {
        if (props.animation && scene) {
            loadAnimation(props.animation);
        }
    });

    return (
        <div
            ref={canvasContainer}
            style={{width: "20vw", height: "45vh", cursor: "grab"}}
        />
    );
}
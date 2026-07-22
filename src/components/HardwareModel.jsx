import { onMount, onCleanup, createEffect } from 'solid-js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function HardwareModel(props) {
    let canvasContainer;
    let mixer;
    let currentModel = null;
    let scene, camera, renderer, controls;
    const clock = new THREE.Clock();

    // Function to load and normalize 3D models (.glb)
    const loadModel = (modelName) => {
        if (!modelName) return;

        const loader = new GLTFLoader();
        loader.load(`/models/hardware/${modelName}.glb`, (gltf) => {
            // Remove previous model from the scene if it exists
            if (currentModel) {
                scene.remove(currentModel);
            }

            currentModel = gltf.scene;

            // 1. Calculate bounding box and dimensions to normalize scale
            const box = new THREE.Box3().setFromObject(currentModel);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            // Scale model to a standard maximum dimension of 2 units
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 2 / maxDim; 
            currentModel.scale.set(scale, scale, scale);

            // 2. Recalculate bounding box after scaling and center the model perfectly
            box.setFromObject(currentModel);
            box.getCenter(center);
            currentModel.position.sub(center);

            scene.add(currentModel);

            // Handle model animations if available
            if (gltf.animations && gltf.animations.length > 0) {
                mixer = new THREE.AnimationMixer(currentModel);
                const action = mixer.clipAction(gltf.animations[0]);
                action.play();
            } else {
                mixer = null;
            }
        }, undefined, (error) => {
            console.error("Error loading hardware 3D model", error);
        });
    };

    onMount(() => {
        // Initialize Three.js scene
        scene = new THREE.Scene();
        
        // Use props.fov or default to 45 if not provided
        const initialFov = props.fov || 45;

        // Setup perspective camera
        camera = new THREE.PerspectiveCamera(
            initialFov, 
            canvasContainer.clientWidth / canvasContainer.clientHeight, 
            0.1, 
            1000
        );
        camera.position.set(0, 1.5, 3);

        // Setup WebGL renderer with transparency and anti-aliasing
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        canvasContainer.appendChild(renderer.domElement);

        // Setup Orbit Controls for mouse interaction
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Lights

        // 1. Very bright light
        const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
        scene.add(ambientLight);

        // 2. Warm light from above
        const sunsetLight = new THREE.DirectionalLight(0xffb347, 4.0);
        sunsetLight.position.set(5, 5, 5);
        scene.add(sunsetLight);

        // 3. Agressive, neon-rose from the side
        const neonLight = new THREE.DirectionalLight(0xff2a6d, 3.5);
        neonLight.position.set(-5, 0, -3);
        scene.add(neonLight);

        // 4. For brightness
        const pointLight = new THREE.PointLight(0x05d9e8, 5, 10);
        pointLight.position.set(0, 2, 0);
        scene.add(pointLight);

        // Initial model load
        loadModel(props.model);

        // Animation loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            
            const delta = clock.getDelta();
            if (mixer) mixer.update(delta);

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resizing to keep proper aspect ratio
        const handleResize = () => {
            if (!canvasContainer) return;
            camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup event listeners and renderer on component unmount
        onCleanup(() => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            renderer?.dispose();
        });
    });

    // React to model or FOV changes dynamically
    createEffect(() => {
        if (props.model && scene) {
            loadModel(props.model);
        }
        if (camera) {
            camera.fov = props.fov || 45;
            camera.updateProjectionMatrix();
        }
    });

    return (
        <div
            ref={canvasContainer}
            style={{ width: "30vw", height: "30vh", cursor: "grab" }}
        />
    );
}
import {onMount, onCleanup, createEffect} from 'solid-js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Avatar3D(props) {
    let canvasContainer;
    let mixer;
    let currentModel = null;
    let scene, camera, renderer, controls;
    const clock = new THREE.Clock();

    const loadAnimation = (animName) => {
        if (!animName) return;

        const loader = new GLTFLoader();
        loader.load(`/models/${animName}.glb`, (gltf) => {
            if (currentModel) {
                scene.remove(currentModel);
            }

            currentModel = gltf.scene;

            const box = new THREE.Box3().setFromObject(currentModel);
            const center = box.getCenter(new THREE.Vector3());
            currentModel.position.sub(center);

            scene.add(currentModel);

            if (gltf.animations && gltf.animations.length > 0) {
                mixer = new THREE.AnimationMixer(currentModel);
                const action = mixer.clipAction(gltf.animations[0]);
                action.play();
            } else {
                mixer = null;
            }
        }, undefined, (error) => {
            console.error("Error loading 3D model", error);
        });
    };

    onMount(() => {
        scene = new THREE.Scene();
        
        camera = new THREE.PerspectiveCamera(
            35, 
            canvasContainer.clientWidth / canvasContainer.clientHeight, 
            0.1, 
            1000
        );
        camera.position.set(0, 1.5, 3);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        canvasContainer.appendChild(renderer.domElement);

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        loadAnimation(props.animation);

        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            
            const delta = clock.getDelta();
            if (mixer) mixer.update(delta);

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        onCleanup(() => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            renderer.dispose();
        });
    });

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
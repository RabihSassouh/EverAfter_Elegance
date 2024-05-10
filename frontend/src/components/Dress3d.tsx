import * as React from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ThreeSceneProps {
    width: number;
    height: number;
}

export default class ThreeScene extends React.Component<ThreeSceneProps> {
    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;
    private mount: HTMLDivElement | null = null; 

    constructor(props: ThreeSceneProps) {
        super(props);

        // Create a scene
        this.scene = new THREE.Scene();

        // Create a camera
        this.camera = new THREE.PerspectiveCamera(75, props.width / props.height, 0.1, 1000);
        this.camera.position.z = 5;

        // Create a renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(props.width, props.height);

        const spotlight= new THREE.SpotLight(0xffffff)
        spotlight.position.set(-40,60,-10)
        this.scene.add(spotlight)
        // Load the model
        const loader = new GLTFLoader();
        loader.load('/wedding_dress_3d.glb', (gltf) => {
            this.scene.add(gltf.scene);
        });
        loader.load('/wedding_dress_3d.glb', (gltf) => {
            gltf.scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    // Check if the mesh belongs to the dress
                    if (child.name === 'wedding_dress_3d') { // Replace 'dress' with the name of your dress mesh
                        // Set material color to white
                        child.material.color.set(0xffffff);
                    }
                }
            });
            this.scene.add(gltf.scene);
        });
        
    }

    componentDidMount() {
        // Append renderer to the DOM
        this.mount?.appendChild(this.renderer.domElement);
        // this.renderer.setClearColor(0xffffff);
        // Start the animation loop
        this.animate();
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
    };

    render() {
        return <div ref={(ref) => (this.mount = ref)} />;
    }
}

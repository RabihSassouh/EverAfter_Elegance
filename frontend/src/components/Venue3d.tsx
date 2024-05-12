import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
// import { div } from "three/examples/jsm/nodes/Nodes.js";

function Model(props: any) {
  const { scene } = useGLTF("/wedding_venue.glb");
  return <primitive object={scene} {...props} />;
}
interface Venue1Props {
  width: string;
  height: string;
}

const Venue1: React.FC<Venue1Props> = ({ width, height }) => {
  return (
    <div style={{ width, height }}>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{ position: "absolute" }}
      >
        <color attach="background" args={["#f7f8ed"]} />
        <PresentationControls
          speed={1.5}
          global
          zoom={0.7}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={null}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default Venue1;

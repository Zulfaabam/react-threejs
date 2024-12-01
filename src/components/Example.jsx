import { useFrame, Canvas } from '@react-three/fiber';
import { Sparkles, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import Ayam from './Ayam';

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color='#468585' emissive='#468585' />
      <Sparkles
        count={100}
        scale={1}
        size={6}
        speed={0.002}
        noise={0.2}
        color='orange'
      />
    </mesh>
  );
};

function Example() {
  return (
    <Canvas className='h-screen w-screen flex justify-center items-center'>
      <OrbitControls enablePan enableZoom enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0xffffff} />
      <color attach='background' args={['#f0f0f0']} />
      {/* <RotatingCube /> */}
      <Ayam />
    </Canvas>
  );
}

export default Example;

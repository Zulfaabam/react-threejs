import { Canvas } from '@react-three/fiber';
import './App.css';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Canvas
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <OrbitControls enablePan enableZoom enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />
      <color attach='background' args={['#f0f0f0']} />
    </Canvas>
  );
}

export default App;

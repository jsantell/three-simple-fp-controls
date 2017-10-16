import SimpleFPControls from './SimpleFPControls';

if (typeof window !== 'undefined' && typeof window.THREE === 'object') {
  window.THREE.SimpleFPControls = SimpleFPControls;
}

export default SimpleFPControls;

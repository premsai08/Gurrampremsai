import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ExecutiveScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 120);
    camera.position.set(0, 0.55, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambient = new THREE.AmbientLight(0xffffff, 0.62);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xe8f1ff, 2.1);
    key.position.set(4, 5, 6);
    scene.add(key);

    const rim = new THREE.PointLight(0x6ea8ff, 10, 16);
    rim.position.set(-4, -1.8, 3.5);
    scene.add(rim);

    const coreGeometry = new THREE.IcosahedronGeometry(1.18, 4);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf6f7fb,
      metalness: 0.08,
      roughness: 0.18,
      transmission: 0.22,
      thickness: 0.9,
      clearcoat: 0.8,
      clearcoatRoughness: 0.12,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.215, 2),
      new THREE.MeshBasicMaterial({ color: 0x98b9ff, wireframe: true, transparent: true, opacity: 0.23 })
    );
    group.add(wire);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xdbeafe,
      transparent: true,
      opacity: 0.36,
      side: THREE.DoubleSide,
    });

    const rings = [0, 1, 2].map((index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.45 + index * 0.36, 0.012, 18, 160), ringMaterial.clone());
      ring.rotation.x = Math.PI / 2.5;
      ring.rotation.y = index * 0.72;
      ring.rotation.z = index * 0.45;
      group.add(ring);
      return ring;
    });

    const beamMaterial = new THREE.LineBasicMaterial({ color: 0x8aa4c8, transparent: true, opacity: 0.32 });
    const beamPoints = [];
    for (let i = 0; i < 90; i += 1) {
      const angle = (i / 90) * Math.PI * 2;
      const radius = 2.7 + Math.sin(i * 0.7) * 0.18;
      beamPoints.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle * 2.1) * 0.26, Math.sin(angle) * radius));
    }
    const beam = new THREE.Line(new THREE.BufferGeometry().setFromPoints(beamPoints), beamMaterial);
    group.add(beam);

    const particleGeometry = new THREE.SphereGeometry(0.018, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xeaf2ff, transparent: true, opacity: 0.72 });
    const particles = new THREE.InstancedMesh(particleGeometry, particleMaterial, 140);
    const dummy = new THREE.Object3D();
    const particleData = [];

    for (let i = 0; i < 140; i += 1) {
      const radius = 2.2 + Math.random() * 2.3;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 2.6;
      particleData.push({ radius, angle, height, speed: 0.18 + Math.random() * 0.34 });
      dummy.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
      dummy.updateMatrix();
      particles.setMatrixAt(i, dummy.matrix);
    }
    group.add(particles);

    const resize = () => {
      const width = mount.clientWidth || 640;
      const height = mount.clientHeight || 520;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    let frameId = 0;
    const animate = () => {
      const elapsed = performance.now() * 0.001;
      group.rotation.y = Math.sin(elapsed * 0.18) * 0.22;
      group.rotation.x = -0.1 + Math.sin(elapsed * 0.13) * 0.06;
      core.rotation.y = elapsed * 0.28;
      core.rotation.x = elapsed * 0.16;
      wire.rotation.y = -elapsed * 0.22;
      wire.rotation.z = elapsed * 0.11;
      beam.rotation.y = elapsed * 0.12;

      rings.forEach((ring, index) => {
        ring.rotation.z += 0.0026 + index * 0.0011;
        ring.rotation.y += 0.0015 + index * 0.0008;
        ring.material.opacity = 0.24 + Math.sin(elapsed + index) * 0.08;
      });

      particleData.forEach((particle, index) => {
        const angle = particle.angle + elapsed * particle.speed;
        dummy.position.set(Math.cos(angle) * particle.radius, particle.height + Math.sin(elapsed + index) * 0.04, Math.sin(angle) * particle.radius);
        dummy.updateMatrix();
        particles.setMatrixAt(index, dummy.matrix);
      });
      particles.instanceMatrix.needsUpdate = true;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      mount.removeChild(renderer.domElement);
      coreGeometry.dispose();
      coreMaterial.dispose();
      wire.geometry.dispose();
      wire.material.dispose();
      rings.forEach((ring) => {
        ring.geometry.dispose();
        ring.material.dispose();
      });
      beam.geometry.dispose();
      beam.material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="executive-scene" aria-hidden="true" />;
}

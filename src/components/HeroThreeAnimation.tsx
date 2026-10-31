import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Eye-catching, ultra-crisp 3D kinetic animation for Hero section.
 * Renders a radiant 3D gyroscopic crystalline core with orbital rings,
 * glowing particle waves, and floating star nodes.
 * Features smooth, graceful autonomous wandering and bouncing across
 * all edges of the section, with organic steering towards mouse direction.
 */
export default function HeroThreeAnimation() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Detect software rendering safely
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 20);

    // 2. Renderer with maximum clarity
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    container.appendChild(renderer.domElement);

    // 3. Vibrant Point Lights that travel dynamically with the wandering core
    const ambientLight = new THREE.AmbientLight(0x334155, 1.8);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xf59e0b, 5.5, 75);
    scene.add(goldLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 4.8, 75);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3.5, 55);
    scene.add(purpleLight);

    // 4. Central 3D Kinetic Gyroscope & Crystalline Polyhedron Group
    const coreGroup = new THREE.Group();
    coreGroup.position.set(width > 768 ? 4 : 0, 1, 0);
    scene.add(coreGroup);

    // 4A. Glowing Polyhedron Crystal Facets
    const crystalGeo = new THREE.IcosahedronGeometry(2.8, 1);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x0ea5e9,
      emissive: 0x0369a1,
      emissiveIntensity: 0.65,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: true,
      transparent: true,
      opacity: 0.88,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    coreGroup.add(crystalMesh);

    // 4B. Inner Radiant Diamond Core
    const innerGeo = new THREE.OctahedronGeometry(1.5, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 0.95,
      roughness: 0.2,
      metalness: 0.9,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 4C. Triple Concentric Gyroscopic Orbital Rings
    const createRing = (radius: number, tube: number, color: number, opacity: number, rotX: number, rotY: number) => {
      const geo = new THREE.TorusGeometry(radius, tube, 16, 120);
      const mat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.75,
        roughness: 0.3,
        metalness: 0.8,
        transparent: true,
        opacity,
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.set(rotX, rotY, 0);
      return ring;
    };

    const ring1 = createRing(4.3, 0.05, 0xf59e0b, 0.85, Math.PI / 4, 0);
    const ring2 = createRing(5.2, 0.04, 0x38bdf8, 0.8, -Math.PI / 3, Math.PI / 6);
    const ring3 = createRing(6.0, 0.035, 0xc084fc, 0.7, Math.PI / 6, Math.PI / 3);
    coreGroup.add(ring1);
    coreGroup.add(ring2);
    coreGroup.add(ring3);

    // 5. Crisp Procedural Point Texture
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.85)');
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    const particleTexture = createCircleTexture();

    // 6. Dynamic Glowing Wave Grid Across the Floor
    const gridCols = 46;
    const gridRows = 30;
    const totalGridPoints = gridCols * gridRows;
    const waveGeo = new THREE.BufferGeometry();
    const wavePositions = new Float32Array(totalGridPoints * 3);
    const waveColors = new Float32Array(totalGridPoints * 3);

    const goldColor = new THREE.Color(0xf59e0b);
    const cyanColor = new THREE.Color(0x38bdf8);
    const purpleColor = new THREE.Color(0xa855f7);

    let idx = 0;
    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        const u = (i / (gridCols - 1) - 0.5) * 55;
        const v = (j / (gridRows - 1) - 0.5) * 35;
        wavePositions[idx * 3] = u;
        wavePositions[idx * 3 + 1] = -7.5;
        wavePositions[idx * 3 + 2] = v - 6;

        const factor = (i / gridCols + j / gridRows) * 0.5;
        const c = factor < 0.5 ? cyanColor.clone().lerp(goldColor, factor * 2) : goldColor.clone().lerp(purpleColor, (factor - 0.5) * 2);

        waveColors[idx * 3] = c.r;
        waveColors[idx * 3 + 1] = c.g;
        waveColors[idx * 3 + 2] = c.b;
        idx++;
      }
    }

    waveGeo.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    waveGeo.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const waveMat = new THREE.PointsMaterial({
      size: 0.3,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const wavePoints = new THREE.Points(waveGeo, waveMat);
    scene.add(wavePoints);

    // 7. Ambient Floating Constellation Stars
    const starCount = isSoftwareGl ? 140 : 320;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 55;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 32 + 2;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 35;

      const pick = Math.random();
      const col = pick < 0.4 ? goldColor : pick < 0.75 ? cyanColor : purpleColor;
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.22,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // 8. Interactive Physics: Smooth Wandering, Bouncing & Mouse Steering
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 1.5;

    const handlePointerMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = normX * 2.5;
      mouseY = normY * 1.8;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Wandering Rover State (Slow, smooth, bouncy movement across all devices)
    let roverX = width > 768 ? 3.5 : 0;
    let roverY = 0.8;
    let velX = 0.024;
    let velY = 0.016;

    // 9. Responsive Adjustments
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      if (width < 768) {
        coreGroup.scale.set(0.65, 0.65, 0.65);
      } else {
        coreGroup.scale.set(0.95, 0.95, 0.95);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // 10. Animation Loop
    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();

      // Gyroscopic crystal rotations
      crystalMesh.rotation.x = time * 0.35;
      crystalMesh.rotation.y = time * 0.45;

      innerMesh.rotation.x = -time * 0.55;
      innerMesh.rotation.y = -time * 0.65;

      ring1.rotation.z = time * 0.38;
      ring2.rotation.z = -time * 0.42;
      ring3.rotation.z = time * 0.32;

      // Boundaries for smooth bouncing movement across all screen sizes
      const boundX = width < 768 ? 4.5 : 9.5;
      const boundY = 3.2;

      // Gentle steering towards mouse position
      const mouseAttractionStrength = 0.00065;
      velX += (mouseX * (boundX * 0.6) - roverX) * mouseAttractionStrength;
      velY += (mouseY * (boundY * 0.6) - roverY) * mouseAttractionStrength;

      // Speed limits: keep movement smooth and dignified (not too frantic, never stagnant)
      const currentSpeed = Math.hypot(velX, velY);
      const maxSpeed = 0.038;
      const minSpeed = 0.015;
      if (currentSpeed > maxSpeed) {
        velX = (velX / currentSpeed) * maxSpeed;
        velY = (velY / currentSpeed) * maxSpeed;
      } else if (currentSpeed < minSpeed && currentSpeed > 0.0001) {
        velX = (velX / currentSpeed) * minSpeed;
        velY = (velY / currentSpeed) * minSpeed;
      }

      // Update positions
      roverX += velX;
      roverY += velY;

      // Smooth bounce on left/right edges
      if (roverX > boundX) {
        roverX = boundX;
        velX = -Math.abs(velX);
      } else if (roverX < -boundX) {
        roverX = -boundX;
        velX = Math.abs(velX);
      }

      // Smooth bounce on top/bottom edges
      if (roverY > boundY) {
        roverY = boundY;
        velY = -Math.abs(velY);
      } else if (roverY < -boundY) {
        roverY = -boundY;
        velY = Math.abs(velY);
      }

      // Apply dynamic position with gentle subtle harmonic float
      const harmonicZ = Math.sin(time * 0.7) * 1.2;
      coreGroup.position.set(roverX, roverY, harmonicZ);

      // Point lights travel with the moving 3D group, illuminating the whole section
      goldLight.position.set(roverX + 4.5, roverY + 3.0, 7);
      cyanLight.position.set(roverX - 4.5, roverY - 3.0, 7);
      purpleLight.position.set(roverX, roverY + 4.5, -2);

      // Mathematical wave ripple on particle grid
      const pos = waveGeo.attributes.position;
      let pIdx = 0;
      for (let i = 0; i < gridCols; i++) {
        for (let j = 0; j < gridRows; j++) {
          const u = (i / (gridCols - 1) - 0.5) * 12;
          const v = (j / (gridRows - 1) - 0.5) * 8;
          const heightOffset = Math.sin(u + time * 1.8) * 1.1 + Math.cos(v + time * 1.4) * 0.9;
          pos.setY(pIdx, -7.5 + heightOffset);
          pIdx++;
        }
      }
      pos.needsUpdate = true;

      // Subtle rotation of background stars
      starPoints.rotation.y = time * 0.035;
      starPoints.rotation.x = Math.sin(time * 0.04) * 0.04;

      // Smooth camera parallax
      targetCameraX = mouseX * 2.0;
      targetCameraY = 1.5 + mouseY * 1.3;
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(coreGroup.position.x * 0.3, coreGroup.position.y * 0.2, 0);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      crystalGeo.dispose();
      crystalMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1.geometry.dispose();
      (ring1.material as THREE.Material).dispose();
      ring2.geometry.dispose();
      (ring2.material as THREE.Material).dispose();
      ring3.geometry.dispose();
      (ring3.material as THREE.Material).dispose();
      waveGeo.dispose();
      waveMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      particleTexture.dispose();

      renderer.dispose();
      if (container && renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* Subtle top & bottom luminous gradient blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C10]/20 via-transparent to-[#0A0C10] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(245,158,11,0.08),transparent_50%)] pointer-events-none" />
    </div>
  );
}

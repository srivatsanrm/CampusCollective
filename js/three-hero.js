/**
 * CAMPUS COLLECTIVE — Interactive 3D WebGL Prismatic Gem
 * Minimalist, premium, mouse-reactive geometric 3D object.
 */
function initHero3D(containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof THREE === 'undefined') return;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const width = container.clientWidth || 450;
  const height = container.clientHeight || 450;

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 5.2;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Group for rotation
  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // 1. Central Faceted Crystal (Icosahedron)
  const coreGeometry = new THREE.IcosahedronGeometry(1.4, 0);
  const coreMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x09090b,
    emissive: 0x111111,
    roughness: 0.15,
    metalness: 0.8,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: 0.94,
    wireframe: false
  });
  const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
  mainGroup.add(coreMesh);

  // 2. Crimson Accent Wireframe Cage
  const wireGeometry = new THREE.IcosahedronGeometry(1.41, 1);
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0xe11d48, // Crimson Accent Red
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
  mainGroup.add(wireMesh);

  // 3. Inner Prismatic Core (Glowing red tetrahedron)
  const innerGeometry = new THREE.OctahedronGeometry(0.7, 0);
  const innerMaterial = new THREE.MeshStandardMaterial({
    color: 0xff334b,
    emissive: 0xe11d48,
    emissiveIntensity: 0.6,
    roughness: 0.2,
    metalness: 0.5
  });
  const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
  mainGroup.add(innerMesh);

  // 4. Subtle Orbital Rings
  const ringMaterial = new THREE.LineBasicMaterial({
    color: 0x18181b,
    transparent: true,
    opacity: 0.25
  });
  const redRingMaterial = new THREE.LineBasicMaterial({
    color: 0xe11d48,
    transparent: true,
    opacity: 0.6
  });

  const ringGeo1 = new THREE.BufferGeometry();
  const ringPoints1 = [];
  const radius1 = 2.1;
  for (let i = 0; i <= 64; i++) {
    const theta = (i / 64) * Math.PI * 2;
    ringPoints1.push(new THREE.Vector3(Math.cos(theta) * radius1, Math.sin(theta) * radius1, 0));
  }
  ringGeo1.setFromPoints(ringPoints1);
  const ring1 = new THREE.Line(ringGeo1, ringMaterial);
  ring1.rotation.x = Math.PI / 3;
  ring1.rotation.y = Math.PI / 6;
  mainGroup.add(ring1);

  const ringGeo2 = new THREE.BufferGeometry();
  const ringPoints2 = [];
  const radius2 = 2.3;
  for (let i = 0; i <= 64; i++) {
    const theta = (i / 64) * Math.PI * 2;
    ringPoints2.push(new THREE.Vector3(Math.cos(theta) * radius2, Math.sin(theta) * radius2, 0));
  }
  ringGeo2.setFromPoints(ringPoints2);
  const ring2 = new THREE.Line(ringGeo2, redRingMaterial);
  ring2.rotation.x = -Math.PI / 4;
  ring2.rotation.z = Math.PI / 5;
  mainGroup.add(ring2);

  // 5. Floating Particles (Energy Nodes)
  const particleCount = 45;
  const particleGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);

  const colRed = new THREE.Color(0xe11d48);
  const colDark = new THREE.Color(0x18181b);
  const colWhite = new THREE.Color(0xffffff);

  for (let i = 0; i < particleCount; i++) {
    const r = 1.8 + Math.random() * 1.0;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    particlePositions[i * 3 + 2] = r * Math.cos(phi);

    const c = Math.random() > 0.4 ? colRed : (Math.random() > 0.5 ? colDark : colWhite);
    particleColors[i * 3] = c.r;
    particleColors[i * 3 + 1] = c.g;
    particleColors[i * 3 + 2] = c.b;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 0.75
  });
  const particles = new THREE.Points(particleGeometry, particleMat);
  mainGroup.add(particles);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
  keyLight.position.set(5, 5, 5);
  scene.add(keyLight);

  const redAccentLight = new THREE.PointLight(0xe11d48, 4, 10);
  redAccentLight.position.set(-3, -2, 2);
  scene.add(redAccentLight);

  const rimLight = new THREE.PointLight(0xffffff, 1.5, 10);
  rimLight.position.set(2, -4, -3);
  scene.add(rimLight);

  // Mouse Interactivity
  let mouseX = 0;
  let mouseY = 0;
  let targetRotationX = 0;
  let targetRotationY = 0;

  function onMouseMove(event) {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX = (x / rect.width) * 2;
    mouseY = -(y / rect.height) * 2;
  }

  window.addEventListener('mousemove', onMouseMove);

  // Resize Handler
  function onResize() {
    if (!container) return;
    const newW = container.clientWidth || 400;
    const newH = container.clientHeight || 400;
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    renderer.setSize(newW, newH);
  }
  window.addEventListener('resize', onResize);

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Constant smooth rotation
    mainGroup.rotation.y += 0.004;
    mainGroup.rotation.x += 0.002;

    // Inner core counter-rotation
    innerMesh.rotation.y -= 0.01;
    innerMesh.rotation.z += 0.005;

    // Rings slow orbit
    ring1.rotation.z += 0.003;
    ring2.rotation.y -= 0.004;

    // Mouse tilt tracking with gentle easing
    targetRotationY = mouseX * 0.8;
    targetRotationX = -mouseY * 0.8;

    mainGroup.position.x += (mouseX * 0.3 - mainGroup.position.x) * 0.05;
    mainGroup.position.y += (mouseY * 0.3 - mainGroup.position.y) * 0.05;

    // Gentle pulse
    const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
    coreMesh.scale.set(pulse, pulse, pulse);
    wireMesh.scale.set(pulse * 1.01, pulse * 1.01, pulse * 1.01);

    renderer.render(scene, camera);
  }

  animate();
}

window.initHero3D = initHero3D;

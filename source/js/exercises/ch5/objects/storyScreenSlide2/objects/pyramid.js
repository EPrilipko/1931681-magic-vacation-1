import * as THREE from 'three';

function makePyramid() {
    const geometry = new THREE.ConeGeometry(125 * Math.sqrt(2), 280, 4);
    const material = new THREE.MeshStandardMaterial({
        color: 0x1D69DE,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
    
    var pyramid = new THREE.Mesh(geometry, material);
    pyramid.position.set(0, 50, -100);

    return pyramid;
}

export { makePyramid };

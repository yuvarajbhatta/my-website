export function generateSpherePositions(count: number): Float32Array {
  const array = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const radius = 3.4 + Math.random() * 2.6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    array[i * 3 + 2] = radius * Math.cos(phi);
  }
  return array;
}

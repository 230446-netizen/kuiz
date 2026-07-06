import { Canvas } from "@react-three/fiber";

function Restaurant3D({ tables, setSelectedTable }) {
  return (
    <div className="p-4 border rounded-lg">

      <h2 className="text-xl font-bold mb-4">
        Restaurant Layout
      </h2>

      <div className="h-64 border rounded mb-4">
        <Canvas>
          <ambientLight />
          
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2, 0.5, 2]} />
            <meshStandardMaterial color="orange" />
          </mesh>

        </Canvas>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {tables.map((table) => (
          <button
            key={table.id}
            onClick={() => setSelectedTable(table.id)}
            className="btn btn-success"
          >
            Table {table.id}
          </button>
        ))}
      </div>

    </div>
  );
}

export default Restaurant3D;

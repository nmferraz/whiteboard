import ReactFlow, { Background, Controls } from "reactflow";
import { zinc } from "tailwindcss/colors";
import "reactflow/dist/style.css";

function App() {
  return (
    <div className="w-screen h-screen">
      <ReactFlow>
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;

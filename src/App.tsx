import { toast } from "sonner";
import { Button } from "./components/ui/button";

function App() {
  const onClick = () => {
    toast.success("Button clicked");
  };

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold text-red-400">React Vite Boiler 2025</h1>
        <Button onClick={onClick}>Click me</Button>
      </div>
    </>
  );
}

export default App;

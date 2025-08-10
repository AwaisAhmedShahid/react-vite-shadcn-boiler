import { toast } from "sonner";
import { Button } from "./components/ui/button";

function App() {
  const onClick = () => {
    toast.success("Button clicked");
  };

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-400">TODO</h1>
        <Button onClick={onClick}>Click me</Button>
      </div>
    </>
  );
}

export default App;

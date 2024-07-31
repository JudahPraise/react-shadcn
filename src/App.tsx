import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "@/context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Outlet />
        <Toaster />
      </AuthProvider>
    </>
  );
}

export default App;

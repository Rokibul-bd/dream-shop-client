import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-[1440px] mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
      <Toaster></Toaster>
    </QueryClientProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});


function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";

import { Layout } from "./pages/Layout";

import { DataProvider } from './context/DataProvider';

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </DataProvider>
  )
}

export default App;

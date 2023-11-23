import { HashRouter } from "react-router-dom";

import { Layout } from "./pages/Layout";

import { DataProvider } from './context/DataProvider';

function App() {

  return (
    <DataProvider>
      <HashRouter>
        <Layout />
      </HashRouter>
    </DataProvider>
  )
}

export default App;

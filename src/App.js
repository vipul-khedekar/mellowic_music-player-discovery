import { Layout, MiddlePanel } from "./styles/Layout";

import Pages from "./pages/Pages";
import SidePanel from "./components/SidePanel";
import RightPanel from "./components/right-panel/RightPanel";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Layout>
      <SidePanel />

      <MiddlePanel>
        <SearchBar />

        <Pages />
      </MiddlePanel>

      <RightPanel />
    </Layout>
  );
}

export default App;

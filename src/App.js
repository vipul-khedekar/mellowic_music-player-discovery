import SidePanel from "./components/SidePanel";
import Pages from "./pages/Pages";
import RightPanel from "./components/right-panel/RightPanel";
import SearchBar from "./components/SearchBar";

import { Layout, MiddlePanel } from "./styles/Layout";

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

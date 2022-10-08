import SidePanel from "./components/SidePanel";
import Pages from "./pages/Pages";
import RightPanel from "./components/right-panel/RightPanel";

import { Layout } from "./styles/Layout";

function App() {
  return (
    <Layout>
      <SidePanel />

      <Pages />

      <RightPanel />
    </Layout>
  );
}

export default App;

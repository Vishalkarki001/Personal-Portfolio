import { Toaster } from "react-hot-toast";
import Layout from "./component/Layout";

function App() {
  return (
    <>
      <Layout />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { borderRadius: "12px", fontWeight: 500 },
        }}
      />
    </>
  );
}

export default App;

import "./App.css";
import Router from "./routes";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#154398",
        },
      }}
    >
      <div className="bg-white">
        <Router />
      </div>
    </ConfigProvider>
  );
}

export default App;

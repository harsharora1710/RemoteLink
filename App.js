import "./App.css";
import Homepage from "./pages/HomePage";
import { Route } from "react-router-dom";
import Chatpage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chat" component={Chatpage} />
    </div>
  );
}

export default App;
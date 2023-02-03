import Sidebar from "./compornents/sidebar/Sidebar";
import Timeline from "./compornents/timeline/Timeline";
import "./App.css"
import Widgets from "./compornents/widget/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Timeline/>
      <Widgets/>
    </div>
  );
}

export default App;

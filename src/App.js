import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  
  return (
    <div className="app">
      {/* Sidebar (Left) */}
      <Sidebar />
      {/* Main Feed (Center) */}
      <Feed />
      {/* Widgets (Right) */}
      <Widgets />
    </div>
  );
}

export default App;

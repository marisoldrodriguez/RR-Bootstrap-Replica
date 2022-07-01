import './App.css';
import TopBar from './Components/TopBar';
import Background from './Components/BackgroundImage';
import StoreListings from './Components/StoreListings';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;

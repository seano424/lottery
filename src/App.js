import './App.css';
import Lottery from './components/Lottery'

function App() {
  return (
    <div className="App">
      <Lottery maxNum={40} numBalls={6} />
      <Lottery maxNum={40} numBalls={4} title="mini lottery" />
    </div>
  );
}

export default App;

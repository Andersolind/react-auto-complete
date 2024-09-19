
import './App.css';
import { AutoComplete } from './components/auto-complete';
import data from './data/data.json';
function App() {
  return (
    <div className="App">
     <h2>Try out this Auto Complete Demo</h2>
    <AutoComplete
        iconColor="blue" data={data}    />
    </div>
  );
}

export default App;

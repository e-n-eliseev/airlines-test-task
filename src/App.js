import './App.scss';
import Filters from './components/filters/Filters';
import Tickets from './components/tickets/Tickets';

function App() {
  return (
    <div className="App">
      <Filters />
      <Tickets />
    </div>
  );
}

export default App;

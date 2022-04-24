import { shallowEqual, useSelector } from 'react-redux';
import './styles/App.scss';
import Filters from './components/filters/Filters';
import Tickets from './components/tickets/Tickets';
import { getFlights } from './store/filter/filterSelectors';

function App() {
  //getting info from store
  const flight = useSelector(getFlights, shallowEqual);

  return (
    <div className="App">
      <Filters />
      {flight.length
        ? < Tickets />
        : <h1 className="ticket__empty">К сожалению нет перелетов по указанным критериям!</h1>}
    </div>
  );
}

export default App;

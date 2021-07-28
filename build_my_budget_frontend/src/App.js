import logo from './logo.svg';
import './App.css';
import AnnualTable from './Components/Table/AnnualTable';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from "./Redux/store"

const store = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
      <ReduxProvider store={store}>
        <div className="App">
            <AnnualTable />
        </div>
    </ReduxProvider>
  );
}

export default App;

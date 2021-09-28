import logo from './logo.svg';
import './App.css';
import AnnualTable from './Components/Table/AnnualTable';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from "./Redux/store"

const store = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
      <ReduxProvider store={store}>
        <div className="App-table">
            <AnnualTable title='Income' income={true} estimated={false}/>
        </div>
        <div className="App-table">
            <AnnualTable title='Expenses' income={false} estimated={false}/>
        </div>
    </ReduxProvider>
  );
}

export default App;

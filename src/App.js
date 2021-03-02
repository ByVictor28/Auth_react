import './App.scss';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Login Register={false}/>
    </div>
  );
}

export default App;

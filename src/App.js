import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Places from './components/Places/Places';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <div>
          <Places></Places>
        </div>
    </div>
  );
}

export default App;

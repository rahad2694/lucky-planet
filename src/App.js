import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Places from './components/Places/Places';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';

function App() {
  const [count , setCount] = useState([]);
  
  const addToListHandle = (data) =>{
    let infoContainer =[];
    infoContainer =[...count , data];
    setCount(infoContainer);
    if(infoContainer.length >4){
      alert('More than 4');
      return;
    }
    // console.log(data.id);
    
    console.log(infoContainer);
  }
  
  return (
    <div className="App">
        <Header></Header>
        <div className='row mx-auto'>
          <div className='col-md-9 col-12 col-xs-12 col-sm-9 col-lg-9 col-xl-9'>
            <Places addToListHandle={addToListHandle}></Places>
          </div>
          <div className='col-md-3 col-12 col-xs-12 col-sm-3 col-lg-3 col-xl-3'>
            <Cart infoContainer={count}></Cart>
          </div>
        </div>
    </div>
  );
}

export default App;

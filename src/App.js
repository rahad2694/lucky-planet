import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Places from './components/Places/Places';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [count , setCount] = useState([]);
  const emptyCart =()=>{
    setCount([]);
  }
  const addToListHandle = (data) =>{
    let infoContainer =[];
    if(!count.includes(data)){
      infoContainer =[...count , data];
      if(infoContainer.length <=4){
        setCount(infoContainer);
      }
      else{
        alert('More than 4 is not Allowed')
      }
    }
    else{
      alert('ALready Selected!')
    }
  }
  
  return (
    <div className="App">
        <Header></Header>
        <div className='row mx-auto'>
          <div className='col-md-9 col-12 col-xs-12 col-sm-9 col-lg-9 col-xl-9'>
            <Places addToListHandle={addToListHandle}></Places>
          </div>
          <div className='col-md-3 col-12 col-xs-12 col-sm-3 col-lg-3 col-xl-3'>
            <Cart emptyCart={emptyCart} infoContainer={count}></Cart>
          </div>
        </div>
    </div>
  );
}


export default App;

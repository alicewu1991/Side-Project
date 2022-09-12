import "./tailwind.css"
import React from 'react';
import Header from './compoment/Header';
import Main from './compoment/Main';
import Footer from './compoment/Footer';

//max-w-[1110px]
function App() {
  return (
    //layout
    <div className="App  w-screen h-screen p-[24px] overflow-hidden" >
       <Header/>
       <div className=" h-full w-full overflow-y-scroll overflow-x-hidden pb-[75px]">
       <Main/>
       <Footer/>
       </div>
    </div>
  );
}

export default App;

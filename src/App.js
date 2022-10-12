import Header from "./components/Header/Header";

import Navbar from "./components/Navbar/Navbar";

import Board from "./components/Board/Board";

import Groups from "./components/Groups/Groups";

import "./App.css";

import {useFetch} from './lib/useFetch'

import {Route,Routes} from 'react-router-dom'

function App() {

  const {data, error, status} = useFetch('https://jsonplaceholder.typicode.com/users')


  return (
    <div>
      <Header />
      <div className="container-fluid main-warpper">
        <div className="row flex-nowrap">
          <Navbar />
          <div className="col">
            <Routes>
            <Route path="/" element={<Board data={data} error={error} status={status}/>}/>
            <Route path="groups" element={<Groups data={data} error={error} status={status}/>}/>
         
           </Routes>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;

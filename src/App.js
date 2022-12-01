import logo from './logo.svg';
import './App.css';
import Task from './components/Task.js';

function App() {
  return (
    <div className="App">
      <h1>To do List</h1>
      <div>

       <p className='task'>Zadanie do zrobienia</p>

          <Task></Task>

       </div>

       <p> Zadania do zrobienia</p>
       <h1></h1>

    </div>
  );
}

export default App;

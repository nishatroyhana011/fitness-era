import './App.css';
import Activities from './components/Activities/Activities';
import Questions from './components/Questions/questions';
import logo from './logo.png';

function App() {
  return (
    <div className="App mx-10">
      
        <div className='flex'>
          <img className='h-16 w-14' src={logo} alt="My logo" />
            <p className='text-teal-800 font-semibold text-3xl my-8'>Fitness Era</p>
        </div>
      
      <Activities></Activities>
      <Questions></Questions>
    </div>
  );
}

export default App;

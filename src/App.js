
import './App.css';
import Activities from './components/Activities/Activities';
import Questions from './components/Questions/questions';

function App() {
  return (
    <div className="App mx-10">
      <div className=''>
            <p className='text-teal-800 font-semibold text-3xl my-8'>Fitness Era</p>
      </div>
      <Activities></Activities>
      <Questions></Questions>
    </div>
  );
}

export default App;

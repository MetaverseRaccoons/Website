import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="App">
        <h2 className="underline">Kevin & Tristan zijn leuke backend developers</h2>
        <h3>xoxo je frontendslaafje</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <body className="h-screen bg-white-700 dark:bg-blue-700">
        <h2 className="underline">Kevin & Tristan zijn leuke backend developers</h2>
        <h3>xoxo je frontendslaafje</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </body>
    </div>
  );
}

export default App;

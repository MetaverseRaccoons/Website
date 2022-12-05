import './App.css';
import Navbar from './components/Navigation/Navbar'
import Profile from './components/Profile/ProfileContentHolder'

function App() {
  return (
    <div>
      <Navbar/>
      <body className="h-screen overflow-hidden bg-gray-900">
        <Profile name={'bben25'} id={'25'}/>
      </body>
    </div>
  );
}

export default App;

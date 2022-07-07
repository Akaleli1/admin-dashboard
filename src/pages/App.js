
import Navbar from '../components/Navbar';
import Hambar from '../components/Hambar';
import Orders from './Orders'

function App() {
  return (
    <div className="root-container">
      <Hambar/> 
      <div className="app-container">
      <Navbar/>
        <div className="body-container">

        <Orders/>
        </div>
      </div>
    </div>
  );
}

export default App;

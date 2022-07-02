
import Hambar from '../../components/Hambar';
import '../../styles/dashboard/styles.scss';
import Home from '../Home';

function Dashboard() {
  return (
    <div className="dashboard-container"> 
      <Hambar/>
      <Home/>
    </div>


  )
}

export default Dashboard;
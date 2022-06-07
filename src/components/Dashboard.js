import Sidebar from './Sidebar';
import Analysis from './Analysis';
import Rating from './Rating';
import Reviews from './Reviews';
import Visitors from './Visitors';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <Reviews />
            <Rating />
            <Analysis />
            <Visitors />
        </div>
    );
}

export default Dashboard;
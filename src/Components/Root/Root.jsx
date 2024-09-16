
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Navbar from '../Home/Navbar';

const Root = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
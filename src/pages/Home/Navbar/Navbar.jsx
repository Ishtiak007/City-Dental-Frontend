import { FaBars } from "react-icons/fa";
import logo from '../../../../public/TitleLogo-png.png'
import { Link } from "react-router-dom";
const Navbar = () => {

    const navLinks = <>
        <li><Link className='font-semibold text-white' to='/'>About</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Our Services</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Blog</Link></li>
        <li><Link className='font-semibold text-white' to='/'>Gallery</Link></li>
        <li><Link className='font-semibold text-white' to='/login'>FAQ</Link></li>

    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-5 bg-black text-white px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars></FaBars>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'><img src={logo} className="w-[80px] ml-5" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                <div>
                    <Link className='font-semibold text-white' to='/dashboard/cart'>
                        <button className="">
                            Request For Appointment
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import './navbar.css'

function Navbar() {
    return (
        <div className="navbar__container">
            <div className='logo'>
                <h1>devjobs</h1>
            </div>
            <div>
            <div className='dark-mode'>
                <div className='off-mode'>left</div>
                <div>
                <label className="switch">
                    <input type="checkbox"/>
                        <span className="slider round"></span>
                </label>
                </div>
                <div className='on-mode'>right</div>
            </div>
            </div>
            


        </div>
    );
}

export default Navbar;

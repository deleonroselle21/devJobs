
import './navbar.css'
import darkMode from '../../assets/desktop/icon-moon.svg'
import lightMode from '../../assets/desktop/icon-sun.svg'

function Navbar(props) {
    return (
        <div className="navbar__container">
            <div className='logo'>
                <h1>devjobs</h1>
            </div>
            <div>
            <div className='dark-mode'>
                <div className='off-mode'><img src={lightMode} alt="" /></div>
                <div>
                <label className="switch">
                    <input type="checkbox" onChange={props.handleTheme} checked={props.checked}/>
                        <span className="slider round"></span>
                </label>
                </div>
                <div className='on-mode'><img src={darkMode} alt="" /></div>
            </div>
            </div>
            


        </div>
    );
}

export default Navbar;

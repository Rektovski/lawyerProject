import "../styles/navbarStyle.css";
import logo from "../images/logo.png";

export default function Navbar() {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <section className="top-nav">
                <div style={{width: 44, height: 44}}
                     onClick={() => {
                         window.location.replace("/")
                     }}
                >
                    <img className={'me-1'} style={{width: "100%", height: "100%"}} src={logo} alt={"logo foto"}/>
                </div>
                <input id="menu-toggle" type="checkbox"/>
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    <li>
                        <a href={'#header'}>Home</a>
                    </li>
                    <li>
                        <a href={'#services'}>Services</a>
                    </li>
                    <li>
                        <a href={'#aboutus'}>About us</a>
                    </li>
                    <li>
                        <a href={'#contact'}>Contact</a>
                    </li>
                </ul>
            </section>
        </>
    )
}
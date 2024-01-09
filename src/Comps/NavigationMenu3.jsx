import "./NavigationMenu3.css"
import { Link, useLocation } from 'react-router-dom';
import {useEffect} from "react";


const routes = [
    { path: '/', label: 'Home', color: 'orange' },
    { path: '/About', label: 'About', color: 'green' },
    { path: '/Product', label: 'Product', color: 'blue' },
    { path: '/Services', label: 'Services', color: 'red' },
    { path: '/Contact', label: 'Contact', color: 'rebeccapurple' },
];

function NavigationMenu3() {
    const { pathname } = useLocation();

    // useEffect(() => {
    //     const activeColor = routes.find(route => route.path === pathname)?.color || 'orange';
    //     const activeItem = document.querySelector('.is-active');
    //     if (activeItem) {
    //         handleIndicator(activeItem, activeColor);
    //     }
    // }, [pathname]);
    //
    // const isActive = (to) => {
    //     return to === pathname;
    // };

    return (
        <div>
            <header>
                <nav>
                    <Link href="#">CSS</Link>
                    <Link href="#">HTML</Link>
                    <Link href="#">JS</Link>
                    <Link href="#">PHP</Link>
                    <Link href="#">SQL</Link>
                </nav>
            </header>

            <div className="scroller">
                <span></span>
                <span></span>
            </div>

            <section id="css">
                <h2>CSS</h2>
                <p>Cascading Style Sheets</p>
            </section>

            <section id="html">
                <h2>HTML</h2>
                <p>HyperText Markup Language</p>
            </section>

            <section id="js">
                <h2>JS</h2>
                <p>Client-Side Scripting Language</p>
            </section>

            <section id="php">
                <h2>PHP</h2>
                <p>Hypertext Preprocessor</p>
            </section>

            <section id="sql">
                <h2>SQL</h2>
                <p>Structured Query Language</p>
            </section>
        </div>
    );
}

export default NavigationMenu3;

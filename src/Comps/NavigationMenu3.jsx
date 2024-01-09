import "./NavigationMenu3.css"
function NavigationMenu3() {
    return (
        <div>
            <header>
                <nav>
                    <a href="#">CSS</a>
                    <a href="#">HTML</a>
                    <a href="#">JS</a>
                    <a href="#">PHP</a>
                    <a href="#">SQL</a>
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

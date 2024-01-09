import "./NavigationMenu3.css"
import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
`

const Nav = styled.nav`
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 65px;
    background: linear-gradient(0deg, #fff0 0px, var(--black) 1px 100%);
    text-align: center;
    display: flex;
    transition: all 0.5s ease 0s;
    &:after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20vw;
        width: 20%;
        height: 100%;
        z-index: -1;
        background: linear-gradient(90deg, var(--sect1) 0 calc(20vw - 3px), var(--sect2) 0 calc(40vw - 6px), var(--sect3) 0 calc(60vw - 10px), var(--sect4) 0 calc(80vw - 13px), var(--sect5) 0 100vw);
        animation: progress linear;
        animation-timeline: scroll(root);
    }
`;

const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 16px 10px;
    position: relative;
    z-index: 1;
    width: 100%;
    font-size: 1.6rem;
    border: 2px solid #000;
    border-top-width: 0px;
    border-bottom-width: 4px;
    &:first-child {
        border-left-width: 0;
    }
    &:last-child {
        border-right-width: 0;
    }
    &:hover {
        background: linear-gradient(90deg, var(--clr) 0 50%, var(--black) 0 100%);
        background-size: 200%;
        background-position: 100% 0;
        animation: colorize 0.5s ease 0s;
        animation-fill-mode: forwards;
        transition: all 0.5s ease 0s;
    }

    &:nth-child(1):hover {
        --clr: var(--sect1);
    }
    &:nth-child(2):hover {
        --clr: var(--sect2);
    }
    &:nth-child(3):hover {
        --clr: var(--sect3);
    }
    &:nth-child(4):hover {
        --clr: var(--sect4);
    }
    &:nth-child(5):hover {
        --clr: var(--sect5);
    }
`

const Section = styled.section`
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    color: #fff;
    padding-top: 30px;
    border-bottom: 4px solid #000;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    > h2 {
        margin: 0;
        width: 100%;
        text-align: center;
    }
    > p {
        margin: 0;
        width: 100%;
        text-align: center;
        font-size: 1.25rem;
    }
`

const Scroller = styled.div`
    position: fixed;
    width: 30px;
    height: 50px;
    background: radial-gradient(ellipse at 50% 33%, #fff0 0 3px, #fff 4px 100%);
    top: calc(50vh - 15px);
    right: 20px;
    border-radius: 20px;
    &:before {
        content: "";
        position: absolute;
        width: 30px;
        height: 50px;
        background: radial-gradient(circle at 50% 33%, #fff0 0 6px, #fff 7px 100%);
        border-radius: 20px 20px;
        left: 0;
        bottom: 0;
    }
    > span {
        position: absolute;
        height: 30px;
        border-left: 5px dotted #fff;
        top: -50px;
        left: 13px
    }
    > span + span {
        top: inherit;
        top: 70px;
    }
    > span:before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border: 4px solid #fff;
        border-color: #fff #fff #fff0 #fff0;
        border-radius: 4px;
        transform: rotate(-45deg);
        left: -11px;
        top: -13px;
    }
    > span + span:before {
        border-color: #fff0 #fff0 #fff #fff ;
        top: 28px;
    }
    &:after {
        content: "Scroll";
        position: absolute;
        left: -5rem;
        font-size: 1.65rem;
        bottom: 0.5rem;
        color: #fff;
        font-weight: bold;
    }
`

function NavigationMenu3() {

    return (
        <div>
            <Header>
                <Nav>
                    <NavLink  href={"#css"} >CSS</NavLink>
                    <NavLink  href={"#html"} >HTML</NavLink>
                    <NavLink href={"#js"} >JS</NavLink>
                    <NavLink href={"#php"} >PHP</NavLink>
                    <NavLink href={"#sql"} >SQL</NavLink>
                </Nav>
            </Header>

            <Scroller>
                <span></span>
                <span></span>
            </Scroller>

            <Section id="css">
                <h2>CSS</h2>
                <p>Cascading Style Sheets</p>
            </Section>

            <Section id="html">
                <h2>HTML</h2>
                <p>HyperText Markup Language</p>
            </Section>

            <Section id="js">
                <h2>JS</h2>
                <p>Client-Side Scripting Language</p>
            </Section>

            <Section id="php">
                <h2>PHP</h2>
                <p>Hypertext Preprocessor</p>
            </Section>

            <Section id="sql">
                <h2>SQL</h2>
                <p>Structured Query Language</p>
            </Section>
        </div>
    );
}

export default NavigationMenu3;

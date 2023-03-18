import logo from '../images/logo.svg';

export default function Header() {
    return (
        <header>
            <div>
                <img src={logo}/>
                <h4>ReactFacts</h4>
            </div>
            <h5>React Course - Project 1</h5>
        </header>
    );
}
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

const root =  document.getElementById("root");

ReactDOM.render(<App />, root);

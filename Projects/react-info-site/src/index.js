import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <main>
            <Header />
            <Main />
            <Footer />
        </main>
    );
}

const root =  document.getElementById("root");

ReactDOM.render(<App />, root);

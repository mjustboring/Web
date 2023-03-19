import twitter from "../images/twitter-logo.svg";
import facebook from "../images/facebook-logo.svg";
import instagram from "../images/instagram-logo.svg";
import github from "../images/github-logo.svg";

export default function Footer() {
    return (
        <footer>
            
            { /* Twitter */ }
            <a href="https://twitter.com/mjustboring" target="_blank">
                <img src={twitter} alt="Twitter" />
            </a>
            
            { /* Facebook */ }
            <a href="https://www.facebook.com/mjustboring" target="_blank">
                <img src={facebook} alt="Facebook" />
            </a>
            
            { /* Instagram */ }
            <a href="https://instagram.com/mjustboring" target="_blank">
                <img src={instagram} alt="Instagram" />
            </a>
            
            { /* Github */ }
            <a href="https://github.com/mjustboring" target="_blank">
                <img src={github} alt="Github" />
            </a>
            
        </footer>
    )
}

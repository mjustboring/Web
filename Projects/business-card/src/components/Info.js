import pic from '../images/profile-pic.jpeg'
import email from '../images/email-logo.svg'
import linkedin from '../images/linkedin-logo.svg'

export default function Info() {
    return (
        <div className="info">
            <img src={pic} className="info-pic" />
            <h4 className="name">
                Sp Maurya
            </h4>
            <h6 className="occupation">
                Frontend Developer
            </h6>
            <div className="buttons">
                <a href="mailto:spm.kvmrn@yahoo.com" className="email" target="_blank">
                    <img src={email} className="email-logo" />
                    Email
                </a>
                <a href="https://www.linkedin.com/in/spmaurya" className="linkedin" target="_blank">
                    <img src={linkedin} className="linkedin-logo" />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

import * as FeatherIcon from 'react-feather';
import './contact-page.css';

function ContactPage() {
    return (
        <div className="contactPage" id="contact">
            <div className="row">
                <a href='https://github.com/pao-prog' class="github"><FeatherIcon.GitHub size={80}/></a>
                <a href='https://www.linkedin.com/in/paolanoun/' class="linkedin"><FeatherIcon.Linkedin size={80}/></a>
                <a href='mailto:paolanoun@berkeley.edu' class="email"><FeatherIcon.Mail size={80}/></a>
            </div>
        </div>
    );
}

export default ContactPage;
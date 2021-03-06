import './about-page.css';
import cutepic from '../../assets/smiling-trees.JPEG';

function AboutPage() {
    return (
        <div className="aboutPage" id="about">
            
            <div className="left">
                <div className="about">About</div>
                <div className="summary">
                    <p>Hey There! My name is Paola. I grew up in Beirut, Lebanon.
                        I am currently a sophomore at UC Berkeley studying computer science.</p>
                    <p>I am passionate about all things computer science and mathematics. I get geeked out about new technologies very easily, you've been warned!
                        In my spare time, I enjoy good food, travel, exercising and spending time with friends. Feel free to reach out!
                    </p>
                </div>
            </div>
            <div className="right">
                <img src={cutepic} className="cutepic" />
            </div>
        </div>
    );
}

export default AboutPage;
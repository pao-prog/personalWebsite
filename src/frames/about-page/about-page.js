import './about-page.css';
import cutepic from '../../assets/smiling-trees.JPEG';

function AboutPage() {
    return (
        <div className="aboutPage">
            <div className="left">
                <div className="about">
                    About
                </div>
                <div className="summary">
                    <p>Hey There! My name is Paola. I grew up in Beirut, Lebanon.
                        I am currently a sophomore at UC Berkeley studying computer science. 
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                    <p>I started coding yadayadayadayadayadab blablabla. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                        and going through the cites of the word in classical literature, 
                        discovered the undoubtable source.</p>
                </div>
            </div>
            <div className="right">
                <img src={cutepic} className="cutepic" />
            </div>
        </div>
    );
}

export default AboutPage;
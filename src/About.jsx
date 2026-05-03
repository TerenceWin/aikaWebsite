import './About.css'

function About(){
    return(
        <div className="aboutWrapper">

            <h2 className="aboutTitle">ABOUT</h2>

            <div className="aboutContent">

                <p className="aboutDescription">
                    Aika Ohno is a spatial designer working across interior and experiential design.<br></br>
                    Her work explores the relationship between concept and space — shaped by a life between London and Tokyo.<br></br>
                    She studied Marketing in Tokyo and Interior Design in London.

                </p>

                <div className="contactSection">
                    <p>Mail: aikaohno.work@gmail.com</p>
                    <p>Instagram: <a className="igLink" href="https://www.instagram.com/aikaohno/">@aikaohno</a></p>
                    <div className="placeholder"></div>
                </div>

            </div>
        </div>
    )
}

export default About;

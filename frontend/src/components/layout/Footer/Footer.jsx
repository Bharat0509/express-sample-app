import './footer.css'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="leftFooter">
                <h4>Download Our App</h4>
                <p>Download App for Android And IOS mobile Pnones.</p>
                <img className="playStore" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="" />
                <img src="appstore.png" alt="" />


            </div>
            <div className="midFooter">
                <h1>BharatEcom</h1>
                <p>High Quality is Out First Priority.</p>
                <p>Copyrights 2023 &copy: BharatEcom</p>
            </div>


            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="http://instagram.com/bharat001">Instagram</a>
                <a href="https://youtube.com">Youtube</a>
                <a href="http://facebook.com/bharat001">Facebook</a>
            </div>
        </footer>

    )
}

export default Footer
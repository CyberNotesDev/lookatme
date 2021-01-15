import './../css/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div>Contact</div>
            <div>Privacy</div>
            @CyberNotesDev - {new Date().getFullYear()}
        </div>
    );
}
  
export default Footer;
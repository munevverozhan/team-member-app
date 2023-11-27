const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <div className="footer">
                <h5>
                    team member allocation app - {today.getFullYear()}
                </h5>
            </div>
        </footer>
    );
}
export default Footer;
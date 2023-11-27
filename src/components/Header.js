import '../scss/style.css';
const Header = ({ selectedTeam, selectedTeamCount }) => {
    return (
        <div className='header'>
            <h1>team member allocation</h1>
            <h3> <span>{selectedTeam}</span> has {selectedTeamCount} member</h3>

        </div>
    );
}
export default Header;
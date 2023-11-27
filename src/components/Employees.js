import '../scss/style.css';
import femaleProfile from '../images/femaleProfile.jpg';
import maleProfile from '../images/maleProfile.jpg';

const Employees = ({ selectedTeam, employees, handleTeamSelectionChange, handleEmployeeCardClick }) => {

    return (
        <main>
            <div className='select-employee'>
                <select className='select-options' value={selectedTeam} onChange={handleTeamSelectionChange}>
                    <option value={'TeamA'}>TeamA</option>
                    <option value={'TeamB'}>TeamB</option>
                    <option value={'TeamC'}>TeamC</option>
                    <option value={'TeamD'}>TeamD</option>
                </select>
            </div>
            <div className='card-collection'>
                {
                    employees.map(employee =>
                        <div id={employee.id} className={(employee.teamName === selectedTeam) ? 'card standout' : 'card'} onClick={handleEmployeeCardClick} key={employee.id}>
                            {
                                (employee.gender === 'female')
                                    ? <img src={femaleProfile} className='card-img-top card-img' alt='female-img' />
                                    : <img src={maleProfile} className='card-img' alt='male-img' />
                            }
                            <div className=' card-body'>
                                <h5 className='card-title'><b>full name </b>: {employee.fullName} </h5>
                                <p className='card-info'> <b>Designation</b> : {employee.designation}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </main>
    );
}
export default Employees;
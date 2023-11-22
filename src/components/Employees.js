import React, { useEffect, useState } from 'react';
import '../scss/style.css';
import femaleProfile from '../images/femaleProfile.jpg';
import maleProfile from '../images/maleProfile.jpg';

const Employees = () => {
    const [selectedTeam, setSelectedTeam] = useState('TeamB');

    // let handleTeamSelectionChange = useEffect((event) => {
    //     setSelectedTeam(event.target.value);
    // }, [selectedTeam]);

    const handleTeamSelectionChange = (event) => {
        setSelectedTeam(event.target.value);
    }

    const [employees, setEmployees] = useState([
        {
            id: 1,
            fullName: 'Bob Jones',
            designation: 'JavaScript Developer',
            gender: 'male'
        },
        {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
        },
        {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC"
        },
        {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD"
        }]);

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
                    employees.map((employee) =>
                        <div id={employee.id} className='card'>
                            {(employee.gender === 'female')
                                ? <img src={femaleProfile} className='card-img-top' alt='female-img' />
                                : <img src={maleProfile} alt='male-img' />}
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
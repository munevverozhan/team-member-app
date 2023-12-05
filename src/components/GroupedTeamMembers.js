import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {

    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers);
    function groupTeamMembers() {
        var teams = [];
        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true }
        teams.push(teamA);

        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true }
        teams.push(teamB);

        let teamCMembers = employees.filter(employee => employee.teamName === 'TeamC');
        let teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true }
        teams.push(teamC);

        let teamDMembers = employees.filter(employee => employee.teamName === 'TeamD');
        let teamD = { team: 'TeamD', members: teamDMembers, collapsed: employees.teamName === 'TeamD' ? false : true }
        teams.push(teamD);
        return teams;
    }
    return (
        <main>
            <div className="groupedTeamMembers">
                {groupedEmployees.members}
                {/* {groupedEmployees?.map((groupedEmployee) => {
                    return (
                        <div key={groupedEmployee.team} className="card">
                            <h4 id={groupedEmployee.team} className="card-header">
                                Team name : {groupedEmployee.team}
                            </h4>
                            <div id={'collapse_' + groupedEmployee.team} className={groupedEmployee.collapsed === true ? 'collapsed' : ''}>
                                <hr />
                                {groupedEmployee.members.map(member => {
                                    return (
                                        <div className="members-header">
                                            <h5 className="members-title"> Full Name: {member.fullName}</h5>
                                            <p>Dsignation : {member.designation}</p>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                    )
                })} */}
            </div>
        </main>
    );
}
export default GroupedTeamMembers ;
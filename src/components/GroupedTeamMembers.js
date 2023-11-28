import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {

    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());
    function groupTeamMembers() {
        // const members = [teamName={selectedTeam} , teamMembers = {employees} , collapsed = employees ]
        var teams = [];
        var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true }
        teams.push(teamA);

        var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true }
        teams.push(teamB);

        var teamCMembers = employees.filter(employee => employee.teamName === 'TeamC');
        var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true }
        teams.push(teamC);

        var teamDMembers = employees.filter(employee => employee.teamName === 'TeamD');
var teamD = {}
    }
    return (
        <main>
            <div className="groupedTeamMembers">
            </div>
        </main>
    );
}
export default GroupedTeamMembers;
import React, {useEffect, useState} from 'react';
import EtudiantTable from "../component/EtudiantTable";
import userService from "../services/User.service";
function Etudiants() {
    const [allEtudiants,setAllEtudiants] = useState([]);
    useEffect(() => {
        userService.getAllUsers().then(res => {
            setAllEtudiants(res);
        })
    },[])

    return (
        <div>
            <EtudiantTable etudiants={allEtudiants}></EtudiantTable>
        </div>
    );
}

export default Etudiants;
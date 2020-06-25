import React, {useState, useEffect} from 'react'
import axiosWithAuth from './utils/axiosWithAuth';
import OwnerCard from './OwnerCard'




const OwnersList = props => {
    const [owners, setOwner] = useState([])
    useEffect(() => {
        axiosWithAuth()
            .get("business")
            .then(response => {
                setOwner(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error?", error);
            });
    }, []);

    return (

        <div className="items-list-wrapper">
            {owners.map(owner => {
                return <OwnerCard owner={owner} key={owner.id} />;
            })}
        </div>
    );
}

export default OwnersList

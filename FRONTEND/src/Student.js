import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, /*useNavigate  */ } from 'react-router-dom'


function Student() {
    const [currentState, setStudentsData] = useState([])
    // const navigate = useNavigate();

    const handleRefresh = () => {
        console.log('handling Refresh');
        window.location.reload()
        // navigate('/'); // Navigate to the homepage route
    };

    useEffect(() => {
        axios.get('http://localhost:8081/homepage')//The Trigger point
            .then(res => {
                console.log(res.data);
                /*res.data.forEach(element => {
                    console.log("Printing \nID, Name, Email");
                    console.log(element.ID, element.NAME, element.EMAIL);
                });*/
                if (Array.isArray(res.data)) {
                    setStudentsData(res.data);
                } else {
                    console.error('Data is not an array:', res.data);
                    setStudentsData([]);
                }
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-item-center p-200'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to='/create' className='btn btn-success'>ADD +</Link>
                <button className='btn btn-primary ms-2' onClick={handleRefresh}>Refresh</button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='text-start'>NAME</th>
                            <th className='text-start'>EMAIL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            currentState.map((data, i) => (
                                <tr key={data.ID} className='text-start'>
                                    <td >{data.NAME}</td>
                                    <td>{data.EMAIL}</td>
                                    <td className='text-center'>
                                        <Link to={`update/${data.ID}`} className='btn btn-primary '>UPDATE</Link>
                                        <button className='btn btn-danger ms-2'>DELETE</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student
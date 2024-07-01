import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Student() {
    const [currentState, setStudentsData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/')//The Trigger point
            .then(res => {
                console.log(res.data);
                /*res.data.forEach(element => {
                    console.log("Printing \nID, Name, Email");
                    console.log(element.ID, element.NAME, element.EMAIL);
                });*/
                setStudentsData(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-item-center p-200'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to='/create' className='btn btn-success'>ADD +</Link>
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
                                        <button className='btn btn-primary '>UPDATE</button>
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
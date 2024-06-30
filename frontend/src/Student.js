import React, { useEffect } from 'react'
import axios from 'axios'

function Student() {

    useEffect(() => {
        axios.get('http://localhost:8081/')//The Trigger point
            .then(res => {
                res.data.forEach(element => {
                    console.log(element.ID, element.Name, element.Email);
                });
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-item-center p-200'>
            <div className='w-50 bg-white rounded p-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>

                    <tbody>
                    </tbody>
                </table>
                <button className='btn btn-success'>ADD +</button>
            </div>
        </div>
    )
}

export default Student
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {id}= useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        console.log('UpdateStudent.js: handling Submit Event')
        console.log('UpdateStudent.js: Values to be updated are- name=' + name + ', email=' + email + ` with id=${id}`)
        event.preventDefault();
        axios.put(`http://localhost:8081/updateExistingStudent/${id}`, {name, email }) //call to the backend
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-item-center p-200'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>UPDATE STUDENT</h2>
                    <div className='mb-2 text-left ' >
                        <label htmlFor=''>NAME</label>
                        <input type='text' placeholder='ENTER NAME' className='form-control'
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>EMAIL</label>
                        <input type='text' placeholder='ENTER EMAIL' className='form-control'
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>UPDATE</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent
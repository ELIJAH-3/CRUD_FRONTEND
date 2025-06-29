import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const API_BASE = process.env.REACT_APP_API_URL;

function CreateStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        console.log('CreateStudent.js: handling Submit Event')
        console.log('CreateStudent.js: New values to be inserted are- name=' + name + ', email=' + email)
        event.preventDefault();
        axios.post(`${API_BASE}/createNewStudent`, { name, email })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-item-center p-200'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>ADD STUDENT</h2>
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
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateStudent
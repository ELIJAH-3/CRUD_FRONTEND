import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function Runsqlquery() {
    const [queryString, setQueryString] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        console.log('Runsqlquery.js: handling Submit Event')
        event.preventDefault();
        axios.post('http://localhost:8081/runsqlquery', { queryString })
            .then(res => {
                console.log("Runsqlquery.js: queryString-", queryString);
                console.log("Runsqlquery.js: Response of Post request ", res.data);
                navigate('/runsqlquery');
            }).catch(err => console.log(err));
    }
    function handleGoToHomepage() {
        navigate('/'); // Navigate to homepage
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-item-center p-200'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>WRITE SQL QUERY</h2>
                    <div className='mb-2 text-left'>
                        <textarea
                            id="queryString"
                            rows="5"  // Set the number of rows for initial height
                            placeholder='Write a SQL query here'
                            className='form-control'
                            onChange={e => setQueryString(e.target.value)}
                            style={{ resize: 'vertical', width: '100%', padding: '8px' }}  // Enable vertical resizing
                        />
                    </div>
                    <button className='btn btn-success m-3' >EXECUTE QUERY</button>
                    <button type='button' className='btn btn-success m-3' onClick={handleGoToHomepage} >GO TO HOMEPAGE</button>
                </form>
            </div>
        </div>
    )
}

export default Runsqlquery
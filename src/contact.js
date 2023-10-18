import React, { useState } from 'react'
import './contact.css'
const Contact = () => {
    const [user, setUser] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }
    )
    let name, value
    const data = (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})
    }
  return (
    <>
    <div className='contact_container'>
        <div className='contant'>
            <h2># contact us</h2>
            <div className='form'>
                <form method='POST'>
                    <input type='email' name='Email' va lue={user.Email} placeholder='Enter Your E-mail' autoComplete='off' onChange={data}></input>
                    <input type='text' name='Name' value={user.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}></input>
                     <input type='text' name='Subject' value={user.Subject} placeholder='Enter Your Subject' autoComplete='off' onChange={data}></input>
                    <textarea name='Message' value={user.Message} placeholder='Your Message' autoComplete='off' onChange={data}></textarea>
                    <button type='submit'>send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
import './app.css'

import twitter from './assets/twitter.svg'
import blue from './assets/blue.svg'
import google from './assets/google.svg'
import apple from './assets/apple.svg'
import no from './assets/no.svg'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)

  const [form, setForm] = useState({
    fullName: '',
    Number: '',
    email: '',
    Date: ''
  })
  function handlechange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault(),
      console.log(form);

  }



  
  const [form1, setForm1] = useState({
    Number: '',
    Password: ''

  })
  function handlechange1(e) {
    setForm1({
      ...form1,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit1(e) {
    e.preventDefault(),
      console.log(form1);

  }

  return (
    <div className='ota'>

      <div style={{
        backgroundImage: `url(${twitter})`
      }} className='bosh'>

      </div>
      <div className='form'>
        <img className='blue' src={blue} alt="" />
        <h1>Happening now</h1>
        <h2>Join Twitter today</h2>
        <img className='sign' src={google} alt="" />
        <img className='sign' src={apple} alt="" />
        <img
          onClick={() => {
            setShow(true)
            document.body.style.background = 'none'
          }}
          className='sign'
          src={no} alt="" />
        {
          show && (
            <form onSubmit={handleSubmit}>

              <div className='sign-up'>
                <img src={blue} alt="" />
                <h2>Create an account</h2>
                <input placeholder='Name'
                  value={form.fullName}
                  onChange={handlechange}
                  type="text"
                  name="fullName"
                />
                <input placeholder='Phone number' type="text"
                  value={form.Number}
                onChange={handlechange}
                name="Number"
                />
                <input placeholder='email' type="text"
                 value={form.email}
                onChange={handlechange}
                name="email"
                />
                <input placeholder='Date of birth' type="text"
                value={form.Date}
                
                onChange={handlechange}
                name="Date"
                />
                <button type='submit' className='next'>Next</button>
              </div>
            </form>
          )
        }

        <p>By singing up you agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>, including <a href="">Cookie Use</a>.</p>
        <p>Already have an account? <a onClick={() => {
          setShow1(true)
        }} >Log in</a></p>
{

        show1 && (
          <form onSubmit={handleSubmit1} className='login'>
            <img className='blue' src={blue} alt="" />
<h2>Log in to Twitter</h2>
<input placeholder='Phone number, email address' type="text" 
value={form1.Number}
                  onChange={handlechange1}
                  
                  name="Number"
/>
<input placeholder='Password' type="text" 

value={form1.Password}
                  onChange={handlechange1}
                  
                  name="Password"/>
<button className='next' type='submit'>log in</button>
          </form>
        )
}
      </div>
    </div>
  )
}
export default App
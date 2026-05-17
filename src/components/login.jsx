import { useState } from 'react'

// import twitter from '../assets/twitter.svg'

function Login() {

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
    e.preventDefault()

    console.log(form1)
  }

  return (
    <div style={{ display: 'flex' }}>

      {/* <div
        style={{
          backgroundImage: `url(${twitter})`
        }}
        className='bosh'
      ></div> */}

      <form onSubmit={handleSubmit1} className='login'>

        <h2>Log in to Twitter</h2>

        <input
          placeholder='Phone number, email address'
          type="text"
          value={form1.Number}
          onChange={handlechange1}
          name="Number"
        />

        <input
          placeholder='Password'
          type="password"
          value={form1.Password}
          onChange={handlechange1}
          name="Password"
        />

        <button className='next' type='submit'>
          Log in
        </button>

      </form>

    </div>
  )
}

export default Login
import { useState } from 'react'

// import twitter from '../assets/twitter.svg'

function SignUp() {

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
    e.preventDefault()

    console.log(form)
  }

  return (
    <div style={{ display: 'flex' }}>

      {/* <div
        style={{
          backgroundImage: `url(${twitter})`
        }}
        className='bosh'
      ></div> */}

      <form onSubmit={handleSubmit}>

        <div className='sign-up'>

          <h2>Create an account</h2>

          <input
            placeholder='Name'
            value={form.fullName}
            onChange={handlechange}
            type="text"
            name="fullName"
          />

          <input
            placeholder='Phone number'
            type="text"
            value={form.Number}
            onChange={handlechange}
            name="Number"
          />

          <input
            placeholder='email'
            type="text"
            value={form.email}
            onChange={handlechange}
            name="email"
          />

          <input
            placeholder='Date of birth'
            type="text"
            value={form.Date}
            onChange={handlechange}
            name="Date"
          />

          <button type='submit' className='next'>
            Next
          </button>

        </div>

      </form>

    </div>
  )
}

export default SignUp
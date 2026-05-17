import { Link } from 'react-router-dom'

import twitter from '../assets/twitter.svg'
import google from '../assets/google.svg'
import apple from '../assets/apple.svg'
import no from '../assets/no.svg'
import '../App.css'

function Layout() {
  return (
    <div className='ota' style={{ display: 'flex' }}>
      <div
        style={{
          backgroundImage: `url(${twitter})`,
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center',
          backgroundSize:'cover',
            width:' 1121px',
        height: '1028px'
        }}
        className='bosh'
      >


      <div className='form'>

        <h1>Happening now</h1>

        <h2>Join Twitter today</h2>
<div className='qwerty'>

        <img className='sign' src={google} alt="" />

        <img className='sign' src={apple} alt="" />

        <Link to='/sign-up'>
          <img className='sign' src={no} alt="" />
        </Link>
</div>

        <p>
          By signing up you agree to the Terms of Service
        </p>

        <Link to='/login'>
          <p>Already have an account? Log in</p>
        </Link>

      </div>
</div>
    </div>
  )
}

export default Layout
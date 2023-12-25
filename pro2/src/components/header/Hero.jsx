import { Fragment } from 'react'
import  './Hero.css'
import call from '../../assets/call.svg'
const Hero = () => {
  return (
    <Fragment>
        <div className='hero'>
          <div className="container">
            <div className='hero__inbox'>
                  <div className='hero__inbox__child'>
                    <h1>Quality cleaning <br /> for your home</h1>
                    <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                    <div className='hero__btn'>
                      <button>Get a free quote</button>
                      <img src={call} alt="img" />
                      <div className='hero__call'>
                        <h3>Call us now</h3>
                        <p>(414) 567 - 2109</p>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Hero

import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import { LocationIcon, CalendarIcon } from '../components/Icons'

export default function Header() {
  return (
    <header>
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@SustainOSS" />
        <title>Sustain Web3 : 2/13/20 in Denver :: Checkout our LineUp</title>
        <meta
          name="twitter:title"
          content="Sustain Web3 : 2/13/20 in Denver :: Checkout our LineUp"
        />
        <meta
          name="twitter:description"
          content="we are the architects, builders, designers, researchers building the Open Source web3. we believe that blockchain is a new hope for OSS Sustainability. we are working to build a world"
        />

        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dvargvav9/image/upload/v1575999063/SW3_sngkyk.png"
        />

        <meta property="og:url" content="https://web3.sustainoss.org" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sustain Web3 : 2/13/20 in Denver :: Checkout our LineUp"
        />
        <meta
          property="og:description"
          content="we are the architects, builders, designers, researchers building the Open Source web3. we believe that blockchain is a new hope for OSS Sustainability. we are working to build a world"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dvargvav9/image/upload/v1575999063/SW3_sngkyk.png"
        />

        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/yeti/bootstrap.min.css"
        />
      </Head>
      <div
        style={{ margin: 'auto', width: '100%' }}
        className="row justify-content-center"
      >
        <div className="col-12">
          <Nav />
        </div>
      </div>
      <div
        style={{
          margin: 'auto',
          width: '65%',
          position: 'relative',
          right: '15px'
        }}
        className="row"
      >
        <div className="col mt-4">
          <Logo logoUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575999063/SW3_sngkyk.svg" />
        </div>
      </div>

      <div className="container">
        <div className="row text-center event-info">
          <div className="col-xs-12 col-sm-12 col-md-6 mt-3">
            <h6>📍 Denver, Colorado</h6>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 mt-3">
            <h6>📆 February 13th, 2020</h6>
            <span>(at the same venue as <a href="https://www.ethdenver.com/">ETHDenver</a>)</span>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="row col justify-content-center">
        <a className="subscribe button" href="https://gitcoin.typeform.com/to/TlO4BH" target="_blank" rel="noopener noreferrer">Sign up to attend!</a>
      </div>
      <br/>
      <br/>
      <div className="row col justify-content-center">
        <a className="livestream" href="/livestream" target="_blank" rel="noopener noreferrer">Can't attend? Watch the livestream! ✨</a>
      </div>
    </header>
  )
}

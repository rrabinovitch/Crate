// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H1, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { white } from '../../ui/common/colors'
import { textLevel1 } from '../../ui/common/shadows'

// App Imports
import { APP_URL } from '../../setup/config/env'
import crateRoutes from '../../setup/routes/crate'
import userRoutes from '../../setup/routes/user'
import Onboarding from './Onboarding'

// Component
const Home = (props) => (
  <div>
    {/* Home */}
    <Grid alignCenter={true} style={{
      backgroundImage: `url('${ APP_URL }/images/cover.jpg')`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      height: 'calc(100vh - 5em)',
      textAlign: 'center',
      color: white
    }}>
      {/* SEO */}
      <Helmet>
        <title>Monthly supply of clothes and accessories for Men and Women - Crate</title>
      </Helmet>

      {/* Content */}
      <GridCell> {/* main content of screen/page on load */}
        <H1 font="secondary" style={{ textShadow: textLevel1 }}>Crate</H1>

        <H4 style={{ textShadow: textLevel1, marginTop: '0.5em' }}>
          Your monthly subscription of trendy clothes and accessories
        </H4>

        {/* Call to action */}
        { // button below content in h4 -
          props.user.isAuthenticated // if user is isAuthenticated,
            // if true, show this;
            ? <Link to={crateRoutes.list.path}> {/*clicking on button pulls up all routes for crate */}
                <Button theme="secondary" style={{ marginTop: '1em' }}>Get Subscription</Button>
              </Link>
              // if false, show this
            : <Link to={userRoutes.signup.path}> {/*this pulls up all routes for users/new users */}
                <Button theme="secondary" style={{ marginTop: '1em' }}>Get Started</Button>
              </Link>
        }
      </GridCell>
    </Grid>

    {/* Onboarding */}
    <Onboarding /> {/* imports onboarding component; modal window is not currently being displayed on load*/}
  </div>
)

// Component Properties
Home.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
function homeState(state) {
  return {
    user: state.user
  }
}

export default connect(homeState, {})(Home)

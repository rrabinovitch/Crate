// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import { getList as getCratesList } from './api/actions'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import CrateItem from './Item'

// Component
// Component = an individual crate object
class List extends PureComponent {

  // Runs on server only for SSR
  // Fetches crate information from server
  static fetchData({ store }) {
    return store.dispatch(getCratesList('ASC'))
  }

  // Runs on client only
  // This method lists all available crates that a user see's (mem's, womens, etc)
  // This is where we have to interject to change the route to the style survery route
  // Currently it just goes to a users dashboard upon subscribing
  componentDidMount() {
    this.props.getCratesList('ASC')
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Crates for everyone! - Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Crates for everyone!</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>You can choose crate which suits your need. You can also
              subscribe to multiple crates.</p>
          </GridCell>
        </Grid>

        {/* Crate list */}
        <Grid>
          <GridCell>
            {
              this.props.crates.isLoading
                ? <Loading/>
                : this.props.crates.list.length > 0
                    ? this.props.crates.list.map(crate => (
                      <div key={crate.id} style={{ margin: '2em', float: 'left' }}>
                        <CrateItem crate={crate}/>
                      </div>
                    ))
                    : <EmptyMessage message="No crates to show" />
            }
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
// Require property for the object
List.propTypes = {
  crates: PropTypes.object.isRequired,
  getCratesList: PropTypes.func.isRequired
}

// Component State
// State is the current crate object
function listState(state) {
  return {
    crates: state.crates
  }
}

export default connect(listState, { getCratesList })(List)

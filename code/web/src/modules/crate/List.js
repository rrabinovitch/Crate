// Imports
import React, { PureComponent } from 'react'
// PureComponent implements shouldComponentUpdate() which is a shallow comparison between props & state;
//gives a performance boost if component renders the same result given the same props & state
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet' // manages changes to document head; a component

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
// displays components for signed in user to select crate/s
class List extends PureComponent {

  // Runs on server only for SSR
  static fetchData({ store }) {
    // below equivalent to mapDispatchToProps
    return store.dispatch(getCratesList('ASC'))
  }

  // Runs on client only
  // below equivalent to mapDispatchToProps
  // on load, gets all crates; what is 'ASC'?
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
            { /* if isLoading is true, (changed as soon as fetch request happens on load, passed in as an argument)*/
              this.props.crates.isLoading
                ? <Loading/> /* displays loading screen while fetch completes*/
                : this.props.crates.list.length > 0 /* if crates retrieved is greater than 0*/
                    ? this.props.crates.list.map(crate => (
                      <div key={crate.id} style={{ margin: '2em', float: 'left' }}>
                        <CrateItem crate={crate}/>
                      </div> /* above code iterates over all retrieved crates and then calls a new component to display each crate*/
                    ))
                    : <EmptyMessage message="No crates to show" /> /* if there are no crates, calls component to display message*/
            }
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  crates: PropTypes.object.isRequired,
  getCratesList: PropTypes.func.isRequired
}

// Component State
// equivalent to mapStatetoProps
function listState(state) {
  return {
    crates: state.crates
  }
}

export default connect(listState, { getCratesList })(List)

import React, { PureComponent } from 'react'
import { GridCell, Grid } from '../../ui/grid'
import Card from '../../ui/card/Card'
import {white, grey2, black} from '../../ui/common/colors'
import { routeImage, routes } from '../../setup/routes'
import { APP_URL } from '../../setup/config/env'
import { H1, H2, H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'

class Survey extends PureComponent {

  render() {
    return (
      <div>
        <Grid>
          <GridCell style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <H1 style={{padding:'.5em'}}>Style Survey</H1>
            <p style={{fontSize: '20px'}}>Let us know what your style is!</p>
          </GridCell>
        </Grid>
        <Grid>
          <GridCell style={{display: 'flex', justifyContent: 'center'}}>
              <H2 style={{padding:'.5em'}}>Tops</H2>
          </GridCell>
        </Grid>
          <Grid onClick={(event)=> event.target.style.outlineStyle = 'solid'}>
            <GridCell style={{display: 'flex', justifyContent:'space-between'}}>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em' }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
          </Grid>
        <Grid>
          <GridCell style={{display: 'flex', justifyContent: 'center'}}>
              <H2>Bottoms</H2>
          </GridCell>
        </Grid>
          <Grid>
            <GridCell style={{display: 'flex', justifyContent:'space-between'}}>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em' }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
          </Grid>
        <Grid>
          <GridCell style={{display: 'flex', justifyContent: 'center'}}>
              <H2>Shoes</H2>
          </GridCell>
        </Grid>
          <Grid>
            <GridCell style={{display: 'flex', justifyContent:'space-between'}}>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em' }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
          </Grid>
        <Grid>
          <GridCell style={{display: 'flex', justifyContent: 'center'}}>
              <H2>Accessories</H2>
          </GridCell>
        </Grid>
          <Grid>
            <GridCell style={{display: 'flex', justifyContent:'space-between'}}>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em' }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
            <GridCell>
              <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em'  }}>
                <img src={`${APP_URL}/images/stock/men/1.jpg`}  style={{ width: '100%' }}/>
              </Card>
            </GridCell>
          </Grid>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button type="submit" theme="secondary" disabled={false}>Submit Survey</Button>
          </div>
      </div>
    )
  }
}

export default Survey;
import React, { PureComponent } from 'react'
import { GridCell, Grid } from '../../ui/grid'
import Card from '../../ui/card/Card'
import {white, grey2, black} from '../../ui/common/colors'
import { routeImage, routes } from '../../setup/routes'
import { APP_URL } from '../../setup/config/env'
import { H1, H2, H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
//import topArray from '../../public/surveyImages/index.js'

class Survey extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      tops: null,
      bottoms: null,
      shoes: null,
      accessories: null,
    }
  }

  selectTopStyle = (event) => {
    console.log(event.target)
    this.setState({ tops: event.target.value});
    return event.target.style.outlineStyle = 'solid'
  }
  // create an array w/image links - in the public folder w/images? like an index file?
  // iterate over and call card component to create; use index + 1 for value - make sure image links are in the correct order

  render() {
    const image1 = `${APP_URL}/images/stock/men/1.jpg`;
    const image2 = `${APP_URL}/images/stock/men/2.jpg`;
    const image3 = `${APP_URL}/images/stock/men/3.jpg`;
    const scary = `${APP_URL}/surveyImages/scary/scaryTop.jpg`;
    const topArray = [scary, image2, image3, image1, image2];

    const topsRow = topArray.map((image, index) => {
        return(
          <GridCell style={{display: 'flex', justifyContent:'space-between'}}>
            <Card style={{ width: '15em', margin: '2.5em auto', backgroundColor: white, padding:'1em' }}>
              <img src={image}  style={{ width: '100%' }} key={index}/>
            </Card>
          </GridCell>
        )
      }
    )

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
        <Grid onClick={(event)=> this.selectTopStyle(event)}>
          {topsRow}
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

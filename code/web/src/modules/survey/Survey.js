import React, { PureComponent } from 'react'
import { GridCell, Grid } from '../../ui/grid'
import Card from '../../ui/card/Card'
import {white, grey2, black} from '../../ui/common/colors'
import { routeImage, routes } from '../../setup/routes'
import { APP_URL } from '../../setup/config/env'
import { H1, H2, H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { topArray, bottomArray, shoesArray, accessoriesArray } from '../../../public/surveyImages/index.js'

class Survey extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      tops: null,
      bottoms: null,
      shoes: null,
      accessories: null,
      topsRow: [],
      bottomsRow: [],
      shoesRow: [],
      accessoriesRow: []
    }
  }

  componentDidMount() {
    const items = [topArray, bottomArray, shoesArray, accessoriesArray]
    items.forEach((itemArray, index) => {
      switch (index) {
        case 0:
          this.createRow(itemArray, "topsRow", "tops");
          break;
        case 1:
          this.createRow(itemArray, "bottomsRow", "bottoms");
          break;
        case 2:
          this.createRow(itemArray, "shoesRow", "shoes");
          break;
        case 3:
          this.createRow(itemArray, "accessoriesRow", "accessories");
          break;
        default:
          break;
      }
    });
  }

  createRow(itemArray, rowType, rowClass) {
    const newRow = itemArray.map((image, index) => {
        return(
          <GridCell style={{display: 'flex', justifyContent:'space-between'}}>
            <Card style={{ width: '15em', margin : '2.5em auto', backgroundColor: white, padding:'1em' }} key={index + 1}>
              <img src={`${APP_URL}${image}`}  style={{ width: '100%' }} data-value={index+1} className={rowClass}/>
            </Card>
          </GridCell>
        )
      }
    )
    this.setState({ [rowType]: newRow})
  }

  selectStyle = (event) => {
    const styleType = event.target.className;
    this.setState({ [styleType]: event.target.dataset.value});
    // need to find a way to remove an outline when a user clicks away from a choice ;'
    '
    return event.target.style.outlineStyle = 'solid'
  }

  render() {
    const { topsRow, bottomsRow, shoesRow, accessoriesRow } = this.state;
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
        <Grid onClick={(event)=> this.selectStyle(event)}>
          {topsRow}
        </Grid>
        <Grid>
          <GridCell style={{display: 'flex', justifyContent: 'center'}}>
              <H2>Bottoms</H2>
          </GridCell>
        </Grid>
        <Grid className='bottoms' onClick={(event)=> this.selectStyle(event)}>
          {bottomsRow}
        </Grid>
        <Grid>
          <GridCell style={{display: 'flex', justifyContent: 'center'}}>
              <H2>Shoes</H2>
          </GridCell>
        </Grid>
        <Grid className='shoes' onClick={(event)=> this.selectStyle(event)}>
          {shoesRow}
        </Grid>
        <Grid>
          <GridCell style={{display: 'flex', justifyContent: 'center'}}>
              <H2>Accessories</H2>
          </GridCell>
        </Grid>
          <Grid className='accessories' onClick={(event)=> this.selectStyle(event)}>
            {accessoriesRow}
          </Grid>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button type="submit" theme="secondary" disabled={false}>Submit Survey</Button>
          </div>
      </div>
    )
  }
}

export default Survey;
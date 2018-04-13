import React, { Component } from 'react';
import { Header, Card, Segment, Container, Dropdown } from 'semantic-ui-react';
import axios from 'axios';

const cityOptions = [
  { text: "Towns", value: 'town'},
  { text: "Castles", value: 'castle'},
  { text: "Ruins", value: 'ruin'},
  { text: "Other", value: 'other'}
]

class Home extends Component {
  state = {
    cities: [],
    cityType: [],
    characters: [],
    filteredChars: [],
    charShowing: 0,
  }

  componentDidMount() {
    axios.get('https://api.got.show/api/cities')
      .then( res => {
        this.setState({ cities: res.data })
      })
    axios.get('https://api.got.show/api/characters/locations')
      .then( res => {
        this.setState({ characters: res.data })
      })
  }

  displayChoice = (value) => {
    let cityType = this.state.cities.filter( c => c.type === value)
    this.setState({ cityType })
  }

  showCharacters = (town, id) => {
    let filteredChars = this.state.characters.filter( c => c.locations.includes(town))
    this.setState({ filteredChars, charShowing: id })
  }

  render() {
    let { cityType = [], filteredChars, charShowing } = this.state;
    return (
      <Container>
        <Header as='h1' textAlign='center'>WELCOME, EXPLORE GOT BY LOCATION TYPES</Header>
        <Dropdown
          placeholder='Select city type'
          fluid
          selection
          options={cityOptions}
          onChange={(e, d) => this.displayChoice(d.value)}
        />
        <Segment>
          { cityType.map( (c, i) =>
            <Segment key={i} onClick={() => this.showCharacters(c.name, i)}>
              <Header as='h4' textAlign='center'>{c.name}</Header>
              { charShowing === i && filteredChars.length > 0 ?
                <Segment>
                  {filteredChars.map( c => <p>{c.name}</p>)}
                </Segment>
                :
                null
              }
            </Segment>
          )}
        </Segment>
      </Container>
    );
  }
}

export default Home;

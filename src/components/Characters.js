import React from 'react'
import { Header, Card, Segment, Container, Dropdown, Image } from 'semantic-ui-react';
import axios from 'axios'

const url = 'https://api.got.show/'

class Characters extends React.Component {
  state = {
    characters: [],
    filteredChars: [],
  }

  componentDidMount() {
    axios.get('https://api.got.show/api/characters')
      .then( res => {
        let pics = res.data.filter( c => c.hasOwnProperty("imageLink"))
        this.setState({ characters: pics })
      })
  }

  render() {
    return(
      <Container>
        <Header as='h1' textAlign='center'>Characters</Header>
        <Card.Group>
          { this.state.characters.map( c => (
            <Card>
              <Image src={url + c.imageLink} size="small" />
              <Card.Header>
                {c.name}
              </Card.Header>
            </Card>
          ))}
        </Card.Group>
      </Container>
    )
  }
}

export default Characters;

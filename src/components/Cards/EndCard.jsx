import React, { Component  } from 'react'
import styled from 'styled-components'

const EndCardStyle = styled.div`

    display: flex;
    height: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
`


export default class EndCard extends Component {
    render() {
      return(
        <EndCardStyle>
          <div>
            <h1>No more locations at the moments!</h1>
          </div>
          </EndCardStyle>
      );
    }
}


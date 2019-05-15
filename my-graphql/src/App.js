import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const TEST_QUERY = gql`
  {
    user(id: 1) {
      id name superpowers { id text }
    }
  }
`

const App = () => (
  <Query query={TEST_QUERY}>
    {({data: { user }, loading }) => {
      if (loading || !user) {
        return <div>Loading ...</div>
      }
      return (
        <div>
          {user.name} ({user.id}) has the following superpowers:
          <ul>
            {user.superpowers.map(superpower => (
              <li key={superpower.id}>
                {superpower.text}
              </li>
            ))}
          </ul>
        </div>
      )
    }}
  </Query>
)

export default App

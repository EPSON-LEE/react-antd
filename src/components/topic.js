import React from 'react'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId + '11'}</h3>
  </div>
)

export default Topic
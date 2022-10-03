import React from 'react'
import { Row, Spinner } from 'reactstrap'

function MySpinner() {
  return (
		<Row className='mySpin'>
			<Spinner color='primary' type='grow' />
		</Row>
	)
}

export default MySpinner
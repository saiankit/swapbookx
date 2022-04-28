import React from 'react'

import DeleteRequest from '../reqDelete'

const RequestsCardBorrower = ({ requestID }) => {
  return (
    <div className="mx-auto flex justify-center items-center w-full py-2">
      <DeleteRequest requestID={requestID} />
    </div>
  )
}

export default RequestsCardBorrower

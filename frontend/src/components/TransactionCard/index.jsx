import React from 'react'

const TransactionCard = ({
  title,
  author,
  imageSrc,
  isLender,
  requestID,
  lenderID,
  lenderName,
  borrowerID,
  borrowerName,
  collectionDate,
  returnDate,
}) => {
  return (
    <div className="w-full flex flex-col items-center bg-white rounded-lg shadow-xl h-full">
      <div className="w-full p-6 space-y-4">
        <div className="flex justify-between items-center  w-full">
          <div className="p-2 flex flex-col items-start  flex-1">
            <h5 className=" w-full  text-xl font-semibold tracking-tight text-gray-900">
              {title}
            </h5>
            <h5 className="w-full text-md font-bold tracking-tight text-gray-500">
              {author}
            </h5>
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-between">
                <h5 className="w-full text-md font-bold tracking-tight text-gray-500">
                  {lenderID}
                </h5>

                <h5 className=" w-full  text-lg font-semibold tracking-tight text-gray-900">
                  {lenderName}
                </h5>
              </div>
              <span className="text-gray-500">to</span>
              <div className="flex flex-col justify-between">
                <h5 className="w-full text-md font-bold tracking-tight text-gray-500">
                  {borrowerID}
                </h5>
                <h5 className=" w-full  text-xl font-semibold tracking-tight text-gray-900">
                  {borrowerName}
                </h5>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <h5 className=" w-full  text-lg font-semibold tracking-tight text-gray-900">
                {collectionDate}
              </h5>
              <span className="w-full text-gray-500">to</span>
              <h5 className=" w-full  text-lg font-semibold tracking-tight text-gray-900">
                {returnDate}
              </h5>
            </div>
          </div>
          <div className="flex-none flex items-end justify-end">
            <img
              alt="Book Image"
              className="rounded-lg shadow-xl object-contain h-60"
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionCard

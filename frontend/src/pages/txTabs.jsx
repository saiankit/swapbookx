import React from 'react'

import LenderTx from './lendertx'
import BorrowerTx from './borrowertx'
const TxTabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1)

  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <div className="px-72 w-screen">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-yellow' + '-600'
                    : 'text-yellow' + '-600 bg-white')
                }
                data-toggle="tab"
                href="#link1"
                role="tablist"
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
              >
                LENDER
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-yellow-600'
                    : 'text-yellow-600' + ' bg-white')
                }
                data-toggle="tab"
                href="#link2"
                role="tablist"
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
              >
                BORROWER
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full max-w-2xl mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <LenderTx />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <BorrowerTx />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function TxTabsRender() {
  return (
    <>
      <TxTabs />;
    </>
  )
}

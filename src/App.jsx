import './App.css'
import React from 'react'

// import LenderDashboard from './pages/lender.jsx';
import { Routes, Route } from 'react-router-dom'

import LenderDashboard from './pages/lender'
import BorrowerDashboard from './pages/borrower'
import RequestsDashboard from './pages/requests'
import TransactionsDashboard from './pages/transactions'
import HomeScreen from './pages/home'
import Sidebar from './components/sidebar.jsx'
import AddBook from './pages/addBook'
import ConfirmBook from './pages/confirmBook'
export default function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route exact element={<HomeScreen />} path="/" />
          <Route element={<LenderDashboard />} path="/lender" />
          <Route element={<BorrowerDashboard />} path="/borrower" />
          <Route element={<RequestsDashboard />} path="/requests" />
          <Route element={<AddBook />} path="/lender/addBook" />
          <Route element={<ConfirmBook />} path="/lender/confirmBook" />
          <Route element={<TransactionsDashboard />} path="/transactions" />
        </Routes>
      </div>
    </>
  )
}

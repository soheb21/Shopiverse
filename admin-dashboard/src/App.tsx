
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { lazy,Suspense } from "react"
import Loader from "./components/Loader";

const Dashboard =lazy(()=>import("./pages/Dashboard"));
const Customers =lazy(()=>import("./pages/Customers"));
const Products =lazy(()=>import("./pages/Products"));
const Transaction =lazy(()=>import("./pages/Transaction"));

function App() {

  return (
  <>
  <Router>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard/>} />
      <Route path="/admin/customers" element={<Customers/>} />
      <Route path="/admin/products" element={<Products/>} />
      <Route path="/admin/transaction" element={<Transaction/>} />
    </Routes>
    </Suspense>
  </Router>
  </>
  )
}

export default App

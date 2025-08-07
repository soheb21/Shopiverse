
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { lazy,Suspense } from "react"
import Loader from "./components/Loader";
const Dashboard =lazy(()=>import("./pages/Dashboard"));
const Customers =lazy(()=>import("./pages/Customers"));
const Products =lazy(()=>import("./pages/Products"));
const Transaction =lazy(()=>import("./pages/Transaction"));
const NewProducts =lazy(()=>import("./pages/management/NewProducts"));
const TransactionManagement =lazy(()=>import("./pages/management/TransactionManagement"));
const ProductManagement =lazy(()=>import("./pages/management/ProductManagement"));
const BarCharts =lazy(()=>import("./charts/BarCharts"));
const PieCharts =lazy(()=>import("./charts/PieCharts"));
const LineCharts =lazy(()=>import("./charts/LineCharts"));
const Stopwatch =lazy(()=>import("./apps/Stopwatch"));
const Coupon =lazy(()=>import("./apps/Coupon"));
const TossCoin =lazy(()=>import("./apps/TossCoin"));

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

      {/* chart route */}
      <Route path="/admin/chart/bar" element={<BarCharts/>} />
      <Route path="/admin/chart/pie" element={<PieCharts/>} />
      <Route path="/admin/chart/line" element={<LineCharts/>} />
      

      {/* management routes */}
      <Route path="/admin/product/new" element={<NewProducts/>} />
      <Route path="/admin/product/:id" element={<ProductManagement/>} />
      <Route path="/admin/transaction/:id" element={<TransactionManagement/>} />

      {/* Apps Routes */}
        <Route path="/admin/app/stopwatch" element={<Stopwatch/>}/>
        <Route path="/admin/app/coupon" element={<Coupon/>}/>
        <Route path="/admin/app/toss" element={<TossCoin/>}/>
    </Routes>
    </Suspense>
  </Router>
  </>
  )
}

export default App

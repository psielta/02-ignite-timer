import { Route, Routes } from 'react-router-dom'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>

      {
        /* 
        <Route path="/admin" element={<AdminLayout />}>
                <Route path="/" element={<Clients />} />
                <Route path="/users" element={<Forns />} />
                <Route path="/users" element={<Products />} />
        </Route> */
        // http://localhost:3000/admin/products
      }
    </Routes>
  )
}

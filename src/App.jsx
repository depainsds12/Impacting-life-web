import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Individuals from './pages/Individuals'
import Business from './pages/Business'
import Government from './pages/Government'
import Publishing from './pages/Publishing'
import Courses from './pages/Courses'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/business" element={<Business />} />
        <Route path="/government" element={<Government />} />
        <Route path="/publishing" element={<Publishing />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Layout>
  )
}

export default App

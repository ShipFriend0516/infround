import HomePage from './Pages/HomePage'
import MapPage from './Pages/MapPage'
const routes = [
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/map',
    element: <MapPage/>
  }
]

export default routes
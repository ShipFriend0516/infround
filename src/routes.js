import Cover from './Components/Cover'
import Map from './Components/Map'
import HomePage from './Pages/HomePage'

const routes = [
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/map',
    element: <Map/>
  }
]

export default routes
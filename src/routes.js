import HomePage from './Pages/HomePage'
import MapPage from './Pages/MapPage'
import SettingPage from './Pages/SettingPage'
import ErrorPage from './Pages/ErrorPage'

const routes = [
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/map',
    element: <MapPage/>
  },
  {
    path: '/setting',
    element: <SettingPage/>
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
]

export default routes
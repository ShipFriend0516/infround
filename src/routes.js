import HomePage from './Pages/HomePage'
import MapPage from './Pages/MapPage'
import SettingPage from './Pages/SettingPage'

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
    path: '/map/setting',
    element: <SettingPage/>
  }
]

export default routes
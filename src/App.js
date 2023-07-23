import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
  NavLink,
  useParams,
  useLocation,
  useResolvedPath
} from "react-router-dom";
import Product from './Products';
import ProductDetail from './Products/Details/detail';
import ProductItem from './Products/ProductItem';
import { DockLayout } from 'rc-dock'
import { BottomPanelData, getLayout } from './dock-conf'
import "rc-dock/dist/rc-dock.css";
import React, { useEffect, useRef } from 'react';

export const Container = () => {
  const location = useLocation();
  const dockRef = useRef()
  debugger
  const getMainRoute = () => {
    const routeeee = <Routes>
      {routess.map(route => route.RouteContent)}
    </Routes>

    const _getLayout = getLayout(routeeee);
    return _getLayout;
  }

  useEffect(() => {

    if(location.pathname.includes('target')){
      const minPanelData = dockRef.current.find('main-panel');
      dockRef.current.dockMove(BottomPanelData, minPanelData, 'bottom')
    } else {
      const minPanelData = dockRef.current.find('main-panel');
      const bottomData = dockRef.current.find('bottom-panel');
      if(bottomData){
        dockRef.current.dockMove(bottomData, minPanelData, 'remove')

            }
    }



  }, [location.pathname])



  return (
    <DockLayout ref={dockRef} defaultLayout={getMainRoute()} style={{ position: 'absolute', left: 10, top: 50, right: 10, bottom: 10 }} />
  );
};
const routess = [{
  'section': 'project',
  RouteContent: <Route path="/target" element={<Product />} >
    <Route
      path="detail"
      element={<ProductDetail />}
    />
    <Route path=":id" element={<ProductItem />} />
  </Route>,
  tabs:['bottom']
},
{
  'section': 'case',
  RouteContent: <Route path="/cases" element={<Product />} >
    <Route
      path="detail"
      element={<ProductDetail />}
    />
    <Route path=":id" element={<ProductItem />} />
  </Route>,
    tabs:['right']

},
{
  section: 'target',
  RouteContent: <Route path="/product" element={<Product />} >
    <Route
      path="detail"
      element={<ProductDetail />}
    />
    <Route path=":id" element={<ProductItem />} />
  </Route>,
  tabs:['bottom','right']
}
]

function App() {



  return (
    // <RouterProvider router={router} />
    <BrowserRouter basename="/">

      <nav>
        <NavLink
          to="/target"
        >
          Product Home
        </NavLink>
        <NavLink
          to="/cases"
        >
          Product Detail
        </NavLink>
        <NavLink
          to="/product"
        >
          Product Item
        </NavLink>
      </nav>


      <Container />



    </BrowserRouter>
  );
}

export default App;





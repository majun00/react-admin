import React from 'react'
import { Route } from 'react-router-dom'

export const RenderRoutes = ({ routes }) => {
  return routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
}

export const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      component={route.component}
      // render={props => {
      //   return <route.component {...props} routes={route.routes} />
      // }}
    />
  )
}

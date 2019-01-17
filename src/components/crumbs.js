import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { crumbsMap } from '@/reducer/connect'
import { Breadcrumb } from 'antd'
import { filterData } from '@/utils/index'

// 平铺多维数组
const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

let breadcrumbNameMap = []

class Crumbs extends Component {
  componentDidMount() {
    console.log('componentDidMount')
    //页面渲染完毕后调用
    this.onTrun()
  }

  onTrun() {}

  render() {
    let { location, getRouterConfig, routerConfig } = this.props
    // console.log('routerConfig1', routerConfig)

    routerConfig = filterData(routerConfig, 'routerConfig')
    // console.log('routerConfig2', routerConfig)
    // 这里需要将数据过滤一层， 因为reducer的名称 我都是按照下面变量来取的， 因此判断他们是否有下一层变量， 如果有，则拿下一层的， 如果没有， 则拿第一层的。

    this.onTrun = getRouterConfig
    // 在页面刷新时不可调用， 需要页面渲染完毕时调用

    routerConfig =
      (typeof routerConfig === 'object' && Object.values(routerConfig)) || []
    // console.log('routerConfig3', routerConfig)

    breadcrumbNameMap =
      (Array.isArray(routerConfig) && deepFlatten(routerConfig)) || []
    // console.log('breadcrumbNameMap', breadcrumbNameMap)

    var newBreadcrumbNameMap = breadcrumbNameMap.filter((item, i) => {
      if (item.path === location.pathname) {
        return item
      }
    })
    // console.log('newBreadcrumbNameMap', newBreadcrumbNameMap)

    return (
      <div className="my-breadcrumb">
        <Breadcrumb>{getBreadCurmbs(newBreadcrumbNameMap)}</Breadcrumb>
      </div>
    )
  }
}

const getBreadCurmbs = (newBreadcrumbNameMap, arr = []) => {
  return (arr = newBreadcrumbNameMap.map(item => {
    arr.push(
      <Breadcrumb.Item key={item.path}>
        <Link to={item.path}>{item.name}</Link>
      </Breadcrumb.Item>
    )

    {
      // console.log('item', item)
      Array.isArray(item.routes) &&
        item.routes.length > 0 &&
        getBreadCurmbs(item.routes, arr)
    }
    
    return arr
  }))
}

export default connect(
  crumbsMap.mapStateToProps,
  crumbsMap.mapDispatchToProps
)(withRouter(Crumbs))

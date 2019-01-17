import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '@/reducer/connect'
import { Menu, Icon } from 'antd'
import { Layout } from 'antd/lib/index'
import { filterData } from '@/utils/index'

const { Sider } = Layout

class MySlider extends Component {
  render() {
    // const { slidecollapsed } = this.props
    let { slidecollapsed } = this.props
    slidecollapsed = filterData(slidecollapsed, 'slidecollapsed')

    return (
      <Sider trigger={null} collapsible collapsed={slidecollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MySlider)

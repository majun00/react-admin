import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Crumbs from '@/components/crumbs'
import MyHeader from '@/components/header'
import MyMain from '@/components/main'
import MySlider from '@/components/slider'
import './index.css'

const { Header, Content } = Layout

class Index extends Component {
  render() {
    return (
      <Layout>
        <MySlider />

        <Layout>
          <MyHeader />
          <Crumbs />
          <MyMain />
        </Layout>
      </Layout>
    )
  }
}

export default Index

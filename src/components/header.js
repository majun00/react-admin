import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '@/reducer/connect'
import { Layout, Icon } from 'antd'
import { filterData } from '@/utils/index'

const { Header } = Layout

class MyHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      onSlidecollapsed: this.props.onSlidecollapsed
    }
  }

  toggle = () => {
    this.state.onSlidecollapsed()
  }

  render() {
    const { onSlidecollapsed } = this.props
    let { slidecollapsed } = this.props
    slidecollapsed = filterData(slidecollapsed, 'slidecollapsed')
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={slidecollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
      </Header>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyHeader)

import React from 'react'
import PropTypes from 'prop-types'

export default class Table extends React.Component {
  static propTypes = {
    massage: PropTypes.String
  }

  constructor(props) {
    super(props)
    this.state = {
      count_: 0
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    this.setState({
      count_: this.state.count_ + 1
    })
  }

  render (){
    const massage = this.props.massage
    const count_ = this.state.count_
    return (
      <tr onClick={ this.onClick }>
        { massage + " " + count_ }
      </tr>
    )
  }
}

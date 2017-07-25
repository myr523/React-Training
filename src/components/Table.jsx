import React from 'react'
import PropTypes from 'prop-types'
import Tr from './Tr.jsx'

export default class Table extends React.Component {
  render (){
    return (
      <table>
        <Tr massage={"foo"} />
        <Tr massage={"bar"} />
      </table>
    )
  }
}

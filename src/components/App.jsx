import React from 'react'
import PropTypes from 'prop-types'
import Logo from './Logo.jsx'
import Table from './Table.jsx'

export default class App extends React.Component {

  /**
   * prop types
   * @type {object}
   */
   static propTypes = {
       title: PropTypes.string,
   }

   /**
    * default props
    * @type {object}
    */
    static defaultProps = {
      title: 'WReact SPA template',
    }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {

    const {
      title,
    } = this.props

    return (
      //allow func
      //カリー化
      //
      <div>
        <h1>{ title }</h1>
        <p>{ 'React!' }</p>
        <Logo size={ [100, 100] } /> {/*props*/}
        <Table />
      </div>  //JSX式
    )
  }
}

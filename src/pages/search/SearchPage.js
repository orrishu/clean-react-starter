import React, {Component} from 'react'
import SearchComponent from 'components/Search'
//import CSSModules from 'react-css-modules'
//import styles from './Search.scss'

//@CSSModules(styles)
export default class Search extends Component {


  componentWillMount = () => {
    console.log('search page')
  }
  //componentWillReceiveProps = (nextProps, nextState) => {};

  render(){
    return <div><SearchComponent/></div>
  }
}

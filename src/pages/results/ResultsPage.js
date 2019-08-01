import React, {Component} from 'react'
import ResultsComponent from 'components/Results'
//import CSSModules from 'react-css-modules'
//import styles from './Results.scss'

//@CSSModules(styles)
export default class Results extends Component {


  componentWillMount = () => {
    console.log('results page')
  }
  //componentWillReceiveProps = (nextProps, nextState) => {};

  render(){
    return <div><ResultsComponent/></div>
  }
}

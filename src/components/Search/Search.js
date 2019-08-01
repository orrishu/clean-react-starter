import React, {Component} from 'react'
//import CSSModules from 'react-css-modules'
import { translate } from 'react-polyglot'
import './search.scss'

//@CSSModules(styles)
export default @translate() class Search extends Component {

  componentWillMount = () => {
    console.log('search component', `${process.env.API_BASEURL}`)
  }

  render() {
    const { t } = this.props
    return (
      <div style={{marginTop: '50px'}} styleName="test">
        Search - Component
        <br />
        {t('nav.search')}
      </div>
    )
  }
}

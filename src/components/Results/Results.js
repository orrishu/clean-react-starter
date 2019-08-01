import React, {Component} from 'react'
import { translate } from 'react-polyglot'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { apiFetch } from 'common/services/apiService'
import './results.scss'

export default @translate() @withRouter @observer class Results extends Component {

  @observable results = [];

  componentWillMount = () => {
    console.log('results component')
    //test:
    apiFetch('users').then(res => {
      console.log(res)
      this.results = res
    })
    //apiFetch('Account/Me').then(res => console.log(res)).catch(error => console.log('intended error', error))  //intended error
  }

  render() {
    const { match: {params: { query, sort }}, t } = this.props
    console.log('q', query, sort)
    return (
      <div style={{marginTop: '50px'}}>
        <div styleName="title">
        Results - Component
        </div>
        <br/>
        <div styleName="title">
          {t('nav.results')}
        </div>
        <div styleName="results">
          <ul style={{'padding':'20px', 'margin':'20px'}}>
            {this.results.map((item, index) => {
              return <li key={index} style={{'margin': '10px'}}>
                <span styleName="data-span" style={{'width': '50px'}}>{item.id}#</span>
                <span styleName="data-span">{item.name}</span>
                <span styleName="data-span">{item.email}</span>

              </li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

import React, {Component} from 'react'
import {translate} from 'react-polyglot'
import {inject} from 'mobx-react'
import './Topbar.scss'

const navbar = [  {
  title: 'search',
  link: '/search'
}, {
  title: 'results',
  link: '/results/12/1'
}, {
  title: 'test',
  link: '/test'
}]

export default @translate() @inject('routingStore') class Topbar extends Component {

  navigate = route => () => {
    const { routingStore: { push, location: { pathname: path } } } = this.props
    if (path !== route) {
      push(route)
    }
  }

  render() {
    const {t} = this.props

    return (
      <div>
        <div styleName="header">{t('AppTitle')}</div>
        <div>
          <div>
            {navbar.map((nav, index) =>
              <div key={index} styleName="nav-link">
                <span style={{cursor: 'pointer', color: 'crimson'}} onClick={this.navigate(`${nav.link}`)}>
                  {t(`nav.${nav.title}`)}
                </span>
              </div>
            ) }
          </div>
        </div>
      </div>
    )
  }
}

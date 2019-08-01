import React from 'react'
import { inject, observer } from 'mobx-react'
import { translate } from 'react-polyglot'
import './NotFound404.scss'

export default @translate() @inject('routingStore') @observer class NotFound404 extends React.Component {
  render() {
    const { t, routingStore: { location: { pathname } } } = this.props
    return (
      <section>
        <h2 styleName="title">
          {t('page404')}
        </h2>
        <h3 styleName="link">
          <code>
            {pathname}
          </code>
        </h3>
      </section>
    )
  }
}

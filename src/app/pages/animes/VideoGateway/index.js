import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'
import { withTranslation } from 'react-i18next'

import { ROUTE } from '@src/shared/constants'
import GatewayAction from '@src/shared/stores/ducks/gateway'
import HeaderAction from '@src/shared/stores/ducks/header'
import Loading from '@src/shared/components/Loading'
import CardGateway from '@src/shared/components/CardGateway'

const VideoGateway = props => {
  const dispatch = useDispatch()
  const { data, loading } = useSelector(state => state.gateway)
  const { t, history } = props

  useEffect(() => {
    const fetchAnimes = async () => {
      await dispatch(GatewayAction.gatewayRequest(ROUTE.GATEWAY_ANIME))
    }
    fetchAnimes('dispatch')
  }, [dispatch])

  useEffect(() => {
    const dispatchHeader = async () => {
      if (data) {
        const header = {
          title: t('ANIMES_GATEWAY'),
          subtitle: t('ANIMES_GATEWAY'),
          icon: ['fas', 'folder'],
          gateway: false,
          back: false,
          history,
        }
        await dispatch(HeaderAction.headerProps(header))
      }
    }
    dispatchHeader()
  }, [data, t, dispatch, history])

  return (
    <Loading loading={loading} content>
      <Row className="justify-content-around mb-5">
        {data
          ? data.map((item, i) => (
              <Col md={3} key={i}>
                <CardGateway data={item} {...props} route="/animes/1" />
              </Col>
            ))
          : null}
      </Row>
    </Loading>
  )
}

export default withTranslation()(VideoGateway)

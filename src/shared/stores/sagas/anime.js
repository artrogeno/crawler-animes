import { call, put } from 'redux-saga/effects'
import axios from '@src/shared/services/axios'

import AnimeActions from '../ducks/anime'

export function* initialRequest({ gateway, page }) {
  try {
    const {
      data: { data },
    } = yield call(axios.get, `/animes/${gateway}?page=${page}`)

    yield put(AnimeActions.animeSuccess(data))
  } catch (error) {
    console.log(error)
  }
}

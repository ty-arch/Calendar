import {
  getDateInfo
} from './utils'

import {
  render,
  update
} from './render'

import './index.scss'

export default () => {

  const oContainer = document.createElement('table')
  oContainer.className = 'my-calendar'
  return {
    render: render(oContainer),
    update,
    getDateInfo
  }
}
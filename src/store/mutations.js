import { Cookies, LocalStorage, Notify } from 'quasar'
import Vue from 'vue'
import config from '../config.json'

function reqStart (state) {
  if (DEV) {
    console.log('Start Request')
  }
}
function reqFailed (state, payload) {
  if (DEV) {
    console.log('Failed Request')
    console.log(payload)
  }
  if (payload.response && payload.response.status) {
    switch (payload.response.status) {
      case 0: {
        setOfflineFlag(state, true)
        Vue.set(state, 'token', '')
        break
      }
      case 401: {
        clearToken(state)
        break
      }
      default: {
        if (DEV) {
          console.log(`${payload.status} - ${payload.statusText}`)
        }
        if (payload.response.data && payload.response.data.errors && payload.response.data.errors.length) {
          payload.response.data.errors.forEach((e) => { addError(state, e.reason) })
        }
      }
    }
  } else {
    addError(state, payload.message)
  }
}
function setItemField (state, field) {
  let existedIndex = -1
  state.items.forEach((existItem, index) => {
    if (existItem.id === field.id) { existedIndex = index }
  })
  if (existedIndex !== -1) {
    Vue.set(state.items[existedIndex], field.name, field.value)
  } else {
    state.items.push({id: field.id, [field.name]: field.value})
  }
}
function deleteItem (state, id) {
  let existedIndex = -1
  state.items.forEach((existItem, index) => {
    if (existItem.id === id) { existedIndex = index }
  })
  state.items.splice(existedIndex, 1)
}
function setItems (state, items) {
  Vue.set(state, 'items', items)
}
function clearItems (state) {
  Vue.set(state, 'items', [])
}
function setOfflineFlag (state, flag) {
  Vue.set(state, 'offline', flag)
}
function setToken (state, val) {
  let token = val.replace('FlespiToken ', '')
  if (token === state.token) { return false }
  if (val && token.match(/^[a-z0-9]+$/i)) {
    LocalStorage.set('X-Flespi-Token', token)
  } else {
    token = ''
    clearToken(state)
  }
  Vue.connector.token = `FlespiToken ${token}`
  Vue.set(state, 'token', token)
  clearErrors(state)
}
function clearToken (state) {
  let cookieToken = Cookies.get('X-Flespi-Token'),
    localStorageToken = LocalStorage.get.item('X-Flespi-Token')
  if (cookieToken && localStorageToken && cookieToken === localStorageToken) {
    Cookies.remove('X-Flespi-Token')
  }
  LocalStorage.remove('X-Flespi-Token')
  Vue.connector.token = ''
  Vue.set(state, 'token', '')
  clearTokenInfo(state)
  setConfig(state, config)
}

function setConfig (state, config) {
  Vue.set(state, 'config', config)
}

function addError (state, message) {
  Notify.create({
    type: 'negative',
    icon: 'warning',
    message: `${message}`,
    timeout: 1000
  })
  state.newNotificationCounter++
  state.errors.push(message)
}

function clearErrors (state) {
  state.errors = []
}

function setTokenInfo (state, info) {
  Vue.set(state, 'tokenInfo', info)
}

function clearTokenInfo (state) {
  state.tokenInfo = {}
}

function setSocketOffline (state, flag) {
  Vue.set(state, 'socketOffline', flag)
}

function clearNotificationCounter (state) { state.newNotificationCounter = 0 }

export default {
  reqStart,
  setItemField,
  setItems,
  deleteItem,
  reqFailed,
  setToken,
  clearToken,
  setOfflineFlag,
  clearItems,
  setConfig,
  addError,
  clearErrors,
  setTokenInfo,
  clearTokenInfo,
  setSocketOffline,
  clearNotificationCounter
}

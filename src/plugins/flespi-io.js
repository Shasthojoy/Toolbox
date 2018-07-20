import VueConnection from 'flespi-io-js/dist/vue-plugin'
import { version } from '../../package'

let connectionConfig = {socketConfig: { clientId: `toolbox-${version}-${Math.random().toString(16).substr(2, 8)}`, mqttSettings: { protocolVersion: 5 } }}

/* if local dev build */
if (DEV && !SERVER) {
  connectionConfig = {
    httpConfig: { server: 'https://localhost', port: 9005 },
    socketConfig: { server: `wss://localhost:9017`, clientId: `toolbox-${version}-dev-${Math.random().toString(16).substr(2, 8)}`, mqttSettings: { protocolVersion: 5 } }
  }
}

// check for pfront SERVER
if (PROD && SERVER) {
  if (window.location.host.indexOf('localhost:9004') !== -1 || window.location.host.indexOf('localhost:9005') !== -1 || window.location.host.indexOf('localhost:7004') !== -1) {
    connectionConfig = {
      httpConfig: { server: 'https://localhost', port: 9005 },
      socketConfig: { server: `wss://localhost:9017`, clientId: `toolbox-${version}-dev-${Math.random().toString(16).substr(2, 8)}`, mqttSettings: { protocolVersion: 5 } }
    }
  }
}

export default ({Vue, store}) => {
  Vue.config.productionTip = false
  Vue.use(VueConnection, connectionConfig)
  Vue.connector.socket.on('error', (error) => {
    store.commit('reqFailed', error)
  })
  if (window) {
    window.addEventListener('beforeunload', () => {
      Vue.connector.socket.close(true)
    })
  }
}

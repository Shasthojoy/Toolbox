<template>
  <q-page class="bg-white">
    <mqtt-client whiteLabel="MQTT Clients" :initSettings="settings" :useLocalStorage="false" :needInitNewClient="true"/>
  </q-page>
</template>

<script>
import MqttClient from 'mqtt-board'

export default {
  name: 'MQTTClient',
  props: [
    'limit',
    'isLoading',
    'isVisibleToolbar',
    'isNeedSelect',
    'config'
  ],
  data () {
    return {
      settings: {
        clientId: `toolbox-mqtt-board-${Math.random().toString(16).substr(2, 8)}`,
        username: `FlespiToken ${this.$store.state.token}`
      }
    }
  },
  components: {
    MqttClient
  }
}
</script>

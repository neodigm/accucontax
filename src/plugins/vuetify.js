import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
    theme: {
      primary: '#f4925c',
      secondary: '#1c4a6c',
      accent: '#f8d1be',
      info: '#667d96',

      error: '#009688',
      warning: '#ff5722',
      success: '#607d8b'
      }
})

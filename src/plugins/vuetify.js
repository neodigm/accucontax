import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
    theme: {
      primary: '#f4925c',
      secondary: '#1c4a6c',
      accent: '#ffc107',
      error: '#009688',
      warning: '#ff5722',
      info: '#cddc39',
      success: '#607d8b'
      }
})

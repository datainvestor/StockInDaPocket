import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
          light: 
            {
                primary: '#009fc2',
                secondary: '#607d8b',
                accent: '#03a9f4',
                error: '#f44336',
                warning: '#ffc107',
                info: '#8bc34a',
                success: '#4caf50'
            },
        },
      },
})

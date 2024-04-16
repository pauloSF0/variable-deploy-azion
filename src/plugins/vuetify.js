/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          'header-background-base': '#1E1E1E',
          'primary-color-base': '#F3652B',
          'border-color-strong': '#7F7F7F',
          'header-foreground-base': '#FFFFFF',
          'text-color': '#FFFFFF',
          'text-color-medium': '#666666',
          'success-color-medium': '#8BC249',
          'footer-background-base': '#E5E5E5',
          'search-color': '#FAFAFA',
          'td-hover': ' #FAFAFA',
          'text-cancel': '#999999',
          'info-icon': '#B2B2B2'
        },
      },
    },
  },
})

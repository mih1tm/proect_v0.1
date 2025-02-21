import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VTreeview } from 'vuetify/labs/VTreeview'
import 'vuetify/styles'

export default createVuetify({
  components: {
    ...components,
    VTreeview,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

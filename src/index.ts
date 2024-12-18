import { AppWrapperRoute, defineWebApplication } from '@ownclouders/web-pkg'
import App from './App.vue'
import { mimeTypes } from './mimeTypes'
import { id as appId } from '../public/manifest.json'

export default defineWebApplication({
  setup() {
    const routes = [
      {
        name: appId,
        path: '/:driveAliasAndItem(.*)?',
        component: AppWrapperRoute(App, {
          applicationId: appId,
          urlForResourceOptions: {
            disposition: 'inline'
          }
        }),
        meta: {
          authContext: 'hybrid',
          title: '3D Model Viewer',
          patchCleanPath: true
        }
      }
    ]

    return {
      appInfo: {
        name: '3D Model Viewer',
        id: appId,
        icon: 'resource-type-graphic',
        iconFillType: 'fill',
        iconColor: '#86C540',
        extensions: Object.keys(mimeTypes).map((extension) => ({
          extension,
          mimeType: mimeTypes[extension],
          label: 'View 3D Model'
        }))
      },
      routes
    }
  }
})

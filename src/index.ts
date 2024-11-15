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
        img: new URL('./assets/images/3d-model-viewer.svg', import.meta.url).href,
        extensions: Object.keys(mimeTypes).map((extension) => ({
          extension,
          mimeType: mimeTypes[extension],
          label: 'View in 3D Model Viewer'
        }))
      },
      routes
    }
  }
})

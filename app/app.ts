import Vue from 'nativescript-vue'
import Home from './components/Home.vue'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()

import { InAppBrowser } from 'nativescript-inappbrowser';

let browser;
setTimeout(() => {
  browser = InAppBrowser.openAuth("https://google.com", "https://docs.nativescript.org/", {
    // iOS Properties
    dismissButtonStyle: 'cancel',
    preferredBarTintColor: '#006432',
    preferredControlTintColor: '#006432',
    ephemeralWebSession: true,
    // Android Properties
    showTitle: false,
    toolbarColor: '#006432',
    secondaryToolbarColor: '#006432',
    navigationBarColor: '#000000',
    navigationBarDividerColor: '#000000',
    hasBackButton: true,
    enableUrlBarHiding: true,
    enableDefaultShare: false
  });
}, 1000);
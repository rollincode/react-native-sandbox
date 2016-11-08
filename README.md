# Rollincode React Native Sandbox

Default sandbox hybrid app with examples: icons, hybrid side navigation, routing
...

### Installation

1. Clone project
2. Edit __package.json__ and replace change application name

```json
"name": "App"
```

3. Edit ___index.android.js___ and ___index.ios.js___ and replace with your application name
```javascript
AppRegistry.registerComponent('App' ...)
```
4. Run
```sh
react-native upgrade
```
5. Enjoy !

Router is in `src/App.js` with:

```javascript
<Router>
...
</Router>
```

Entry point is `src/App.js`

Side navigation content is in `src/components/common/SideMenu.js` and the first visible screen is `src/components/Root.js`

You also need to configure Font icons => [react-native-vector-icons
](https://github.com/oblador/react-native-vector-icons)

To run It with OSX, just run the following command and hit play button.

```sh
open ios/MyAppName.xcodeproj
```

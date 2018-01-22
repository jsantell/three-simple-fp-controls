# three-simple-fp-controls

[![Build Status](http://img.shields.io/npm/v/three-simple-fp-controls.svg?style=flat-square)](https://www.npmjs.org/package/three-simple-fp-controls)

Simple, boring, first person controls for three.js.

Controls for [three.js] similar to [PointerLockControls] or [FirstPersonControls], but just implements AWSD movement and shift+mouse for looking, for simple strafing without pointer lock.

## Controls

* WASD and shift+mouse for FPS-style movement
* IJKL for keyboard based look-controls, E and Q for moving up and down

## Try

[demo](https://jsantell.github.io/three-simple-fp-controls)

## Install and Use

### Script

Download the script [here](https://raw.githubusercontent.com/jsantell/three-simple-fp-controls/master/dist/three-simple-fp-controls.js) and include in a script tag which will use global `THREE` and attach the controls via `THREE.SimpleFPControls`

See the [demo](index.html) for usage example.

### Module

Install the controls via `npm install --save three-simple-fp-controls`. Be sure to also have `three` installed as it is a peer dependency.

```js
import { Scene, PerspectiveCamera } from 'three';
import SimpleFPControls from 'three-simple-fp-controls';

const camera = new PerspectiveCamera();
const controls = new SimpleFPControls(camera);
controls.movementSpeed = 30;
scene.add(controls.getObject());
```

## API

### Constructor

The constructor takes a single object, probably a Camera object to be controlled via `new SimpleFPControls(camera)`.

### Attributes

* `movementSpeed` how quickly controls move while using AWSD (default: 50)
* `lookSpeedX` how quickly controls move while moving the mouse left and right (default: 3)
* `lookSpeedY` how quickly controls move while moving the mouse up and down (default: 2)
* `enabled` whether or not the controls should be enabled (default: true)

### Methods

* `getObject()` returns the Object3D to add to scene
* `dispose()` unbinds events and cleans up the component for collection
* `update(delta)` to be called on every frame to update the position and rotation of the controller. Receives a time delta in milliseconds

## Building

`$ npm run build`

## License

MIT License, Copyright (c) 2017 Jordan Santell

[three.js]: https://threejs.org
[PointerLockControls]: https://github.com/mrdoob/three.js/blob/master/examples/js/controls/PointerLockControls.js
[FirstPersonControls]: https://github.com/mrdoob/three.js/blob/master/examples/js/controls/FirstPersonControls.js

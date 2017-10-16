(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('three')) :
	typeof define === 'function' && define.amd ? define(['three'], factory) :
	(global.SimpleFPControls = factory(global.THREE));
}(this, (function (three) { 'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var PI_2 = Math.PI / 2;
var SimpleFPControls$1 = function () {
  function SimpleFPControls(object) {
    _classCallCheck(this, SimpleFPControls);
    this.object = object;
    this.enabled = true;
    this.movementSpeed = 50.0;
    this.lookSpeedX = 3;
    this.lookSpeedY = 2;
    this.edgeLookSpeed = 3;
    this.pitch = new three.Object3D();
    this.yaw = new three.Object3D();
    this.yaw.add(this.pitch);
    this.pitch.add(this.object);
    this.moveForward = false;
    this.moveBackward = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.velocity = new three.Vector3();
    this.direction = new three.Vector3();
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.addEventListener('mousemove', this.onMouseMove, false);
    document.addEventListener('keyup', this.onKeyUp, false);
    document.addEventListener('keydown', this.onKeyDown, false);
  }
  _createClass(SimpleFPControls, [{
    key: 'getObject',
    value: function getObject() {
      return this.yaw;
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      document.removeEventListener('mousemove', this.onMouseMove, false);
      document.removeEventListener('keyup', this.onKeyUp, false);
      document.removeEventListener('keydown', this.onKeyDown, false);
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(e) {
      if (!this.enabled) {
        return false;
      }
      var movementX = e.movementX || e.mozMovementX || e.webkitMovementX || 0;
      var movementY = e.movementY || e.mozMovementY || e.webkitMovementY || 0;
      if (e.pageX < 5) {
        movementX = -this.edgeLookSpeed;
      } else if (window.innerWidth - e.pageX < 5) {
        movementX = this.edgeLookSpeed;
      }
      this.yaw.rotation.y -= movementX * this.lookSpeedX / 1000;
      this.pitch.rotation.x -= movementY * this.lookSpeedY / 1000;
      this.pitch.rotation.x = Math.max(-PI_2, Math.min(PI_2, this.pitch.rotation.x));
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      switch (e.keyCode) {
        case 38:
        case 87:
               this.moveForward = true;break;
        case 37:
        case 65:
               this.moveLeft = true;break;
        case 40:
        case 83:
               this.moveBackward = true;break;
        case 39:
        case 68:
               this.moveRight = true;break;
      }
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp(e) {
      switch (event.keyCode) {
        case 38:
        case 87:
               this.moveForward = false;break;
        case 37:
        case 65:
               this.moveLeft = false;break;
        case 40:
        case 83:
               this.moveBackward = false;break;
        case 39:
        case 68:
               this.moveRight = false;break;
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      this.velocity.x -= this.velocity.x * 10.0 * delta;
      this.velocity.z -= this.velocity.z * 10.0 * delta;
      this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
      this.direction.x = Number(this.moveLeft) - Number(this.moveRight);
      this.direction.normalize();
      if (this.moveForward || this.moveBackward) {
        this.velocity.z -= this.direction.z * this.movementSpeed * delta;
      }
      if (this.moveLeft || this.moveRight) {
        this.velocity.x -= this.direction.x * this.movementSpeed * delta;
      }
      this.yaw.translateX(this.velocity.x * delta);
      this.yaw.translateZ(this.velocity.z * delta);
    }
  }]);
  return SimpleFPControls;
}();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
if (typeof window !== 'undefined' && _typeof(window.THREE) === 'object') {
  window.THREE.SimpleFPControls = SimpleFPControls$1;
}

return SimpleFPControls$1;

})));

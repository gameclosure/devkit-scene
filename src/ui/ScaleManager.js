import device;

var ScaleManager = exports = Class(function() {

  this.init = function(width, height, scaleMode) {
    this.resize(width, height, scaleMode);
  };

  this.resize = function(width, height, scaleMode) {
    this.width = width;
    this.height = height;
    this.scaleMode = scaleMode;

    switch (scaleMode) {
      case ScaleManager.NONE:
        this.scale = 1;
        break;

      case ScaleManager.SCALE_MODE.LOCK_WIDTH:
        this.scale = device.width / width;
        this.height = device.height / this.scale;
        break;

      case ScaleManager.SCALE_MODE.LOCK_HEIGHT:
        this.scale = device.height / height;
        this.width = device.width / this.scale;
        break;
    }
  };

  this.scaleView = function(view) {
    view.style.scale = this.scale;
    view.style.width = this.width;
    view.style.height = this.height;
  };

});

ScaleManager.SCALE_MODE = {
  NONE: "scaleModeNone",
  LOCK_WIDTH: "scaleModeLockWidth",
  LOCK_HEIGHT: "scaleModeLockHeight"
};
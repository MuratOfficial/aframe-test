AFRAME.registerComponent('size-pulser', {
  schema: {
    minScale: {type: 'number', default: 0.5},
    maxScale: {type: 'number', default: 1.5},
    speed: {type: 'number', default: 1},
    axis: {type: 'string', default: 'all', oneOf: ['x', 'y', 'z', 'all']}
  },

  init: function() {
    this.originalScale = this.el.object3D.scale.clone();
    this.time = 0;
  },

  tick: function(time, timeDelta) {
    this.time += timeDelta / 1000 * this.data.speed;
    
    const pulseValue = (Math.sin(this.time) + 1) / 2; // 0 to 1
    const scaleRange = this.data.maxScale - this.data.minScale;
    const currentScale = this.data.minScale + pulseValue * scaleRange;
    
    const newScale = this.originalScale.clone();
    
    if (this.data.axis === 'all') {
      newScale.multiplyScalar(currentScale);
    } else {
      newScale[this.data.axis] *= currentScale;
    }
    
    this.el.object3D.scale.copy(newScale);
  }
});
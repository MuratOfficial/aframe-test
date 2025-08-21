AFRAME.registerComponent('color-changer', {
  schema: {
    color: {type: 'color', default: '#FF0000'},
    event: {type: 'string', default: 'click'},
    duration: {type: 'number', default: 500}
  },

  init: function() {
    const el = this.el;
    const originalColor = el.getAttribute('material').color;
    this.originalColor = originalColor || '#FFFFFF';
    
    this.changeColor = this.changeColor.bind(this);
    el.addEventListener(this.data.event, this.changeColor);
  },

  changeColor: function() {
    const el = this.el;
    const originalColor = this.originalColor;
    const newColor = this.data.color;
    
    el.setAttribute('material', 'color', newColor);
    
    setTimeout(() => {
      el.setAttribute('material', 'color', originalColor);
    }, this.data.duration);
  },

  remove: function() {
    this.el.removeEventListener(this.data.event, this.changeColor);
  }
});
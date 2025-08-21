AFRAME.registerComponent('text-display', {
  schema: {
    text: {type: 'string', default: 'Hello AFRAME'},
    color: {type: 'color', default: '#FFFFFF'},
    size: {type: 'number', default: 1},
    align: {type: 'string', default: 'center'},
    position: {type: 'vec3', default: {x: 0, y: 0, z: 0}}
  },

  init: function() {
    const textEl = document.createElement('a-text');
    textEl.setAttribute('value', this.data.text);
    textEl.setAttribute('color', this.data.color);
    textEl.setAttribute('align', this.data.align);
    textEl.setAttribute('position', this.data.position);
    textEl.setAttribute('scale', `${this.data.size} ${this.data.size} ${this.data.size}`);
    
    this.el.appendChild(textEl);
    this.textEl = textEl;
  },

  update: function(oldData) {
    if (this.data.text !== oldData.text) {
      this.textEl.setAttribute('value', this.data.text);
    }
    if (this.data.color !== oldData.color) {
      this.textEl.setAttribute('color', this.data.color);
    }
    if (this.data.size !== oldData.size) {
      this.textEl.setAttribute('scale', `${this.data.size} ${this.data.size} ${this.data.size}`);
    }
  }
});
AFRAME.registerComponent('color-changer', {
  schema: {
    color: {type: 'color', default: '#FF0000'},
    event: {type: 'string', default: 'click'},
    duration: {type: 'number', default: 500}
  },

  init: function() {
    this.changeColor = this.changeColor.bind(this);
    this.el.addEventListener(this.data.event, this.changeColor);
  },

  changeColor: function() {
    const el = this.el;
    const currentColor = el.getAttribute('material').color;
    const newColor = this.data.color;
    
    // Сохраняем текущий цвет как исходный
    this.originalColor = currentColor;
    
    // Меняем цвет на новый
    el.setAttribute('material', 'color', newColor);
    
    // Возвращаем исходный цвет через указанное время
    setTimeout(() => {
      if (this.originalColor) {
        el.setAttribute('material', 'color', this.originalColor);
      }
    }, this.data.duration);
  },

  remove: function() {
    this.el.removeEventListener(this.data.event, this.changeColor);
  }
});
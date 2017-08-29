module.exports = class {
  onCreate() {
    this.state = {
      name: '',
      price: 0,
      imageUrl: '',
      quantity: 0,
      deliveredFrom: ''
    };
  }
  onInput(input) {
    if (input.dataValues) {
      input = input.dataValues;
    }
    this.state = {
      name: input.name,
      price: input.price,
      imageUrl: input.imageUrl,
      quantity: input.quantity || 0,
      deliveredFrom: input.deliveredFrom
    };
  }
  handleQuantityChanged(evt) {
    this.emit('change', evt.target.value);
  }
}

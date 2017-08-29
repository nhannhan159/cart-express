module.exports = class {
  onCreate() {
    this.state = {
      items: []
    }
  }
  onInput(input) {
    this.state.items = input.items;
  }
  handleQuantityChanged(newValue, el) {
    this.state.items[parseInt(el.input.index)].quantity = newValue;
    this.emit('change', this.state.items);
  }
}

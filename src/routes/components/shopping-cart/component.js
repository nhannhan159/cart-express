module.exports = class {
  onCreate() {
    this.state = {
      items: [],
      location: '',
      shippingFee: 0,
      total: 0
    }
  }
  onInput(input) {
    this.state.items = input.items
  }
  handleQuantityChanged(items, el) {
    this.state.items = items;
    this.recalculateCart();
  }
  handleLocationChanged(location, el) {
    this.state.location = location;
    this.recalculateCart();
  }
  recalculateCart() {
    let selectedItems = this.state.items
      .filter(i => i.quantity > 0)
      .map(i => ({ id: i.id, quantity: i.quantity }));
    let requestData = {
      des: this.state.location,
      items: selectedItems
    }
    fetch('/api/cart/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(resp => resp.json())
    .then(data => {
      this.state.items.forEach(item => {
        let itemDelivery = data.items.find(i => i.id === item.id);
        if (itemDelivery) {
          item.deliveredFrom = itemDelivery.source;
        }
      });
      this.setStateDirty('items');
      this.state.shippingFee = data.shippingFee;
      this.state.total = data.total;
    })
    .catch(err => console.error(`Post error: ${err}`));
  }
}

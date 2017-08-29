module.exports = class {
  onCreate() {
    this.state = {
      locations: [],
      seletedLocation: "",
      shippingFee: 0,
      total: 0
    };
  }
  onInput(input) {
    this.state.shippingFee = input.shippingFee;
    this.state.total = input.total;
  }
  onMount() {
    this.getDeliveryLocations();
    window.handleLocationChanged = this.handleLocationChanged.bind(this);
  }
  onUpdate() {
    $("select").material_select();
  }
  handleLocationChanged(el) {
    this.emit('change', $(el).val());
  }
  getDeliveryLocations() {
    fetch('/api/location')
      .then(resp => resp.json())
      .then(data => {
        this.state.locations = data;
      })
      .catch(err => {
        console.error(`Fetch error: ${err}`);
      });
  }
}

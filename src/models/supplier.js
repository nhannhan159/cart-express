export default (sequelize, DataTypes) => {
  let Supplier = sequelize.define('supplier', {
    source: DataTypes.STRING,
    destination: DataTypes.STRING,
    shippingFee: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: (models) => {
        Supplier.belongsTo(models.Item);
      }
    }
  });
  return Supplier;
};
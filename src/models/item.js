export default (sequelize, DataTypes) => {
  let Item = sequelize.define('item', {
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Supplier);
      }
    }
  });
  return Item;
};
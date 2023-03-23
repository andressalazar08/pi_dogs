const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

//entregamos por parametro la instancia de sequelize(database)
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id:{
     // type: DataTypes.INTEGER,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,
      // autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    min_height:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    max_height:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    min_weight:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    max_weight:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    life_span:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    image: {
      type: DataTypes.STRING
    }
  },{
    timestamps: false
  });
};

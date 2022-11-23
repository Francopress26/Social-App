const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:true
    },
    biography:{
        type:DataTypes.STRING
    },
    location:{
        type:DataTypes.STRING
    },
    profilePic:{
        type:DataTypes.STRING
    },
    followers:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      defaultValue:[],
      allowNull:true
    },
    instagram_username:{
      type:DataTypes.STRING,
      allowNull:true
    },
    twitter_username:{
      type:DataTypes.STRING,
      allowNull:true
    }

  });
};




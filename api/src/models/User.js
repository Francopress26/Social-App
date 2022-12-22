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
    followers: { 
      type: DataTypes.TEXT, 
      defaultValue:null,
      get() {
          return JSON.parse(this.getDataValue('followers'));
      }, 
      set(val) {

          return this.setDataValue('followers',JSON.stringify(val) );
      }
    },
    followed: { 
      type: DataTypes.TEXT, 
      defaultValue:null,
      get() {
        return JSON.parse(this.getDataValue('followed'));
      }, 
      set(val) {
        return this.setDataValue('followed', JSON.stringify(val));
      }
    },
    liked: { 
      type: DataTypes.TEXT, 
      defaultValue:null,
      get() {
          return JSON.parse(this.getDataValue('liked'));
      }, 
      set(val) {
          return this.setDataValue('liked', JSON.stringify(val));
      }
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





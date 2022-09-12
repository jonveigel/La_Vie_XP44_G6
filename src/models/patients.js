const db = require('../database/index');

const { DataTypes } = require('sequelize');

const patients = db.define("patients", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_patient: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    born: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    tableName: 'patients',
    timestamps: false,
    underscored: true
});

module.exports = patients;


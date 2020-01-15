/******************************************
 *  Author : Leandro Ferreira Netto 
 *  Created On : Tue Jan 14 2020
 *  File : PointSchema.js
 *******************************************/

 const mongoose = require('mongoose');
 
 
 const PointSchema= new mongoose.Schema({
     type: {
         type: String,
         enum: ['Point'],
         required: true,

     },
     coordinates: {
         type: [Number],
         required: true,

     },
 });

 module.exports = PointSchema;
var mongoose = require('mongoose');
var extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema;
var ad_objects = require('./additionalModels.js');
var Element = require('mongoose').model('Element').schema;
var ElementVersion = require('mongoose').model('ElementVersion').schema;
var RecordVersion = require('mongoose').model('RecordVersion').schema;
var MeasurementOrFact = require('mongoose').model('MeasurementOrFact').schema;

var MolecularDataAtomized = Element.extend({
	measurementOrFact : MeasurementOrFact,
	relatedTo : String
});

var MolecularData = Element.extend({
	molecularDataAtomized : [MolecularDataAtomized],
	molecularDataUnstructured : String
},{collection: 'molecularData'});

var MolecularDataVersion = ElementVersion.extend({
	molecularData : MolecularData
},{ collection: 'MolecularDataVersion' });

module.exports = {
	             	MolecularDataVersion: mongoose.model('MolecularDataVersion', MolecularDataVersion ),
	             	MolecularData: mongoose.model('MolecularData', MolecularData )
	             };
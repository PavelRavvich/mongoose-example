const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mongoose')
    .then(() => console.log('mongodb has started ...'))
    .catch(e => console.log(e));

require('./person.model');

const Person = mongoose.model('persons');

// save single object
// new Person(person).save().then(res => {}).catch(e => {});

// insert data
// [{name: 'Person_1', age: 44}, {name: 'Person_2', age: 33}, {name: 'Person_3', age: 64}].forEach(p => new Person(p).save());

// find by single condition
// Person.find({age: 30}).then(persons => console.log(JSON.stringify(persons, null, 2)));

// find by multiply conditions
// Person.find({name: {'$in': ['Person_1', 'Person_2']}}).then(persons => console.log(JSON.stringify(persons, null, 2)));

// delete object
// Person.deleteOne({_id: '5b34026942c1bd035c86520c'}).then(() => console.log('deleted')).catch(e => console.log(e))


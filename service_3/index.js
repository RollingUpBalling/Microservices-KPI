const express = require('express');
const {Sequelize, DataTypes} = require('sequelize');
 //'postgres://demo:demo@10.109.167.239:5432/demo';

const app = express();

const { Kafka } = require('kafkajs')

const kafka = new Kafka({

    clientId: 'my-app',

    brokers: ['10.98.204.179:9092']

});


const sequelize = new Sequelize('postgres://demo:demo@10.109.167.239:5432/demo', {
    dialect: 'postgres'
});


app.get('/api/service3/send-message', async (req, res, next) => {
    const query = req.query.message;


    return res.json({message: 'success'});
});

app.get('/api/service3/get', async (req, res, next) => {

    const results = await sequelize.query('SELECT "id", "message", "createdAt", "updatedAt" FROM "results";');

    return res.json({message: 'success', results: results[0]});
});

sequelize.authenticate().then(() => {
    sequelize.query('CREATE TABLE IF NOT EXISTS results (\n' +
        'id uuid constraint result_pkey primary key,' +
        'message  varchar(255)' +
        ');').then(r => app.listen(8090, () => {
        console.log('service 3 run in 8090 port');
    }))
}).catch(e => {console.log(e)});



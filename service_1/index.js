const express = require('express');

const app = express();
const { Kafka } = require('kafkajs')

const kafka = new Kafka({

  clientId: 'my-app',

  brokers: ['10.98.204.179:9092']

});
const crypto = require("crypto");


const consumer = kafka.consumer({ groupId: 'zxc' })

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('postgres://demo:demo@10.109.167.239:5432/demo', {
  dialect: 'postgres'
});

const run = async ()=> {
  await consumer.connect()

  await consumer.subscribe({ topic: 'zxc' })

  await consumer.run({

    eachMessage: async ({ topic, partition, message }) => {
      console.log({

        partition,

        offset: message.offset,

        value: message.value.toString(),

      })
      const id = crypto.randomBytes(16).toString("hex");
      await sequelize.query(`INSERT INTO results (id, message, "createdAt", "updatedAt")
VALUES ('${id}', '${message.value.toString()}', '${new Date().toDateString()}', '${new Date().toDateString()}');`);



    },

  })
};
sequelize.authenticate().then(r => run()).then(r => app.listen(8080, () => {
    console.log('service 1 runinigg in 80008880 port');
  })).catch(e => console.log(e));

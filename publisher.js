const amqp = require("amqplib");

connect();

async function connect() {

    const message = { number: process.argv[2]}
    try {
        const connection = await amqp.connect("amqp://localhost:5672")
        const channel = await connection.createChannel();

        await channel.assertQueue("jobs");
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(message)))

        console.log(`Message sent succesfully.`)
    }
    catch(ex) {
        console.error(ex)
    }
}

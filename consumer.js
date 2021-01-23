const amqp = require("amqplib");

connect();

async function connect() {

    try {
        const connection = await amqp.connect("amqp://localhost:5672")
        const channel = await connection.createChannel();

        await channel.assertQueue("jobs");

        channel.consume("jobs", message => {
            const input = JSON.parse(message.content.toString())
            console.log(`Recieved message`,input)
            
            channel.ack(message);
        })
        
        console.log(`Waiting for messages`)
    }
    catch(ex) {
        console.error(ex)
    }
}

# rabbitmq-simple

Prerequisate to run this simple producer and consumer is to install docker and run rabbitmq image by running the command below. You must also have npm and node.js installed.

``` docker run --name rabbitmq -p 5672:5672 rabbitmq ```

This repository contains simple producer and consumer in RabbitMQ. Producer publishes simple message of any text given as a first argument while running publisher.js. 

Before running producer and consumer, install amqplib by running the command below.

``` npm install amqplib ```

And then in two different terminals run both producer and consumer. In order run consumer, use the command below:

``` npm run consumer.js ```

When running producer, as a third argument, specify what message you want to publish. For example, in the given example below, the number 234 is published. 

``` npm run publisher.js 234 ```

As soon as you run the command above, your consumer will get the message, and you will the message received in the logs.




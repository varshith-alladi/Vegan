const redis = require("redis");


const redisClient = redis.createClient({
    password: 'ruLmtZsLRy8DWHWOYOVbSbhxntXHYFKK',
    socket: {
        host: 'redis-16177.c301.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 16177
    }
});

redisClient.connect();
redisClient.on('connect', () => {
    console.log('Redis is connected');
  });
module.exports=redisClient;

const TOPIC = 'Moisture';

//THE BROKER CAN ALSO ACT AS CLIENT, SO WE CAN SUBSCRIBE TO IT
module.exports = broker => {
    broker.subscribe(TOPIC, (topic, message) => {
        if(topic === TOPIC)
            console.log('%s: %s', topic, message);
    });
};
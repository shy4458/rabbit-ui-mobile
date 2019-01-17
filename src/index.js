const RabbitUi = {
    get React() {
        return require('react');
    },

    get ReactNative() {
        return require('react-native');
    },

    get Button() {
        return require('./components/button');
    }
};

module.exports = RabbitUi;

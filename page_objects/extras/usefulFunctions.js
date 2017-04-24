module.exports = [
    {
        pause: function (time) {
            this.api.pause(time);

            return this;
        }
    }
];
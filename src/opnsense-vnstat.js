const BaseClient = require('./opnsense-baseclient');

class VnstatClient extends BaseClient {

    constructor(opnsenseClient) {
        super(opnsenseClient)
    }

    get5MinInt(limit = 6) {
        return this.client.get(`vnstat/service/stats/f/${limit}`);
    }

    getHourly(limit = 24) {
        return this.client.get(`vnstat/service/stats/h/${limit}`);
    }

    getDaily(limit = 31) {
        return this.client.get(`vnstat/service/stats/d/${limit}`);
    }

    getMontly(limit = 12) {
        return this.client.get(`vnstat/service/stats/m/${limit}`);
    }
}

module.exports = VnstatClient;
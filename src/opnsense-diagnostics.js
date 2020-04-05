const BaseClient = require('./opnsense-baseclient');

class ActivityClient extends BaseClient {
    getActivity() {
        return this.client.get('diagnostics/activity/getActivity');
    }
}

class DnsClient extends BaseClient {
    reverseLookup(address) {
        return this.client.get(`diagnostics/dns/reverse_lookup?address=${address}`);
    }
}

class FirewallClient extends BaseClient {
    getLog() {
        return this.client.get('diagnostics/firewall/log');
    }
}

class InterfaceClient extends BaseClient {
    getArp() {
        return this.client.get('diagnostics/interface/getArp');
    }

    getNdp() {
        return this.client.get('diagnostics/interface/getNdp');
    }

    getRoutes() {
        return this.client.get('diagnostics/interface/getRoutes');
    }

    flushArp() {
        return this.client.post('diagnostics/interface/flushArp', '', false);
    }
}

class NetflowClient extends BaseClient {
    isEnabled() {
        return this.client.get('diagnostics/netflow/isEnabled');
    }

    getStatus() {
        return this.client.get('diagnostics/netflow/status');
    }

    getConfig() {
        return this.client.get('diagnostics/netflow/getConfig');
    }
}

class NetworkInsightClient extends BaseClient {
    getInterfaces() {
        return this.client.get('diagnostics/networkinsight/getInterfaces');
    }

    getMetadata() {
        return this.client.get('diagnostics/networkinsight/getMetadata');
    }

    getProtocols() {
        return this.client.get('diagnostics/networkinsight/getProtocols');
    }

    getServices() {
        return this.client.get('diagnostics/networkinsight/getServices');
    }

    getTime() {
        return this.client.get('diagnostics/networkinsight/timeserie');
    }
}

class SystemHealthClient extends BaseClient {
    getInterfaces() {
        return this.client.get('diagnostics/systemhealth/getInterfaces');
    }

    getRRDList() {
        return this.client.get('diagnostics/systemhealth/getRRDlist');
    }
}

module.exports = {
    ActivityClient: ActivityClient,
    DnsClient: DnsClient,
    FirewallClient: FirewallClient,
    InterfaceClient: InterfaceClient,
    NetflowClient: NetflowClient,
    NetworkInsightClient: NetworkInsightClient,
    SystemHealthClient: SystemHealthClient,
};
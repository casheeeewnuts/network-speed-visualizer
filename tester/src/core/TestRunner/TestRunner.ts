import {DateTime} from "luxon";

export interface TestRunner {
    run(): Promise<TestResult>
}

export interface TestResult {
    timestamp: DateTime,
    ping: {
        jitter: number,
        latency: number,
    },
    download: {
        bandwidth: number,
        bytes: number,
        elapsed: number
    },
    upload: {
        bandwidth: number,
        bytes: number,
        elapsed: number
    },
    packetLoss: number,
    isp: string,
    server: {
        host: string,
        name: string,
        location: string,
        country: string
    }
}
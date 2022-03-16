import ajv, {Schema} from "ajv"
import {TestResult} from "./TestRunner";

const TEST_RESULT_SCHEMA: Schema = {
    required: ["timestamp", "ping", "download", "upload", "packetLoss", "isp", "server"],
    type: "object",
    properties: {
        timestamp: {
            type: "string",
        },
        ping: {
            type: "object",
            properties: {
                jitter: {
                    type: "number"
                },
                latency: {
                    type: "number"
                }
            }
        },
        download: {
            type: "object",
            properties: {
                bandwidth: {
                    type: "number"
                },
                bytes: {
                    type: "number"
                },
                elapsed: {
                    type: "number"
                }
            }
        },
        upload: {
            type: "object",
            properties: {
                bandwidth: {
                    type: "number"
                },
                bytes: {
                    type: "number"
                },
                elapsed: {
                    type: "number"
                }
            }
        },
        packetLoss: {
            type: "number"
        },
        isp: {
            type: "string"
        },
        server: {
            type: "object",
            properties: {
                host: {
                    type: "string"
                },
                name: {
                    type: "string"
                },
                location: {
                    type: "string"
                },
                country: {
                    type: "string"
                },
            }
        }
    }
} as const

export class InvalidResult extends Error {}

export const validate = new ajv().compile<TestResult>(TEST_RESULT_SCHEMA)
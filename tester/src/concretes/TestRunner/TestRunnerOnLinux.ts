import {TestRunner, TestResult} from "../../core/TestRunner/TestRunner";
import {InvalidResult, validate} from "../../core/TestRunner/TestResultValidator";
import {asyncExec} from "../../lib/async-exec";
import {CommandExecutor} from "./command-executor";

export class TestRunnerOnLinux implements TestRunner {
    constructor(private readonly commandExecutor: CommandExecutor = asyncExec) {}

    async run(): Promise<TestResult> {
        const result = await this.commandExecutor("speedtest -f json").then(result => JSON.parse(result.stdout))

        if (!validate(result)) {
            throw new InvalidResult()
        }

        return result
    }
}
import {exec} from "child_process";

export function asyncExec(command: string): Promise<{ stdout: string, stderr: string }> {
    return new Promise(((resolve, reject) => {
        exec(command, ((error, stdout, stderr) => {
            if (error) {
                reject(error)
            }

            resolve({
                stdout,
                stderr
            })
        }))
    }))
}
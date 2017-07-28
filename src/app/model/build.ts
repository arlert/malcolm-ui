// Build is a running/runned instance of pipe
export class Build {
    ID: string;
    // Trigger  :string;
    Title: string;
    PipeID: string;
    Description: string;
    Project: string;
    Status: BuildStatus;
    Started: Date;
    Finished: Date;
    Updated: Date;
    CurrentStep: number;
    Steps: WorkStep[];
    Author: string;
}


// WorkStep is a step during a Build
export class WorkStep {
    StepNo: number;
    Title: string;
    Status: BuildStatus;
    Started: Date;
    Finished: Date;
}

export class BuildStatus {
    State: string;
    StateDetail: string;
    Message: string;
}

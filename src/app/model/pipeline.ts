export class Pipeline {
    ID: string;
    Title: string;
    Description: string;
    TaskGroups: TaskGroup[];
    Services: Task;
    Created: Date;
    Updated: Date;
    // Trigger     []TriggerConfig
    // Matrix      MatrixEnv
}

export class TaskGroup {
    Title: string;
    Label: string;
    Tasks: Task[];
    Concurrent: Task[];
    Prerequisites: string;
}

export class Task {
    Title: string;
    Plugin: string;
    Command: string[];
    Args: string[];
    PullPolicy: string;
    Ports: number[];
    Timeout: number;
    // Environment map[string]string
    // Credentials map[string]string
}


// Build is a running/runned instance of pipe
export class Build {
    ID: string;
    // Trigger  :string;
    Title: string;
    Description: string;
    Project: string;
    // Status      BuildStatus
    Started: Date;
    Finished: Date;
    Updated: Date;
    Works: Work[];
    Author: string;
}

// Work is a instance of build, a single build may trigger multiple work
export class Work {
    WorkNo: number;
    Title: string;
    Description: string;
    // Status      WorkStatus
    Started: Date;
    Finished: Date;
    Steps: WorkStep[];
}

// WorkStep is a step during a Work
export class WorkStep {
    StepNo: number;
    Title: string;
    // Status   StepStatus
    Started: Date;
    Finished: Date;
}

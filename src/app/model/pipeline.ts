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



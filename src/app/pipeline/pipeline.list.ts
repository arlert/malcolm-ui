import { Component, OnInit } from '@angular/core';
import { Pipeline } from '../model/pipeline';
import { PipelineService } from '../service/pipeline';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pipeline-list',
    templateUrl: './pipeline.list.html',
    styleUrls: ['../app.component.css']
})
export class PipelineListComponent implements OnInit {
    columns = [
        { name: 'ID', prop: 'ID' },
        { name: 'Title', prop: 'Title' },
        { name: 'Description', prop: 'Description' },
        { name: 'Updated', prop: 'Updated' },
    ];
    pipelines: Pipeline[] = [];
    constructor(private pipelineService: PipelineService, private router: Router, ) { }
    ngOnInit(): void {
        this.pipelineService.getPipelines()
            .then(pipelines => {
                this.pipelines = pipelines;
            });
    }

    gotoBuild(id: string): void {
        this.router.navigate(['/pipebuilds', id]);
    }
    newpipe(): void {
        console.log('newpipe');
    }
    config(): void {
        console.log('config');
    }
    queue(): void {
        console.log('queue');
    }
}

import { Component, OnInit } from '@angular/core';
import { Build } from '../model/build';
import { BuildService } from '../service/build';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-build-detail',
    templateUrl: './build.detail.html',
    styleUrls: ['../app.component.css']
})
export class BuildDetailComponent implements OnInit {
    columns = [
        { name: 'ID', prop: 'ID' },
        { name: 'Title', prop: 'Title' },
        { name: 'Description', prop: 'Description' },
        { name: 'Status', prop: 'Status' },
        { name: 'Started', prop: 'Started' },
        { name: 'Finished', prop: 'Finished' },
    ];
    build: Build;
    pipeid: string;
    buildid: string;
    logOn: Boolean;
    refreshOn: Boolean;
    timer;
    constructor(private buildService: BuildService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => {
                this.pipeid = params['pipeid'];
                this.buildid = params['buildid'];
                console.log(this.pipeid, this.buildid);
                return this.buildService.getBuild(this.pipeid, this.buildid);
            })
            .subscribe((build: Build) => {
                this.build = build;
            });
        //this.refresh();
    }
    refresh(): void {
        this.refreshOn = true;
        this.timer = setInterval(() => {
            this.buildService.getBuild(this.pipeid, this.buildid).then(
                (build: Build) => {
                    this.build = build;
                }
            );
        }, 3000);
    }

    stopRefresh(): void {
        this.refreshOn = false;
        clearInterval(this.timer);
    }

    pause(): void {
        this.buildService.patchBuild(this.pipeid, this.build.ID, 'pause').then(
            (buildout: Build) => {
                alert('pause build success ' + buildout.ID);
            }
        );
    }

    resume(): void {
        this.buildService.patchBuild(this.pipeid, this.build.ID, 'resume').then(
            (buildout: Build) => {
                alert('resume build success ' + buildout.ID);
            }
        );
    }

    stop(): void {
        this.buildService.patchBuild(this.pipeid, this.build.ID, 'stop').then(
            (buildout: Build) => {
                alert('stop build success ' + buildout.ID);
            }
        );
    }

    canPause(): Boolean {
        const build: Build = this.build;
        if (build.Status.State === 'pending' || build.Status.State === 'running') {
            return true;
        }
        return false;
    }

    canResume(): Boolean {
        const build: Build = this.build;
        return build.Status.State === 'paused';
    }

    canStop(): Boolean {
        const build: Build = this.build;
        return build.Status.State !== 'complete';
    }

    toogleLog(): void {
        this.logOn = !this.logOn;
    }
}

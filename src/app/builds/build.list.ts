import { Component, OnInit, OnDestroy } from '@angular/core';
import { Build } from '../model/build';
import { BuildService } from '../service/build';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-build-list',
    templateUrl: './build.list.html',
    styleUrls: ['../app.component.css']
})
export class BuildListComponent implements OnInit, OnDestroy {
    columns = [
        { name: 'ID', prop: 'ID' },
        { name: 'Title', prop: 'Title' },
        { name: 'Description', prop: 'Description' },
        { name: 'Status', prop: 'Status' },
        { name: 'Started', prop: 'Started' },
        { name: 'Finished', prop: 'Finished' },
    ];
    builds: Build[] = [];
    pipeid: string;
    refreshOn: Boolean;
    timer;
    constructor(private buildService: BuildService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => {
                this.pipeid = params['id'];
                return this.buildService.getBuilds(this.pipeid);
            })
            .subscribe((builds: Build[]) => {
                this.builds = builds;
            });
        this.refresh();
    }

    ngOnDestroy(): void {
        console.log('OnDestroy');
        this.stopRefresh();
    }

    refresh(): void {
        this.refreshOn = true;
        this.timer = setInterval(() => {
            if (this.pipeid) {
                this.buildService.getBuilds(this.pipeid).then(
                    (builds: Build[]) => {
                        this.builds = builds;
                    }
                );
            }
        }, 3000);
    }

    stopRefresh(): void {
        this.refreshOn = false;
        clearInterval(this.timer);
    }

    newbuild(): void {
        this.buildService.createBuild(this.pipeid).then(
            (build: Build) => {
                alert('build success ' + build.ID);
            }
        );
    }

    pause(build: Build): void {
        this.buildService.patchBuild(this.pipeid, build.ID, 'pause').then(
            (buildout: Build) => {
                alert('pause build success ' + buildout.ID);
            }
        );
    }
    resume(build: Build): void {
        this.buildService.patchBuild(this.pipeid, build.ID, 'resume').then(
            (buildout: Build) => {
                alert('resume build success ' + buildout.ID);
            }
        );
    }

    stop(build: Build): void {
        this.buildService.patchBuild(this.pipeid, build.ID, 'stop').then(
            (buildout: Build) => {
                alert('stop build success ' + buildout.ID);
            }
        );
    }

    canPause(build: Build): Boolean {
        if (build.Status.State === 'pending' || build.Status.State === 'running') {
            return true;
        }
        return false;
    }

    canResume(build: Build): Boolean {
        return build.Status.State === 'paused';
    }

    canStop(build: Build): Boolean {
        return build.Status.State !== 'complete';
    }
}

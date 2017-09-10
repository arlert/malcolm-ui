import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Build } from '../model/build';
import { Http } from '@angular/http';


@Injectable()
export class BuildService {
    private pipelineUrl = 'http://malcolm-cs.qiniu.io/v1/pipe';  // URL to web api
    private queueUrl = 'http://malcolm-cs.qiniu.io/v1/build/queue';
    constructor(private http: Http) { }

    getBuilds(pipeid: string): Promise<Build[]> {
        return this.http.get(this.pipelineUrl + '/' + pipeid + '/build/all')
            .toPromise()
            .then(response => response.json() as Build[])
            .catch(this.handleError);
    }

    getBuild(pipeid: string, buildid: string): Promise<Build> {
        return this.http.get(this.pipelineUrl + '/' + pipeid + '/build/' + buildid)
            .toPromise()
            .then(response => response.json() as Build)
            .catch(this.handleError);
    }

    createBuild(pipeid: string): Promise<Build> {
        return this.http.post(this.pipelineUrl + '/' + pipeid + '/build', null)
            .toPromise()
            .then(response => response.json() as Build)
            .catch(this.handleError);
    }

    patchBuild(pipeid: string, buildid: string, action: string): Promise<Build> {
        return this.http.patch(this.pipelineUrl + '/' + pipeid +
            '/build/' + buildid + '?action=' + action, null)
            .toPromise()
            .then(response => response.json() as Build)
            .catch(this.handleError);
    }

    getBuildQueue(): Promise<Build[]> {
        return this.http.get(this.queueUrl, null)
            .toPromise()
            .then(response => response.json() as Build[])
            .catch(this.handleError);
    }

    // deleteBuild(id: string): Promise<void> {
    //     return this.http.delete(this.pipelineUrl + '/' + id)
    //         .toPromise()
    //         .then(() => null)
    //         .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

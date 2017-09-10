import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Pipeline } from '../model/pipeline';
import { Http } from '@angular/http';


@Injectable()
export class PipelineService {
    private pipelineUrl = 'http://malcolm-cs.qiniu.io/v1/pipe';  // URL to web api

    constructor(private http: Http, ) { }

    getPipelines(): Promise<Pipeline[]> {
        return this.http.get(this.pipelineUrl)
            .toPromise()
            .then(response => response.json() as Pipeline[])
            .catch(this.handleError);
    }

    getPipeline(id: string): Promise<Pipeline> {
        return this.http.get(this.pipelineUrl + '/' + id)
            .toPromise()
            .then(response => response.json() as Pipeline)
            .catch(this.handleError);
    }

    createPipeline(pipeline: Pipeline): Promise<Pipeline> {
        return this.http.post(this.pipelineUrl, JSON.stringify(pipeline))
            .toPromise()
            .then(response => response.json() as Pipeline)
            .catch(this.handleError);
    }

    deletePipeline(id: string): Promise<void> {
        return this.http.delete(this.pipelineUrl + '/' + id)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

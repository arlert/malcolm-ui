import { observable, action, extendObservable } from 'mobx'
import axios from 'axios'

class PipeState {

    constructor() {
        extendObservable(this, {
            pipelines: []
        })
        this.fetchPipes = this.fetchPipes.bind(this)
    }
    @action
    async fetchPipes() {
        try {
            let pipelines = await this.listpipes()
            this.pipelines = pipelines
            console.log(this.pipelines)
        } catch (err) {
            console.log(err)
        }
    }

    listpipes() {
        console.log("fetching")
        return axios.get(`http://localhost:7700/v1/pipe`)
    }
}

export default PipeState;
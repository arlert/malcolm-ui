import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipelineListComponent } from './pipeline/pipeline.list';
import { BuildListComponent } from './builds/build.list';
import { BuildDetailComponent } from './builds/build.detail';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: PipelineListComponent },
    { path: 'pipebuilds/:id', component: BuildListComponent },
    { path: 'pipebuilds/:pipeid/build/:buildid', component: BuildDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

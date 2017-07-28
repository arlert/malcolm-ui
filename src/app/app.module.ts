import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PipelineService } from './service/pipeline';
import { BuildService } from './service/build';
import { PipelineListComponent } from './pipeline/pipeline.list';
import { BuildListComponent } from './builds/build.list';
import { BuildDetailComponent } from './builds/build.detail';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdListModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        PipelineListComponent,
        BuildListComponent,
        BuildDetailComponent,
    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule,
        MdToolbarModule,
        MdSidenavModule,
        MdListModule,
        NgxDatatableModule
    ],
    providers: [PipelineService, BuildService],
    bootstrap: [AppComponent]
})
export class AppModule { }

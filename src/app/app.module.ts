import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { HeaderComponent } from './includes/header/header.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { CustomComponent } from './observable/custom/custom.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { MapComponent } from './observable/map/map.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';


@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObservableComponent,
    HeaderComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    CustomComponent,
    ToArrayComponent,
    MapComponent,
    FilterComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent,
    ConcatmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';
import { ReversePipe } from '../pipes/reversePipe';
import { FalseProductComponent } from './false-product/false-product.component';
import { FiokariINocniStociciComponent } from './fiokari-i-nocni-stocici/fiokari-i-nocni-stocici.component';
import { GarderoberiIOrmariComponent } from './garderoberi-i-ormari/garderoberi-i-ormari.component';
import { KancelarijskiStoloviComponent } from './kancelarijski-stolovi/kancelarijski-stolovi.component';
import { KatalogBojaComponent } from './katalog-boja/katalog-boja.component';
import { KlubIStoloviZaRucavanjeComponent } from './klub-i-stolovi-za-rucavanje/klub-i-stolovi-za-rucavanje.component';
import { KomodeComponent } from './komode/komode.component';
import { KuhinjeComponent } from './kuhinje/kuhinje.component';
import { KupatilskiNamestajComponent } from './kupatilski-namestaj/kupatilski-namestaj.component';
import { OstaloComponent } from './ostalo/ostalo.component';
import { PoliceComponent } from './police/police.component';
import { PredsobljaICipelariComponent } from './predsoblja-i-cipelari/predsoblja-i-cipelari.component';
import { ProductComponent } from './product/product.component';
import { getTranslatePaginatorIntl } from './translate-paginator-intl';
import { TvKomodeComponent } from './tv-komode/tv-komode.component';

const routes: Routes = [
    { path: 'kuhinje', component: KuhinjeComponent },
    { path: 'police', component: PoliceComponent},
    { path: 'tv-komode', component: TvKomodeComponent},
    { path: 'garderoberi-i-ormari', component: GarderoberiIOrmariComponent},
    { path: 'kancelarijski-stolovi', component: KancelarijskiStoloviComponent},
    { path: 'katalog-boja', component: KatalogBojaComponent},
    { path: 'komode', component: KomodeComponent},
    { path: 'fiokari-i-nocni-stocici', component: FiokariINocniStociciComponent},
    { path: 'kupatilski-namestaj', component: KupatilskiNamestajComponent},
    { path: 'predsoblja-i-cipelari', component: PredsobljaICipelariComponent},
    { path: 'klub-i-stolovi-za-rucavanje', component: KlubIStoloviZaRucavanjeComponent},
    { path: 'ostalo', component: OstaloComponent},
];

@NgModule({
    declarations: [
        ProductComponent,
        ReversePipe,
        FalseProductComponent,
        KuhinjeComponent,
        PoliceComponent,
        TvKomodeComponent,
        KlubIStoloviZaRucavanjeComponent,
        KancelarijskiStoloviComponent,
        PredsobljaICipelariComponent,
        KomodeComponent,
        FiokariINocniStociciComponent,
        GarderoberiIOrmariComponent,
        KupatilskiNamestajComponent,
        OstaloComponent,
        KatalogBojaComponent,
    ],
    imports: [
        CommonModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        CrystalLightboxModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        { provide: MatPaginatorIntl, useValue: getTranslatePaginatorIntl()} // pagination
    ]
})
export class ProductsModule {}

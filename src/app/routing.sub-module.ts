import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GioithieuComponent } from "./view/content/gioithieu/gioithieu.component";
import { HuongdanComponent } from "./view/content/huongdan/huongdan.component";
import { LienheComponent } from "./view/content/lienhe/lienhe.component";
import { HomeComponent } from "./view/content/home/home.component";
import { ChuLaiSaKyComponent } from "./view/content/trip/chu-lai-sa-ky/chu-lai-sa-ky.component";
import { DaNangQuangNgaiComponent } from "./view/content/trip/da-nang-quang-ngai/da-nang-quang-ngai.component";
import { DaNangSaKyComponent } from "./view/content/trip/da-nang-sa-ky/da-nang-sa-ky.component";
import { HoiAnSaKyComponent } from "./view/content/trip/hoi-an-sa-ky/hoi-an-sa-ky.component";
import { QuangNgaiChuLaiComponent } from "./view/content/trip/quang-ngai-chu-lai/quang-ngai-chu-lai.component";
import { QuangNgaiHueComponent } from "./view/content/trip/quang-ngai-hue/quang-ngai-hue.component";
import { QuangNgaiQuyNhonComponent } from "./view/content/trip/quang-ngai-quy-nhon/quang-ngai-quy-nhon.component";
import { QuangNgaiSaKyComponent } from "./view/content/trip/quang-ngai-sa-ky/quang-ngai-sa-ky.component";
import { TamKySaKyComponent } from "./view/content/trip/tam-ky-sa-ky/tam-ky-sa-ky.component";
import { ThueXeDamCuoiDaNangQuangNgaiComponent } from "./view/content/trip/thue-xe-dam-cuoi-da-nang-quang-ngai/thue-xe-dam-cuoi-da-nang-quang-ngai.component";

const appRoutes: Routes = [
    // { path: '', component: HomeComponent }, 
    { path: 'cho-thue-xe-chu-lai-sa-ky-gia-re', component: ChuLaiSaKyComponent },
    { path: 'cho-thue-xe-da-nang-quang-ngai-gia-re', component: DaNangQuangNgaiComponent },
    { path: 'cho-thue-xe-da-nang-sa-ky-gia-re', component: DaNangSaKyComponent },
    { path: 'cho-thue-xe-hoi-an-sa-ky-gia-re', component: HoiAnSaKyComponent },
    { path: 'cho-thue-xe-quang-ngai-chu-lai-gia-re', component: QuangNgaiChuLaiComponent },
    { path: 'cho-thue-xe-quang-ngai-hue-gia-re', component: QuangNgaiHueComponent },
    { path: 'cho-thue-xe-quang-ngai-quy-nhon-gia-re', component: QuangNgaiQuyNhonComponent },
    { path: 'cho-thue-xe-quang-ngai-sa-ky-gia-re', component: QuangNgaiSaKyComponent },
    { path: 'cho-thue-xe-tam-ky-sa-ky-gia-re', component: TamKySaKyComponent },
    { path: 'cho-thue-xe-dam-cuoi-da-nang-quang-ngai-gia-re', component: ThueXeDamCuoiDaNangQuangNgaiComponent },
    { path: 'cho-thue-xe-tu-lai-da-nang-quang-ngai-gia-re', component: ChuLaiSaKyComponent },
  
    { path: 'trang-chu', component: HomeComponent },
    { path: 'gioi-thieu', component: GioithieuComponent },
    { path: 'huong-dan', component: HuongdanComponent },
    { path: 'lien-he', component: LienheComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
        // other imports here
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
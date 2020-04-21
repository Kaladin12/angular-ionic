import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path:'home',
    children:[{
        path:'',
        loadChildren:'./home/home.module#HomePageModule'
      },
      {
        path: ':itemId',
        loadChildren: () => import('./home/items/items.module').then( m => m.ItemsPageModule)
      }
    ]
  },
  {
    path: 'home/addItem',
    loadChildren: './home/addItems/addItems.module#AddItemsPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

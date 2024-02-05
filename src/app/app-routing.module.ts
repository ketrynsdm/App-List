import { NgModule } from "@angular/core";

import { LoginComponent } from "./pages/login/login.component";
import { ContactListComponent } from "./pages/contact-list/contact-list.component";
import { ContactByIdComponent } from "./pages/contact-by-id/contact-by-id.component";
import { RouterModule, Routes } from "@angular/router";
import { AddContactComponent } from "./pages/add-contact/add-contact.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "lista",
    component: ContactListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "contato-unico",
    component: ContactByIdComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "adicionar",
    component: AddContactComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "/login",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

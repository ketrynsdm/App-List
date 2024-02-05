import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AddContactComponent } from "./add-contact/add-contact.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ContactByIdComponent } from "./contact-by-id/contact-by-id.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpService } from "../services";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { SharedModule } from "../shared/shared.module";
import { AuthGuard } from "../guards/auth.guard";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AddContactComponent,
    LoginComponent,
    ContactByIdComponent,
    ContactListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatIconModule,
    MatPaginatorModule,
    SharedModule,
  ],
  providers: [HttpService],
})
export class PagesModule {}

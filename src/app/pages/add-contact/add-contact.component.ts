import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";

@Component({
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.scss"],
})
export class AddContactComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.verifyToken();
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  formLogin = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
  });

  msgError = false;
  hide = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  enviar(): void {
    const { email, password } = this.formLogin.getRawValue();
    this.loginService.login(email, password).subscribe({
      next: (data) => {
        localStorage.setItem("token", JSON.stringify(data));
        this.router.navigateByUrl("/lista");
      },
      error: (err) => {
        this.msgError = true;
      },
    });
  }

  OnClear(): void {
    this.formLogin.reset();
  }
}

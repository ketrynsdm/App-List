import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "src/app/services";
import { LoginService } from "src/app/services/login.service";

@Component({
  templateUrl: "./contact-by-id.component.html",
  styleUrls: ["./contact-by-id.component.scss"],
})
export class ContactByIdComponent implements OnInit {
  isDisabled: boolean = false;
  formContactById!: FormGroup;
  displayedColumns: string[] = ["nome", "email", "telefone", "foto", "data"];

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.loginService.verifyToken();
    this.route.queryParams.subscribe((params) => {
      this.httpService.getContatoById(params.id).subscribe((res: any) => {
        const formatDate = res.dataCadastro.split("T")[0];
        this.formContactById.setValue({
          ...res,
          dataCadastro: formatDate,
        });
      });
    });
  }

  createForm(): void {
    this.formContactById = this.formBuilder.group({
      id: [""],
      nome: [
        "",
        [
          Validators.required,
          Validators.maxLength(22),
          Validators.minLength(3),
        ],
      ],
      email: ["", [Validators.required, Validators.email]],
      telefone: [
        ,
        [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.maxLength(12),
          Validators.minLength(9),
        ],
      ],
      foto: [""],
      dataCadastro: [new Date().toDateString()],
    });
  }

  onSubmit(): void {
    const { ...formData } = this.formContactById.getRawValue();

    const factoryFormData = {
      ...formData,
    };
    this.httpService.putUpdateContato(factoryFormData).subscribe((data) => {
      this.router.navigate(["/lista"]);
    });
  }
}

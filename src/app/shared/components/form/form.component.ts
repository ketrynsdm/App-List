import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { List } from "src/app/model/list";
import { HttpService } from "src/app/services";

@Component({
  selector: "app-form-add",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  formContactoList = this.formBuilder.group({
    _id: [""],
    nome: [
      "",
      [Validators.required, Validators.maxLength(22), Validators.minLength(3)],
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
  });

  lista: List[] = [];

  constructor(
    private httpService: HttpService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.httpService.getContatos().subscribe((data) => {
      this.lista = data;
    });
  }

  onSubmit(): void {
    if (Object.values(this.formContactoList.value).some((value) => !!value)) {
      const { ...formData } = this.formContactoList.getRawValue();
      const factoryFormData = {
        ...formData,
      };
      this.httpService.postCreateContato(factoryFormData).subscribe((data) => {
        this.httpService.getContatos();
      });
    }
    this.router.navigate(["/lista"]);
  }
}

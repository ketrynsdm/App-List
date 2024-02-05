import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { List } from "src/app/model/list";
import { HttpService } from "src/app/services";
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  formTable = this.formBuilder.group({
    _id: [""],
    nome: [""],
    email: [""],
    telefone: [""],
    foto: [""],
    data: [new Date()],
  });

  listaAtualizada: List[] = [];
  displayedColumns: string[] = [
    "id",
    "nome",
    "email",
    "telefone",
    "data",
    "action",
    "actionDelete",
  ];

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._exibirListaDeContato();
  }

  onButtonClick(idContato: number): void {
    this.router.navigate(["/contato-unico"], {
      queryParams: { id: idContato },
    });
  }

  onDelete(id: number): void {
    this.httpService.deleteContato(id).subscribe((res) => {
      this._exibirListaDeContato();
    });
  }

  _exibirListaDeContato(): void {
    if (event !== null) {
      this.httpService.getContatos().subscribe((res) => {
        this.listaAtualizada = res;
      });
    }
  }
}

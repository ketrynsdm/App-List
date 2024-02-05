import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {

  constructor( private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.verifyToken();
  }

}

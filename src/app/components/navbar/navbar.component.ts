import {MatDialog} from '@angular/material/dialog';
import { Component, EventEmitter, Output } from '@angular/core';

import { LoginDilogComponent } from '../login-dilog/login-dilog.component';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
@Output() sidenavbartoggler: EventEmitter<any> = new EventEmitter();

  constructor(public dialog:MatDialog, public signupbox: MatDialog ){}

  openDialog(){
    this.dialog.open(LoginDilogComponent);
  }

  openSignupDialog(){
    this.signupbox.open(SignupDialogComponent);
  }

  sidenavToggler(){
    this.sidenavbartoggler.emit();
  }
}


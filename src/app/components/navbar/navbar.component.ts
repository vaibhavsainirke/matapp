import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NavColorService } from 'src/app/services/nav-color.service';
import { LoginDilogComponent } from '../login-dilog/login-dilog.component';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() sidenavbartoggler: EventEmitter<any> = new EventEmitter();

  color: string = '';

  constructor(
    public dialog: MatDialog,
    public signupbox: MatDialog,
    private colorService: NavColorService
  ) {
    this.colorService.getData().subscribe((data: any) => {
      this.color = data;
    });
  }

  openDialog() {
    this.dialog.open(LoginDilogComponent);
  }

  openSignupDialog() {
    this.signupbox.open(SignupDialogComponent);
  }

  sidenavToggler() {
    this.sidenavbartoggler.emit();
  }
}

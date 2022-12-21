import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css'],
})
export class FromeventComponent implements AfterViewInit {
  constructor(private designUtility:DesignUtilityService) {}

  @ViewChild('addBtn') addBtn: ElementRef | undefined;

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn?.nativeElement, 'click').subscribe((res) => {
      let countVal = 'video ' + count++;
      this.designUtility.print(countVal,'elContainer');
      this.designUtility.print(countVal,'elContainer2');
    });
  }





}

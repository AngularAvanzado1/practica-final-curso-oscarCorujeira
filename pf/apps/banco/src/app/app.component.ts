import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Test } from '@pf/shared/dominio';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'pf-banco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banco';

  test: Test = { test: 'Test1'}
}

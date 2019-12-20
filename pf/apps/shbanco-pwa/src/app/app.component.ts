import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { Test } from '@pf/shared/dominio';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'pf-banco-pwa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'banco';

  test: Test = { test: 'Test1' }

  constructor(
    private swUpdate: SwUpdate
  ) { }

  ngOnInit() {
    this.checkVersionUpdates();
  }

  private checkVersionUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        if (event.current.appData) {
          const appData: any = event.current.appData;
          let msg = `New version ${appData.version} available.`;
          msg += `${appData.changelog}.`;
          msg += 'Reaload now?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      });
    }
  }
}

import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pf-banco-home-filter-ui',
  templateUrl: './home-filter-ui.component.html',
  styleUrls: ['./home-filter-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFilterUiComponent implements OnInit {

  @Output() chosenRegion = new EventEmitter();
  filterFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.filterFormGroup = this.createFilterForm();
  }

  ngOnInit() { }

  onFiltrar() {
    if (Number.isInteger(this.filterFormGroup.value.region)) {
      this.chosenRegion.emit(this.filterFormGroup.value.region);
    }
    else {
      this.chosenRegion.emit('');
    }
    //Se reestablece el filtro:
    this.filterFormGroup.setValue({
      region: '',
    });
  }

  private createFilterForm(): FormGroup {
    return this.fb.group({
      region: '',
    });
  }

}

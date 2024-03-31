import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.scss'
})
export class FilterFormComponent {

  filterForm: FormGroup;

  @Output() filterEvent = new EventEmitter();
  @Output() resetEvent = new EventEmitter();

  constructor() {
    this.filterForm = new FormGroup({
      search: new FormControl<string>(''),
      criterion: new FormControl<'name' | 'description' | 'location' | 'time' | 'owner'>('name', [Validators.required])
    });
  }
  onSubmit() {
    if (this.filterForm.invalid) { return }
    this.filterEvent.emit({ search: this.filterForm.value.search, criterion: this.filterForm.value.criterion })
  }
  onReset() {
    this.resetEvent.emit();
    this.filterForm.reset();
    this.filterForm.controls['criterion'].setValue('name');
  }
}

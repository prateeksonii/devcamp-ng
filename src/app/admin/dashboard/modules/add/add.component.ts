import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AdminModulesService } from '../admin-modules.service';

@Component({
  selector: 'app-admin-modules-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  constructor(private adminModulesService: AdminModulesService) {}

  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  @Input()
  showModal!: boolean;

  @Output()
  closeFunc = new EventEmitter();

  close() {
    this.closeFunc.emit();
  }

  avoidPropagation(event: Event) {
    event.stopPropagation();
  }

  onSubmit() {
    if (this.form.valid) {
      this.adminModulesService
        .createModule({ name: this.form.value.name! })
        .subscribe((_) => this.close());
    }
  }
}

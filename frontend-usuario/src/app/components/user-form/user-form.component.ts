import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      nome: [''],
      sobrenome: [''],
      dataNascimento: ['']
    });
  }

  onSubmit(): void {
    this.userService.createUser(this.userForm.value).subscribe(response => {
      console.log('Usuário criado com sucesso', response);
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Router } from '@angular/router';
import { InviteToFriend, clearMessages } from '../invitation.actions';
import { ToastrService } from 'ngx-toastr';
import {
  selectInvitationState,
  isLoading,
  messages
} from '../invitation.selectors';
import { state } from '@angular/animations';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  inviteForm: FormGroup;

  formPlaceholders: String = 'auto';

  formRequired: Boolean = true;

  status$: Observable<any>;

  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.status$ = this.store.select(messages).debounceTime(1);
    //state => state.invitation

    this.isLoading$ = this.store.select(isLoading);
  }

  ngOnInit() {
    this.inviteForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      user: ['', Validators.required]
    });

    this.status$.subscribe(state => {
      if (state.failures && state.failures.errors) {
        const elements = Object.keys(state.failures.errors);

        elements.forEach(element => {
          this.inviteForm
            .get(element)
            .setErrors({ server: state.failures.errors[element][0] });
        });

        this.toastr.error(state.failures.message, 'Error!');

        this.store.dispatch(new clearMessages());
      } else if (state.success) {
        this.toastr.success(state.success.message, 'Success!');

        this.store.dispatch(new clearMessages());

        this.router.navigateByUrl('/invitations');
      }
    });
  }

  onSubmit(): void {
    const payload = this.inviteForm.value;
    this.store.dispatch(new InviteToFriend(payload));
  }
}

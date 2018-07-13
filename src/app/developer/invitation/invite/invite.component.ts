import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AppState, selectDeveloperState } from '../../store/app.states';
import { InviteToFriend } from '../../store/actions/developer.actions';
import { Observable } from 'rxjs/Observable';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { LayoutService } from './../../../layouts/layout.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  inviteForm: FormGroup;
  formPlaceholders: String = 'auto';
  formRequired: Boolean = true;
  getState: Observable<any>;

  errorMessage;
  
  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    public layoutService: LayoutService
  ) { 
    this.getState = this.store.select(selectDeveloperState);
    this.layoutService.setLoader(true);
  }

  ngOnInit() {
    this.inviteForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'user': ['', Validators.required]
    });

    this.layoutService.setLoader(true);

    this.getState.subscribe((state) => {
      this.subscribeHandler(state);
    });
    // this.toastr.success('Hello world!', 'Toastr fun!');
  }

  onSubmit(): void {
    const payload = this.inviteForm.value;
    this.store.dispatch(new InviteToFriend(payload));
  }

  subscribeHandler(state) {    
    this.showHideLoader(state.pending);

    if(state.errorMessage && state.errorMessage.errors){
      this.errorMessage = state.errorMessage.errors;

      const elements = (Object.keys(state.errorMessage.errors));

      elements.forEach(element => {
        this.inviteForm.get(element).setErrors({server: state.errorMessage.errors[element][0]});
      });
      
      this.toastr.error(state.errorMessage.message, 'Error!');
    } else if (state.successMessage) {
      this.toastr.success(state.successMessage, 'Success!');
      this.router.navigateByUrl('/developer/invitations/list/1');
    }

  }

  showHideLoader(state){
    switch(state){
      case true: {
        return this.layoutService.setLoader(true);
      };
      case false: {
        return this.layoutService.setLoader(false);
      }
    }
  }


}

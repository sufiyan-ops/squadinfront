import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { Router, ActivatedRoute } from '@angular/router';
//import { Http } from '@angular/http';
//import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isEditMode: boolean
  user: any = []
  id
  userType = [
    { id: 1, type: "Player" },
    { id: 2, type: "Organizer" },
    { id: 3, type: "Department" }


  ]

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private service: UserService,

    private router: Router) { }


  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        this.isEditMode = true
        this.id = params.get('id');
        this.service.getById(this.id).subscribe(
          data => {
            this.user = data
          },
          (error: AppError) => {
            if (error instanceof NotFoundError)
              this.toastr.error('Not Found');
            else
              throw error
          }
        )
      }
    })


  }

  signupUser(sf) {
    this.router.navigate(['/login']);
    alert("Signup Successfully");
    let user = {
      name: sf.value.registration.fName,
      email: sf.value.registration.email,
      password: sf.value.registration.password,
      userType: sf.value.registration.userType,


    }

    this.service.create(user).subscribe(data => {
      this.toastr.success(`User ${data.name} successfully created!`);
    },
      (error: AppError) => {
        if (error instanceof BadInput)
          this.toastr.error('Incorrect Inputs');
        else
          throw error
      }
    )

    sf.reset();

  }

  updateUser() {
    this.service.update(this.user, "updateuser", this.id).subscribe(data => {
      this.toastr.success(`User ${data.name} successfully updated .`)
    },
      (error: AppError) => {
        if (error instanceof NotFoundError)
          this.toastr.error('Not Found');
        else
          throw error
      }
    )
  }


}

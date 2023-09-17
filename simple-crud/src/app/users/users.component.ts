import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm: any;
  users: any;

  constructor(public fb:FormBuilder,private service:CommonService) {
    this.userForm = this.fb.group({
      Name:[""],
      Email:[""],
      Mobile:[""],
      Age:[""],
      id:[],
    })
   }

  ngOnInit(): void {
    this.GetAllUsers();
    
  }

  SubmitForm(){
    debugger
    if(this.userForm.value.Name){
    var type = this.userForm.value.id==null?'Add':'Update';
    this.service.AddUpdateUser(this.userForm.value,type).subscribe(data=>{
      if(type=='Add'){
        Swal.fire({
          icon: 'success',
          title: 'User ('+this.userForm.value.Name+') Saved Successfully',
        })
      }else{
        Swal.fire({
          icon: 'success',
          title: 'User ('+this.userForm.value.Name+') Updated Successfully',
        })
      }
      this.userForm.reset();
      this.GetAllUsers();
      console.log(data);
    })
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Please Fill User Information',
    })
  }
  }

    GetAllUsers(){
      this.service.GetAllUsers().subscribe(data=>{
        console.log('users',data);
        this.users = data;
      })
    }

    DeleteConfirmation(ID:any){
      Swal.fire({
        icon: 'warning',
        title: 'Do you want to Delete this user?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          this.DeleteUserByID(ID)
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }

    DeleteUserByID(ID:any){
      debugger
      this.service.DeleteUserByID(ID).subscribe(data=>{
        Swal.fire('Deleted!', '', 'success')
        this.GetAllUsers();
      })
    }
    GetUserByID(ID:any){
      debugger
      this.service.GetUserByID(ID).subscribe(data=>{
        console.log("user detail",data);
          $("#home").addClass('show');
          $("#home").addClass('active');

          $("#profile").removeClass('show');
          $("#profile").removeClass('active');
        this.userForm.patchValue({
          Name:data.Name,
          id:data.id,
          Email:data.Email,
          Mobile:data.Mobile,
          Age:data.Age
        })
      })
    }

}

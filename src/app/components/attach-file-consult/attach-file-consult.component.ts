import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProgramService } from '../../services/program.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-attach-file-consult',
  templateUrl: './attach-file-consult.component.html',
  styleUrls: ['./attach-file-consult.component.css']
})
export class AttachFileConsultComponent implements OnInit {

  fRole: string;

  codeOfUser: FormGroup;

  programs: any = [];
  employeeName = 'nombre de empleado';

  constructor(private programService: ProgramService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.fRole = this.tokenStorage.getRole();
    this.codeOfUser = new FormGroup({
      userCode: new FormControl('')
    });
  }
  findDataByCode() {
    const employeeCode = parseInt(this.codeOfUser.value.userCode, 10);
    if (!isNaN(employeeCode)) {
      this.programService.consultPrograms(employeeCode, this.fRole, 0).subscribe( data => {
        this.programs = data.programs;
        this.employeeName = data.employeeName;
      });
    }
  }

}

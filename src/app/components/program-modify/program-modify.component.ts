import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChronogramService } from '../../services/chronogram.service';
import { ProgramService } from '../../services/program.service';

@Component({
  selector: 'app-program-modify',
  templateUrl: './program-modify.component.html',
  styleUrls: ['./program-modify.component.css']
})
export class ProgramModifyComponent implements OnInit {

  fRole: string;
  programRegister: FormGroup;

  chronogramCodeRoute = 0;
  miningEnt = '';
  empFullName = '';
  initialDate = '';
  finalDate = '';

  backResponse: any = {};
  error = '';

  constructor(private route: ActivatedRoute,
              private programService: ProgramService,
              private chronogramService: ChronogramService) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProgramService } from '../../services/program.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attach-file',
  templateUrl: './attach-file.component.html',
  styleUrls: ['./attach-file.component.css']
})
export class AttachFileComponent implements OnInit {

  fRole: string;

  filesUploaded: FileList;

  programCodeRoute = 0;

  employeeName = '';
  miningName = '';

  constructor(private route: ActivatedRoute,
              private programService: ProgramService) { }

  ngOnInit() {
    localStorage.setItem('tempCPV', '1');
    this.fRole = localStorage.getItem('empRole');
    this.programCodeRoute = parseInt(this.route.snapshot.paramMap.get('programCode'), 10);
    this.validateNanValue(this.programCodeRoute);
    this.findProgramForAttachFile(this.programCodeRoute);
  }

  attachFiles(event: any) {
    console.log(event);
    this.filesUploaded = event;
  }

  validateNanValue(programCodeRoute: number) {
    if (isNaN(programCodeRoute)) {
      this.programCodeRoute = 0;
    }
  }

  findProgramForAttachFile(programCodeRoute: number) {
    if (programCodeRoute !== 0) {
      this.programService. consultProgram(programCodeRoute).subscribe( data => {
      this.employeeName = data.employeeName;
      this.miningName = data.miningName;
      });
    }
  }

  getDataTable(evt: any) {
    const mapReq = new Map<string, string>();
    for (const index of evt) {
      const key: any = document.getElementById(index.name);
      mapReq.set(key.value, index);
    }
    console.log(mapReq);
    this.programService.test(mapReq).subscribe( data => {
    console.log('Enviado');
    });
  }

}

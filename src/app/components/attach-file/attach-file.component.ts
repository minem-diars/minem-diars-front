import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProgramService } from '../../services/program.service';
import { ActivatedRoute } from '@angular/router';
import { AttachFileService } from 'src/app/services/attach-file.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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

  isEnable = true;

  backResponse: any = {};
  error = '';

  constructor(private route: ActivatedRoute,
              private programService: ProgramService,
              private attachFileService: AttachFileService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.fRole = this.tokenStorage.getRole();
    localStorage.setItem('tempCPV', '1');
    this.programCodeRoute = parseInt(this.route.snapshot.paramMap.get('programCode'), 10);
    this.validateNanValue(this.programCodeRoute);
    this.findProgramForAttachFile(this.programCodeRoute);
  }

  attachFiles(event: any) {
    console.log(event);
    this.filesUploaded = event;
    this.isEnable = false;
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
    let contador = 0;
    for (const index of evt) {
      const key: any = document.getElementById(index.name);
      this.attachFileService.uploadFile(this.programCodeRoute, key.value, index).subscribe( data => {
        if (parseInt(data.status, 10) === 1) {
          contador = contador + 1;
        }
      });
    }
    if (contador === 0) {
      this.backResponse.description = 'Archivos adjuntados correctamente.';
      document.getElementById('modalUploadFileButton').click();
    } else {
      this.error = 'Ocurrio un error al cargar algunos documentos.';
      document.getElementById('modalToErrorButton').click();
    }
  }

}

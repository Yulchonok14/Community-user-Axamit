import { Employee } from './employee.model';

export class Speaker {
  public archiveId: number;
  public employee: Employee;
  public nameReport: string;
  public headlineReport: string;
  public fileUrl: string;
  public videoUrl: string;

  constructor(archiveId: number, employee: Employee, nameReport: string, headlineReport: string, fileUrl: string,
              videoUrl: string){
    this.archiveId = archiveId;
    this.employee = employee;
    this.nameReport = nameReport;
    this.headlineReport = headlineReport;
    this.fileUrl = fileUrl;
    this.videoUrl = videoUrl;
  }
}

import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-get-pdf',
  templateUrl: './get-pdf.component.html',
  styleUrls: ['./get-pdf.component.scss']
})
export class GetPdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('page');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

}

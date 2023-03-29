import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css']
})
export class HomeAboutComponent implements OnInit {
  closeResult: any;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content:any) {  
    this.modalService.open(content, {centered: true, size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {  
      this.closeResult = `Closed with: ${result}`;  
    }, (reason) => {  
       
    });  
  }
}

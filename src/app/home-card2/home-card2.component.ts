import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-card2',
  templateUrl: './home-card2.component.html',
  styleUrls: ['./home-card2.component.css']
})
export class HomeCard2Component implements OnInit {
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

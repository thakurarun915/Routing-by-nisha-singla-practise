import { Component, Input, OnInit } from "@angular/core";


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  @Input() uname: string | undefined;

}

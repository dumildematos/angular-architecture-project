import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '@src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angular-architecture-project';

  constructor(private afs: AngularFirestore){}

  ngOnInit(): void {
    this.afs.collection('test').snapshotChanges().subscribe(items =>{
      console.log(items.map(x => x.payload.doc.data()))
    })

  }
}

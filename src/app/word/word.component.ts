import {Component} from '@angular/core';

@Component({
    templateUrl:'./word.component.html',
    selector:'app-word',
    styleUrls:['./word.component.css'],
})

export class WordComponent{
    en="Hello";
    vi="Xin Chào"
    imageURL = "https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png";
    forgot = true;
    hiddenimg = ".d-block"
    foGot(){
        this.forgot = !this.forgot; 
    }
    
}

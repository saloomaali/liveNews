import { Component } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {

title = ""
description = ""
author = ""
dateOfPublish  = ""
image = ""

readValues=()=>{

  let data:any = [{"author":this.author,"title":this.title,"description":this.description,"urlToImage":this.image,"publishedAt":this.dateOfPublish}]
  console.log(data)
}

}

import { Component } from '@angular/core';
import { Chooser } from '@ionic-native/chooser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    img:String = "";

    constructor(
        private chooser: Chooser
    ) {}

    async file(){
        const file = await this.chooser.getFile("png,jpg,jpeg");

        if(file){
            this.img = file.dataURI;
        }else{
            console.log('canceled');
        }
    }

}

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Rover } from '@ionic-native/rover';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'main.html'
})
export class MainPage {

	constructor(public navCtrl: NavController, public rover : Rover) {
	}

	ionViewDidLoad() {
  		console.log('MainPage loaded');
	}

	startTracking() {
		this.rover.startTracking();
	}

	stopTracking() {
		this.rover.stopTracking();
  	}
}

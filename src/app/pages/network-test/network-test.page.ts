import { Component, OnInit } from '@angular/core';
import { WifiWizard2 } from '@ionic-native/wifi-wizard-2/ngx';

@Component({
  selector: 'app-network-test',
  templateUrl: './network-test.page.html',
  styleUrls: ['./network-test.page.scss'],
})
export class NetworkTestPage implements OnInit {

  public currentNetwork: string;
  public savedNetworks;
  public showSaved: boolean = false;

  constructor(private wifiWizard2: WifiWizard2) {
    this.wifiWizard2.getConnectedSSID().then(ssid => { this.currentNetwork = ssid; });
    this.wifiWizard2.listNetworks().then(networks => { this.savedNetworks = networks; });
    this.wifiWizard2.startScan
  }

  ngOnInit() {}

  ionViewDidEnter(){
    console.log(this.savedNetworks)
  }

  public toggleSaved(){
    if (!this.showSaved ){
      this.showSaved = true;
    }else{
      this.showSaved = false;
    }
    console.log(this.showSaved)
  }

}

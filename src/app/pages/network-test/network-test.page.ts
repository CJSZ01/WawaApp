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
  public availableNetworks;
  public showAvailable: boolean = false;
  public scanning: boolean = false;

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
  }

  public toggleAvailable(){
    if (!this.showAvailable ){
      this.showAvailable = true;
    }else{
      this.showAvailable = false;
    }
  }

  public async scanNetworks(){
    this.toggleAvailable();
    if(this.showAvailable){
      this.scanning = true;
      await this.wifiWizard2.scan().then(scanResults => {this.availableNetworks = scanResults});
      this.scanning = false;
      console.log(this.availableNetworks);
    }

  }

}

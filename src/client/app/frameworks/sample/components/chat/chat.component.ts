import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CookieService } from 'angular2-cookie/core'; 

declare var jQuery: any;

@Component({
    selector: 'chat',
    templateUrl: 'app/frameworks/sample/components/chat/chat.component.html',

    styles: [`
#small-chat {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  cursor: pointer;
}
#small-chat .badge {
  position: absolute;
  top: -3px;
  right: -4px;
}
.open-small-chat {
  height: 38px;
  width: 38px;
  display: block;
  background: #CD040B;
  padding: 9px 8px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
}
.open-small-chat:hover {
  color: white;
  background: #CD040B;
}
.small-chat-box {
  position: fixed;
  bottom: 20px;
  right: 75px;
  background: #fff;
  border: 1px solid #e7eaec;
  width: 245px;
  height: 320px;
  border-radius: 4px;
  z-index: 20;
}
.small-chat-box.ng-small-chat {
  display: block;
}
.body-small .small-chat-box {
  bottom: 70px;
  right: 20px;
}
.small-chat-box.active {
  display: block;
}
.small-chat-box .heading {
  background: #2f4050;
  padding: 8px 15px;
  font-weight: bold;
  color: #fff;
}
.small-chat-box .chat-date {
  opacity: 0.6;
  font-size: 10px;
  font-weight: normal;
}
.small-chat-box .content {
  padding: 5px 5px;
  height: 235px;
  overflow-y: scroll;
}
.small-chat-box .content .author-name {
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 11px;
}
.small-chat-box .content > div {
  padding-bottom: 20px;
}
.small-chat-box .content .chat-message {
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 11px;
  line-height: 14px;
  max-width: 80%;
  background: #f3f3f4;
  margin-bottom: 10px;
}
.small-chat-box .content .chat-message.active {
  background: #CD040B;
  color: #fff;
}
.small-chat-box .content .left {
  text-align: left;
  clear: both;
}
.small-chat-box .content .left .chat-message {
  float: left;
}
.small-chat-box .content .right {
  text-align: right;
  clear: both;
}
.small-chat-box .content .right .chat-message {
  float: right;
}
.small-chat-box .form-chat {
  padding: 5px 1px;
}



.badge {
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #777;
    border-radius: 10px;
}

.label-warning, .badge-warning {
    background-color: #f8ac59;
    color: #FFFFFF;
}
  `],
})

export class ChatComponent {
    isOpen: boolean = false;
    private chatList: Array<any> = [];
    private assistanceWorker:Worker;    
    private _chRef: ChangeDetectorRef;
    private _cookieService: CookieService
    constructor(el: ElementRef, chRef: ChangeDetectorRef, cookieService: CookieService) {
      //chRef.detectChanges(); //Whenever you need to force update view
      this._chRef = chRef;
      this._cookieService = cookieService;
    }

    ngOnInit() {
        this.initWebWorkers();
    }

  private initWebWorkers(){
    this.assistanceWorker = new Worker('/app/frameworks/workers/assistance-worker.js');
    this.assistanceWorker.postMessage({url_api_assistance: 'http://localhost:9000/analytics/demo/'+ this.getCookie('identifier')});
    this.assistanceWorker.addEventListener('message',(e:MessageEvent)=>{
        this.chatList.push(e.data);
        //console.log('e.data: ',e.data);
        this._chRef.detectChanges();
    });
  }


    getCookie(key: string){
     return this._cookieService.get(key);
   }

}
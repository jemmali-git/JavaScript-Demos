webpackJsonp([1],{86:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(33),r=n(87);o.platformBrowserDynamic().bootstrapModule(r.AppModule)},87:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,p=arguments.length,i=p<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(p<3?r(i):p>3?r(e,n,i):r(e,n))||i);return p>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(16),p=n(2),i=n(34),c=n(88),u=n(90),a=n(92),l=n(94),s=[{path:"app",children:[{path:"a",component:u.AViewComponent,children:[{path:"sub",component:l.SubViewComponent},{path:"**",redirectTo:""}]},{path:"b",component:a.BViewComponent,children:[{path:"sub",component:l.SubViewComponent}]}]},{path:"",pathMatch:"full",redirectTo:"app"},{path:"**",redirectTo:"/app"}],f=function(){function AppModule(){}return AppModule=o([p.NgModule({bootstrap:[c.AppComponent],imports:[r.BrowserModule,i.RouterModule.forRoot(s,{useHash:!0,enableTracing:!0})],declarations:[c.AppComponent,u.AViewComponent,a.BViewComponent,l.SubViewComponent],providers:[]})],AppModule)}();e.AppModule=f},88:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,p=arguments.length,i=p<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(p<3?r(i):p>3?r(e,n,i):r(e,n))||i);return p>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),p=function(){function AppComponent(){}return AppComponent=o([r.Component({selector:"my-app",styles:[n(89)],template:'\n\t\t<p>\n\t\t\t<a routerLink="/">Home View</a> &mdash;\n\t\t\t<a routerLink="/app/a">A View</a> &mdash;\n\t\t\t<a routerLink="/app/b">B View</a> &mdash;\n\t\t\t<a routerLink="/app/c">C View (not found)</a>\n\t\t</p>\n\n\t\t<p>\n\t\t\t<strong>Home View</strong>\n\t\t</p>\n\n\t\t<router-outlet></router-outlet>\n\t'})],AppComponent)}();e.AppComponent=p},89:function(t,e){t.exports=":host {\n  display: block ;\n  font-size: 18px ;\n}\n"},90:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,p=arguments.length,i=p<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(p<3?r(i):p>3?r(e,n,i):r(e,n))||i);return p>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),p=function(){function AViewComponent(){}return AViewComponent=o([r.Component({selector:"a-view",styles:[n(91)],template:'\n\t\t<p>\n\t\t\t<strong>A View</strong>\n\t\t</p>\n\n\t\t<p>\n\t\t\t<a routerLink="./sub">Sub-Link</a>\n\t\t</p>\n\n\t\t<router-outlet></router-outlet>\n\t'})],AViewComponent)}();e.AViewComponent=p},91:function(t,e){t.exports=":host {\n  border: 1px dashed #CCCCCC ;\n  display: block ;\n  padding: 1px 10px 1px 10px ;\n}\n"},92:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,p=arguments.length,i=p<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(p<3?r(i):p>3?r(e,n,i):r(e,n))||i);return p>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),p=function(){function BViewComponent(){}return BViewComponent=o([r.Component({selector:"b-view",styles:[n(93)],template:'\n\t\t<p>\n\t\t\t<strong>B View</strong>\n\t\t</p>\n\n\t\t<p>\n\t\t\t<a routerLink="./sub">Sub-Link</a>\n\t\t</p>\n\n\t\t<router-outlet></router-outlet>\n\t'})],BViewComponent)}();e.BViewComponent=p},93:function(t,e){t.exports=":host {\n  border: 1px dashed #CCCCCC ;\n  display: block ;\n  padding: 1px 10px 1px 10px ;\n}\n"},94:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,p=arguments.length,i=p<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(p<3?r(i):p>3?r(e,n,i):r(e,n))||i);return p>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),p=function(){function SubViewComponent(){}return SubViewComponent=o([r.Component({selector:"sub-view",styles:[n(95)],template:'\n\t\t<p>\n\t\t\tSub-View\n\t\t</p>\n\n\t\t<p>\n\t\t\t<a routerLink="./bad-path">Bad Path (not found)</a>\n\t\t</p>\n\t'})],SubViewComponent)}();e.SubViewComponent=p},95:function(t,e){t.exports=":host {\n  display: block ;\n}\n"}},[86]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{eGC9:function(t,a,r){"use strict";r.r(a),r.d(a,"ChartsDemoModule",(function(){return h}));var n=r("ofXK"),c=r("tyNb"),i=r("LPYB"),e=r("fXoL");let s=(()=>{class t{constructor(){this.lineChartData=[{label:"# of Votes",data:[10,19,3,5,2,3],borderWidth:1,fill:!1}],this.lineChartLabels=["2013","2014","2014","2015","2016","2017"],this.lineChartOptions={scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},elements:{point:{radius:0}}},this.lineChartColors=[{borderColor:"rgba(255,99,132,1)"}],this.barChartData=[{label:"# of Votes",data:[10,19,3,5,2,3],borderWidth:1,fill:!1}],this.barChartLabels=["2013","2014","2014","2015","2016","2017"],this.barChartOptions={scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},elements:{point:{radius:0}}},this.barChartColors=[{backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}],this.areaChartData=[{label:"# of Votes",data:[10,19,3,5,2,3],borderWidth:1,fill:!0}],this.areaChartLabels=["2013","2014","2014","2015","2016","2017"],this.areaChartOptions={},this.areaChartColors=[{borderColor:"rgba(255,99,132,1)",backgroundColor:"rgba(255,99,132,.2)"}],this.doughnutPieChartData=[{data:[30,40,30]}],this.doughnutPieChartLabels=["Pink","Blue","Yellow"],this.doughnutPieChartOptions={responsive:!0,animation:{animateScale:!0,animateRotate:!0}},this.doughnutPieChartColors=[{backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"]}],this.scatterChartData=[{label:"First Dataset",data:[{x:-10,y:0},{x:0,y:3},{x:-25,y:5},{x:40,y:5}],borderWidth:1},{label:"Second Dataset",data:[{x:10,y:5},{x:20,y:-30},{x:-25,y:15},{x:-10,y:5}],borderWidth:1}],this.scatterChartOptions={scales:{xAxes:[{type:"linear",position:"bottom"}]}},this.scatterChartColors=[{backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255,99,132,1)"]},{backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"]}]}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Fb({type:t,selectors:[["app-chartjs"]],decls:111,vars:29,consts:[[1,"page-header"],[1,"page-title"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:;"],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-6","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title"],["baseChart","",3,"chartType","datasets","labels","options","colors"],[1,"col-lg-6","grid-margin","grid-margin-lg-0","stretch-card"],["baseChart","",3,"chartType","datasets","options","colors"]],template:function(t,a){1&t&&(e.Rb(0,"div",0),e.Ec(1,"\n  "),e.Rb(2,"h3",1),e.Ec(3,"\n    ChartJs\n  "),e.Qb(),e.Ec(4,"\n  "),e.Rb(5,"nav",2),e.Ec(6,"\n    "),e.Rb(7,"ol",3),e.Ec(8,"\n      "),e.Rb(9,"li",4),e.Rb(10,"a",5),e.Ec(11,"Charts"),e.Qb(),e.Qb(),e.Ec(12,"\n      "),e.Rb(13,"li",6),e.Ec(14,"ChartJs"),e.Qb(),e.Ec(15,"\n    "),e.Qb(),e.Ec(16,"\n  "),e.Qb(),e.Ec(17,"\n"),e.Qb(),e.Ec(18,"\n"),e.Rb(19,"div",7),e.Ec(20,"\n  "),e.Rb(21,"div",8),e.Ec(22,"\n    "),e.Rb(23,"div",9),e.Ec(24,"\n      "),e.Rb(25,"div",10),e.Ec(26,"\n        "),e.Rb(27,"h4",11),e.Ec(28,"Line chart"),e.Qb(),e.Ec(29,"\n        "),e.Mb(30,"canvas",12),e.Ec(31,"\n      "),e.Qb(),e.Ec(32,"\n    "),e.Qb(),e.Ec(33,"\n  "),e.Qb(),e.Ec(34,"\n  "),e.Rb(35,"div",8),e.Ec(36,"\n    "),e.Rb(37,"div",9),e.Ec(38,"\n      "),e.Rb(39,"div",10),e.Ec(40,"\n        "),e.Rb(41,"h4",11),e.Ec(42,"Bar chart"),e.Qb(),e.Ec(43,"\n        "),e.Mb(44,"canvas",12),e.Ec(45,"\n      "),e.Qb(),e.Ec(46,"\n    "),e.Qb(),e.Ec(47,"\n  "),e.Qb(),e.Ec(48,"\n"),e.Qb(),e.Ec(49,"\n"),e.Rb(50,"div",7),e.Ec(51,"\n  "),e.Rb(52,"div",8),e.Ec(53,"\n    "),e.Rb(54,"div",9),e.Ec(55,"\n      "),e.Rb(56,"div",10),e.Ec(57,"\n        "),e.Rb(58,"h4",11),e.Ec(59,"Area chart"),e.Qb(),e.Ec(60,"\n        "),e.Mb(61,"canvas",12),e.Ec(62,"\n      "),e.Qb(),e.Ec(63,"\n    "),e.Qb(),e.Ec(64,"\n  "),e.Qb(),e.Ec(65,"\n  "),e.Rb(66,"div",8),e.Ec(67,"\n    "),e.Rb(68,"div",9),e.Ec(69,"\n      "),e.Rb(70,"div",10),e.Ec(71,"\n        "),e.Rb(72,"h4",11),e.Ec(73,"Doughnut chart"),e.Qb(),e.Ec(74,"\n        "),e.Mb(75,"canvas",12),e.Ec(76,"\n      "),e.Qb(),e.Ec(77,"\n    "),e.Qb(),e.Ec(78,"\n  "),e.Qb(),e.Ec(79,"\n"),e.Qb(),e.Ec(80,"\n"),e.Rb(81,"div",7),e.Ec(82,"\n  "),e.Rb(83,"div",13),e.Ec(84,"\n    "),e.Rb(85,"div",9),e.Ec(86,"\n      "),e.Rb(87,"div",10),e.Ec(88,"\n        "),e.Rb(89,"h4",11),e.Ec(90,"Pie chart"),e.Qb(),e.Ec(91,"\n        "),e.Mb(92,"canvas",12),e.Ec(93,"\n      "),e.Qb(),e.Ec(94,"\n    "),e.Qb(),e.Ec(95,"\n  "),e.Qb(),e.Ec(96,"\n  "),e.Rb(97,"div",13),e.Ec(98,"\n    "),e.Rb(99,"div",9),e.Ec(100,"\n      "),e.Rb(101,"div",10),e.Ec(102,"\n        "),e.Rb(103,"h4",11),e.Ec(104,"Scatter chart"),e.Qb(),e.Ec(105,"\n        "),e.Mb(106,"canvas",14),e.Ec(107,"\n      "),e.Qb(),e.Ec(108,"\n    "),e.Qb(),e.Ec(109,"\n  "),e.Qb(),e.Ec(110,"\n"),e.Qb()),2&t&&(e.xb(30),e.lc("chartType","line")("datasets",a.lineChartData)("labels",a.lineChartLabels)("options",a.lineChartOptions)("colors",a.lineChartColors),e.xb(14),e.lc("chartType","bar")("datasets",a.barChartData)("labels",a.barChartLabels)("options",a.barChartOptions)("colors",a.barChartColors),e.xb(17),e.lc("chartType","line")("datasets",a.areaChartData)("labels",a.areaChartLabels)("options",a.areaChartOptions)("colors",a.areaChartColors),e.xb(14),e.lc("chartType","doughnut")("datasets",a.doughnutPieChartData)("labels",a.doughnutPieChartLabels)("options",a.doughnutPieChartOptions)("colors",a.doughnutPieChartColors),e.xb(17),e.lc("chartType","pie")("datasets",a.doughnutPieChartData)("labels",a.doughnutPieChartLabels)("options",a.doughnutPieChartOptions)("colors",a.doughnutPieChartColors),e.xb(14),e.lc("chartType","scatter")("datasets",a.scatterChartData)("options",a.scatterChartOptions)("colors",a.scatterChartColors))},directives:[i.a],styles:[""]}),t})();var b=r("Cr32");const o=[{path:"chartjs",component:s},{path:"chartist",component:(()=>{class t{constructor(){this.chartistLineData={labels:["Mon","Tue","Wed","Thu","Fri"],series:[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]},this.chartistLineOptions={fullWidth:!0,chartPadding:{right:40}},this.times=function(t){return Array.apply(null,new Array(t))},this.data=this.times(52).map(Math.random).reduce((function(t,a,r){t.labels.push(r+1);for(var n=0;n<t.series.length;n++)t.series[n].push(100*Math.random());return t}),{labels:[],series:this.times(4).map((function(){return new Array}))}),this.chartistLineScatterData=this.data,this.chartistLineScatterOptions={showLine:!1,axisX:{labelInterpolationFnc:function(t,a){return a%13==0?"W"+t:null}}},this.chartistBarData={labels:["Q1","Q2","Q3","Q4"],series:[["800000","1200000","1400000","1300000"],["200000","400000","500000","300000"],["100000","200000","400000","600000"],["400000","600000","200000","0000"]]},this.chartistBarOptions={stackBars:!0,axisY:{labelInterpolationFnc:function(t){return t/1e3+"k"}}},this.chartistBarHorizontalData={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],series:[[5,4,3,7,5,10,3],[3,2,9,5,4,6,4],[2,6,7,1,3,5,9],[2,6,7,1,3,5,19]]},this.chartistBarHorizontalOptions={seriesBarDistance:10,reverseData:!0,horizontalBars:!0,axisY:{offset:20},axisX:{labelOffset:{x:0,y:6}},chartPadding:{left:20,bottom:20}},this.chartistPieData={series:[5,3,4]},this.sum=function(t,a){return t+a},this.chartistDonutData={labels:["safari","chrome","explorer","firefox"],series:[20,40,10,30]},this.chartistDonutOptions={donut:!0,donutWidth:60,donutSolid:!0,startAngle:270,showLabel:!0}}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Fb({type:t,selectors:[["app-chartist"]],decls:111,vars:17,consts:[[1,"page-header"],[1,"page-title"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:;"],["aria-current","page",1,"breadcrumb-item","active"],[1,"row"],[1,"col-lg-6","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"ct-chart","ct-perfect-fourth",3,"type","data","options"],[1,"ct-chart","ct-perfect-fourth",3,"type","data"]],template:function(t,a){1&t&&(e.Rb(0,"div",0),e.Ec(1,"\n  "),e.Rb(2,"h3",1),e.Ec(3,"\n    Chartist\n  "),e.Qb(),e.Ec(4,"\n  "),e.Rb(5,"nav",2),e.Ec(6,"\n    "),e.Rb(7,"ol",3),e.Ec(8,"\n      "),e.Rb(9,"li",4),e.Rb(10,"a",5),e.Ec(11,"Charts"),e.Qb(),e.Qb(),e.Ec(12,"\n      "),e.Rb(13,"li",6),e.Ec(14,"Chartist"),e.Qb(),e.Ec(15,"\n    "),e.Qb(),e.Ec(16,"\n  "),e.Qb(),e.Ec(17,"\n"),e.Qb(),e.Ec(18,"\n"),e.Rb(19,"div",7),e.Ec(20,"\n  "),e.Rb(21,"div",8),e.Ec(22,"\n    "),e.Rb(23,"div",9),e.Ec(24,"\n      "),e.Rb(25,"div",10),e.Ec(26,"\n        "),e.Rb(27,"h4",11),e.Ec(28,"Simple Line chart"),e.Qb(),e.Ec(29,"\n        "),e.Mb(30,"x-chartist",12),e.Ec(31,"\n      "),e.Qb(),e.Ec(32,"\n    "),e.Qb(),e.Ec(33,"\n  "),e.Qb(),e.Ec(34,"\n  "),e.Rb(35,"div",8),e.Ec(36,"\n    "),e.Rb(37,"div",9),e.Ec(38,"\n      "),e.Rb(39,"div",10),e.Ec(40,"\n        "),e.Rb(41,"h4",11),e.Ec(42,"Line scatterer"),e.Qb(),e.Ec(43,"\n        "),e.Mb(44,"x-chartist",12),e.Ec(45,"\n      "),e.Qb(),e.Ec(46,"\n    "),e.Qb(),e.Ec(47,"\n  "),e.Qb(),e.Ec(48,"\n"),e.Qb(),e.Ec(49,"\n"),e.Rb(50,"div",7),e.Ec(51,"\n  "),e.Rb(52,"div",8),e.Ec(53,"\n    "),e.Rb(54,"div",9),e.Ec(55,"\n      "),e.Rb(56,"div",10),e.Ec(57,"\n        "),e.Rb(58,"h4",11),e.Ec(59,"Stacked bar chart"),e.Qb(),e.Ec(60,"\n        "),e.Mb(61,"x-chartist",12),e.Ec(62,"        \n      "),e.Qb(),e.Ec(63,"\n    "),e.Qb(),e.Ec(64,"\n  "),e.Qb(),e.Ec(65,"\n  "),e.Rb(66,"div",8),e.Ec(67,"\n    "),e.Rb(68,"div",9),e.Ec(69,"\n      "),e.Rb(70,"div",10),e.Ec(71,"\n        "),e.Rb(72,"h4",11),e.Ec(73,"Horizontal bar chart"),e.Qb(),e.Ec(74,"\n        "),e.Mb(75,"x-chartist",12),e.Ec(76,"\n      "),e.Qb(),e.Ec(77,"\n    "),e.Qb(),e.Ec(78,"\n  "),e.Qb(),e.Ec(79,"\n"),e.Qb(),e.Ec(80,"\n"),e.Rb(81,"div",7),e.Ec(82,"\n  "),e.Rb(83,"div",8),e.Ec(84,"\n    "),e.Rb(85,"div",9),e.Ec(86,"\n      "),e.Rb(87,"div",10),e.Ec(88,"\n        "),e.Rb(89,"h4",11),e.Ec(90,"Pie chart"),e.Qb(),e.Ec(91,"\n        "),e.Mb(92,"x-chartist",13),e.Ec(93,"\n      "),e.Qb(),e.Ec(94,"\n    "),e.Qb(),e.Ec(95,"\n  "),e.Qb(),e.Ec(96,"\n  "),e.Rb(97,"div",8),e.Ec(98,"\n    "),e.Rb(99,"div",9),e.Ec(100,"\n      "),e.Rb(101,"div",10),e.Ec(102,"\n        "),e.Rb(103,"h4",11),e.Ec(104,"Donut"),e.Qb(),e.Ec(105,"\n        "),e.Mb(106,"x-chartist",12),e.Ec(107,"\n      "),e.Qb(),e.Ec(108,"\n    "),e.Qb(),e.Ec(109,"\n  "),e.Qb(),e.Ec(110,"\n"),e.Qb()),2&t&&(e.xb(30),e.lc("type","Line")("data",a.chartistLineData)("options",a.chartistLineOptions),e.xb(14),e.lc("type","Line")("data",a.chartistLineScatterData)("options",a.chartistLineScatterOptions),e.xb(17),e.lc("type","Bar")("data",a.chartistBarData)("options",a.chartistBarOptions),e.xb(14),e.lc("type","Bar")("data",a.chartistBarHorizontalData)("options",a.chartistBarHorizontalOptions),e.xb(17),e.lc("type","Pie")("data",a.chartistPieData),e.xb(14),e.lc("type","Pie")("data",a.chartistDonutData)("options",a.chartistDonutOptions))},directives:[b.a],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=e.Jb({type:t}),t.\u0275inj=e.Ib({factory:function(a){return new(a||t)},imports:[[n.b,c.h.forChild(o),i.b,b.b]]}),t})()}}]);
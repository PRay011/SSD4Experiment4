let time;
let zoneFinal;
let startChange = 0;
let refresh = false;
function startTime(){
    // document.getElementById("content11").onclick();
    let hour = document.getElementById("hour").innerHTML;
    let minute = document.getElementById("minute").innerHTML;
    let second = document.getElementById("second").innerHTML;
    if(second<59){
        second++;
    }
    else{
        if(minute<59){
            minute++;
            second=0;
        }
        else{
            if(hour<23){
                hour++;
                minute=0;
                second=0;
            }
            else{
                hour=0;
                minute=0;
                second=0;
            }
        }
    }
    document.getElementById("hour").textContent=hour;
    document.getElementById("minute").textContent=minute;
    document.getElementById("second").textContent=second;
    AMorPM();
    time=setTimeout(function(){startTime()},1000);
}

function HourAdd(){
    let hour = document.getElementById("hour").innerHTML;
    let minute = document.getElementById("minute").innerHTML;
    let second = document.getElementById("second").innerHTML;
    console.log(hour);
    if(hour<23){
        hour++;
    }
    else{
        hour=0;
        // 设置表格中的日期数据
        var calendarTitle = document.getElementById("calendarTitle").innerHTML;
        var year = calendarTitle.substr(0, 4);
        var month = calendarTitle.substr(5, 2);
        
      var _table = document.getElementById("calendarTable");
      var _tds = _table.getElementsByTagName("td");
        for(var i = 0; i < _tds.length; i++) {
    
            if(i<44&&_tds[i].className == 'currentDay') {    // 当前天
                _tds[i].className = 'currentMonth';
                if(_tds[i+1].className == 'currentMonth'){
                     _tds[i+1].className = 'currentDay';
                }
                else{
                    console.log("nextmonth");
                    console.log(i);
                    document.getElementById("nextMonth").click();
                    i=((i+1)%7);
                    _tds[i].className = 'currentDay';
                }
                
              break;
            }
          }
    }
    document.getElementById("hour").textContent=hour;
    document.getElementById("minute").textContent=minute;
    document.getElementById("second").textContent=second;
    AMorPM();
}

function HourMinus(){
    let hour = document.getElementById("hour").innerHTML;
    let minute = document.getElementById("minute").innerHTML;
    let second = document.getElementById("second").innerHTML;
    console.log(hour);
    if(hour>0){
        hour--;
    }
    else{
       hour=23;
       var calendarTitle = document.getElementById("calendarTitle").innerHTML;
        var year = calendarTitle.substr(0, 4);
        var month = calendarTitle.substr(5, 2);
        
      var _table = document.getElementById("calendarTable");
      var _tds = _table.getElementsByTagName("td");
        for(var i = 0; i < _tds.length; i++) {
    
            if(_tds[i].className == 'currentDay') {    // 当前天
                _tds[i].className = 'currentMonth';
                if(i>0&&_tds[i-1].className == 'currentMonth'){
                     _tds[i-1].className = 'currentDay';
                }
                else{
                    console.log("preMonth");
                    document.getElementById("prevMonth").click();
                    var preTable= document.getElementById("calendarTable");
                    var preTds = preTable.getElementsByTagName("td");
                      for(var i = 0; i < preTds.length; i++) {
                  
                          if(preTds[i].className == 'currentMonth') {    // 当前天
                            for(var j = i;j<preTds.length;j++){
                                if(preTds[j+1].className != 'currentMonth')
                                {
                                    i=j;
                                    console.log("prechange");
                                    preTds[j].className = 'currentDay';    
                                     break;
                                }
                            }
                           
                          }
                          
                        }
                }
                
              break;
            }
          }
    }
    document.getElementById("hour").textContent=hour;
    document.getElementById("minute").textContent=minute;
    document.getElementById("second").textContent=second;
    AMorPM();
}

function MinuteAdd(){
    let hour = document.getElementById("hour").innerHTML;
    let minute = document.getElementById("minute").innerHTML;
    let second = document.getElementById("second").innerHTML;
    console.log(minute);
    if(minute<59){
        minute++;
    }
    else{
        if(hour<23){
            hour++;
            minute=0;
        }
        else{
            hour=0;
            minute=0;
        }
    }
    document.getElementById("hour").textContent=hour;
    document.getElementById("minute").textContent=minute;
    document.getElementById("second").textContent=second;  
    AMorPM();
}

function MinuteMinus(){
    let hour = document.getElementById("hour").innerHTML;
    let minute = document.getElementById("minute").innerHTML;
    let second = document.getElementById("second").innerHTML;
    console.log(minute);
    if(minute>0){
        minute--;
    }
    else{
        if(hour>0){
            hour--;
            minute=59;
        }
        else{
            hour=23;
            minute=59;
        }
    }
    document.getElementById("hour").textContent=hour;
    document.getElementById("minute").textContent=minute;
    document.getElementById("second").textContent=second;
    AMorPM();
}

function SecondAdd(){
    let hour = document.getElementById("hour").innerHTML;
    let minute = document.getElementById("minute").innerHTML;
    let second = document.getElementById("second").innerHTML;
    console.log(second);
    if(second<59){
        second++;
    }
    else{
        if(minute<59){
            minute++;
            second=0;
        }
        else{
            if(hour<23){
                hour++;
                minute=0;
                second=0;
            }
            else{
                hour=0;
                minute=0;
                second=0;
            }
        }
    }
    document.getElementById("hour").textContent=hour;
    document.getElementById("minute").textContent=minute;
    document.getElementById("second").textContent=second;
    AMorPM();
}

function SecondMinus(){
    let hour = document.getElementById("hour").innerHTML;
    let minute = document.getElementById("minute").innerHTML;
    let second = document.getElementById("second").innerHTML;
    console.log(second);
    if(second>0){
        second--;
    }
    else{
        if(minute>0){
            minute--;
            second=59;
        }
        else{
            if(hour>0){
                hour--;
                minute=59;
                second=59;
            }
            else{
                hour=23;
                minute=59;
                second=59;
            }
        }
    }
    document.getElementById("hour").textContent=hour;
    document.getElementById("minute").textContent=minute;
    document.getElementById("second").textContent=second;
    AMorPM();
}
function YearAdd(){
    let year = document.getElementById("year").innerHTML;
    year++;
    document.getElementById("year").textContent=year;
    //下面要调节月份
}

function YearMinus(){
    let year = document.getElementById("year").innerHTML;
    if(year>0){
        year--;
        document.getElementById("year").textContent=year;
    //下面要调节月份
    //判断是不是闰年
        if(year%4==0){

        }
        else{
            
        }
    }
    else{
        //do nothing
    }
    
}

function whichMonth(){
    let month = document.getElementById("month").innerHTML;
    switch(month){
        case "January":month=1;break;
        case "February":month=2;break;
        case "March":month=3;break;
        case "April":month=4;break;
        case "May":month=5;break;
        case "June":month=6;break;
        case "July":month=7;break;
        case "August":month=8;break;
        case "September":month=9;break;
        case "October":month=10;break;
        case "November":month=11;break;
        case "December":month=12;break;
    }
    return month;
}

function Close(){
  if(navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") != -1){
    window.location.href = "about:blank";
    window.close();
}else{
    window.opener = null;
    window.open("", "_self");
    window.close();
}

}

function Apply(){
  var modal = document.querySelector(".modal");
  modal.style.display = "block";
  var calendarTitle = document.getElementById("calendarTitle").innerHTML;
  var year = calendarTitle.substr(0, 4);
  var month = calendarTitle.substr(5, 2);
  var day;
  let hour = document.getElementById("hour").innerHTML;
  let minute = document.getElementById("minute").innerHTML;
  let second = document.getElementById("second").innerHTML;
  let choose = document.getElementById("choose");
  var _table = document.getElementById("calendarTable");
      var _tds = _table.getElementsByTagName("td");
        for(var i = 0; i < _tds.length; i++) {
    
            if(i<44&&_tds[i].className == 'currentDay') {    // 当前天
              day = _tds[i].value;
            }
          }
  document.getElementById("whichButton").textContent="Apply";
  document.getElementById("yearIn").textContent=year;
  document.getElementById("monthIn").textContent=month;
  document.getElementById("dayIn").textContent=day;
  document.getElementById("hourIn").textContent=hour;
  document.getElementById("minuteIn").textContent=minute;
  document.getElementById("secondIn").textContent=second;
  document.getElementById("timeZoneIn").textContent=zoneFinal;
  if(choose.checked){
    document.getElementById("autoDaylightIn").textContent="true";
  }
  else{
    document.getElementById("autoDaylightIn").textContent="false";
  }
  document.getElementById("applyIn").textContent="Time Saved";
}

function Cancel(){
  var modal = document.querySelector(".modal");
  modal.style.display = "block";
  var calendarTitle = document.getElementById("calendarTitle").innerHTML;
  var year = calendarTitle.substr(0, 4);
  var month = calendarTitle.substr(5, 2);
  var day;
  let hour = document.getElementById("hour").innerHTML;
  let minute = document.getElementById("minute").innerHTML;
  let second = document.getElementById("second").innerHTML;
  let choose = document.getElementById("choose");
  var _table = document.getElementById("calendarTable");
      var _tds = _table.getElementsByTagName("td");
        for(var i = 0; i < _tds.length; i++) {
    
            if(i<44&&_tds[i].className == 'currentDay') {    // 当前天
              day = _tds[i].value;
            }
          }
  document.getElementById("whichButton").textContent="Cancel";
  document.getElementById("yearIn").textContent=year;
  document.getElementById("monthIn").textContent=month;
  document.getElementById("dayIn").textContent=day;
  document.getElementById("hourIn").textContent=hour;
  document.getElementById("minuteIn").textContent=minute;
  document.getElementById("secondIn").textContent=second;
  document.getElementById("timeZoneIn").textContent=zoneFinal;
  if(choose.checked){
    document.getElementById("autoDaylightIn").textContent="true";
  }
  else{
    document.getElementById("autoDaylightIn").textContent="false";
  }
  document.getElementById("applyIn").textContent="Time not Saved";
  refresh = true;
}

var cancel = document.querySelector(".cancel");
cancel.onclick = function ()
{
  if(refresh){
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
    //刷新浏览器起到重置效果
    location.reload()
  }
  else{
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
  }
}


function AMorPM(){
    let hour = document.getElementById("hour").innerHTML;
    var selects = document.getElementsByName("radio");
    if (hour<12) {
        //->选中第一个
        selects[0].checked= true;
        selects[1].checked= false;
    } else {
        selects[0].checked= false;
        selects[1].checked= true;
    }
}

function FirstTab(){
    startTime();
    TimeZoneChange();
    document.getElementById("DataAndTime").click();
}

function TimeZoneChange(){
    var place = document.getElementById("mapSelect");
    var zone = place.options[place.selectedIndex].value;
    //控制显示规定的位置
    var topArow = document.querySelector('.topArow');
    var current = topArow.offsetLeft;
    current=371;
    current+=zone*29;
    topArow.style.left=current+"px";//移动
    //设置时区时间
    if(startChange>0){
    let hour = document.getElementById("hour").innerText;
    let change = parseInt(zone)-parseInt(zoneFinal); 
    zoneFinal = zone;
    // console.log(change);
    if(change>=0){
      while(change>0){
        hour++;
        change--;
      }
    }
    else{
      while(change<0){
        hour--;
        change++;
      }
    }
    console.log(hour);
    //下面要改变日期。
    if(hour>=0&&hour<=23){
      document.getElementById("hour").textContent=hour;
    }
    else if(hour<0){
      hour+=24;
      var calendarTitle = document.getElementById("calendarTitle").innerHTML;
       var year = calendarTitle.substr(0, 4);
       var month = calendarTitle.substr(5, 2);
       
     var _table = document.getElementById("calendarTable");
     var _tds = _table.getElementsByTagName("td");
       for(var i = 0; i < _tds.length; i++) {
   
           if(_tds[i].className == 'currentDay') {    // 当前天
               _tds[i].className = 'currentMonth';
               if(i>0&&_tds[i-1].className == 'currentMonth'){
                    _tds[i-1].className = 'currentDay';
               }
               else{
                   console.log("preMonth");
                   document.getElementById("prevMonth").click();
                   var preTable= document.getElementById("calendarTable");
                   var preTds = preTable.getElementsByTagName("td");
                     for(var i = 0; i < preTds.length; i++) {
                 
                         if(preTds[i].className == 'currentMonth') {    // 当前天
                           for(var j = i;j<preTds.length;j++){
                               if(preTds[j+1].className != 'currentMonth')
                               {
                                   i=j;
                                   console.log("prechange");
                                   preTds[j].className = 'currentDay';    
                                    break;
                               }
                           }
                          
                         }
                         
                       }
               }
               
             break;
           }
         }
         document.getElementById("hour").textContent=hour;
    }
    else{
      hour-=24;
      // 设置表格中的日期数据
      var calendarTitle = document.getElementById("calendarTitle").innerHTML;
      var year = calendarTitle.substr(0, 4);
      var month = calendarTitle.substr(5, 2);
      
    var _table = document.getElementById("calendarTable");
    var _tds = _table.getElementsByTagName("td");
      for(var i = 0; i < _tds.length; i++) {
  
          if(i<44&&_tds[i].className == 'currentDay') {    // 当前天
              _tds[i].className = 'currentMonth';
              if(_tds[i+1].className == 'currentMonth'){
                   _tds[i+1].className = 'currentDay';
              }
              else{
                  console.log("nextmonth");
                  console.log(i);
                  document.getElementById("nextMonth").click();
                  i=((i+1)%7);
                  _tds[i].className = 'currentDay';
              }
              
            break;
          }
        }
        document.getElementById("hour").textContent=hour;
    }
    }
    startChange++;
}

function RecordZone(){
  var place = document.getElementById("mapSelect");
  var zone = place.options[place.selectedIndex].value;
  zoneFinal = zone;
}

function Choose(){
  let choose = document.getElementById("choose");
  let chooseWhat = document.getElementById("chooseWhat");
  if(choose.checked){
    chooseWhat.className="choose";
  }
  else{
    chooseWhat.className="notChoose";
  }
}

//日历
(function(){
    /*
     * 用于记录日期，显示的时候，根据dateObj中的日期的年月显示
     */
    var dateObj = (function(){
      var _date = new Date();    // 默认为当前系统时间
      return {
        getDate : function(){
          return _date;
        },
        setDate : function(date) {
          _date = date;
        }
      };
    })();
  
    // 设置calendar div中的html部分
    renderHtml();
    // 表格中显示日期
    showCalendarData();
    // 绑定事件
    bindEvent();
  
    /**
     * 渲染html结构
     */
    function renderHtml() {
      var calendar = document.getElementById("calendar");
      var titleBox = document.createElement("div");  // 标题盒子 设置上一月 下一月 标题
      var bodyBox = document.createElement("div");  // 表格区 显示数据
  
      // 设置标题盒子中的html
      titleBox.className = 'calendar-title-box';
      titleBox.innerHTML = "<span class='prev-month' id='prevMonth'></span>" +
        "<span class='calendar-title' id='calendarTitle'></span>" +
        "<span id='nextMonth' class='next-month'></span>";
      calendar.appendChild(titleBox);    // 添加到calendar div中
  
      // 设置表格区的html结构
      bodyBox.className = 'calendar-body-box';
      var _headHtml = "<tr>" + 
                "<th>日</th>" +
                "<th>一</th>" +
                "<th>二</th>" +
                "<th>三</th>" +
                "<th>四</th>" +
                "<th>五</th>" +
                "<th>六</th>" +
              "</tr>";
      var _bodyHtml = "";
  
      // 一个月最多31天，所以一个月最多占6行表格
      for(var i = 0; i < 6; i++) {  
        _bodyHtml += "<tr>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
              "</tr>";
      }
      bodyBox.innerHTML = "<table id='calendarTable' class='calendar-table'>" +
                _headHtml + _bodyHtml +
                "</table>";
      // 添加到calendar div中
      calendar.appendChild(bodyBox);
    }
  
    /**
     * 表格中显示数据，并设置类名
     */
    function showCalendarData() {
      var _year = dateObj.getDate().getFullYear();
      var _month = dateObj.getDate().getMonth() + 1;
      var _dateStr = getDateStr(dateObj.getDate());
  
      // 设置顶部标题栏中的 年、月信息
      var calendarTitle = document.getElementById("calendarTitle");
      var titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(4,2) + "月";
      calendarTitle.innerText = titleStr;
  
      // 设置表格中的日期数据
      var _table = document.getElementById("calendarTable");
      var _tds = _table.getElementsByTagName("td");
      var _firstDay = new Date(_year, _month - 1, 1);  // 当前月第一天
      for(var i = 0; i < _tds.length; i++) {
        var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
        var _thisDayStr = getDateStr(_thisDay);
        _tds[i].innerText = _thisDay.getDate();
        //_tds[i].data = _thisDayStr;
        _tds[i].setAttribute('data', _thisDayStr);
        if(_thisDayStr == getDateStr(new Date())) {    // 当前天
          _tds[i].className = 'currentDay';
        }else if(_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
          _tds[i].className = 'currentMonth';  // 当前月
        }else {    // 其他月
          _tds[i].className = 'otherMonth';
        }
      }
    }
  
    /**
     * 绑定上个月下个月事件
     */
    function bindEvent() {
      var prevMonth = document.getElementById("prevMonth");
      var nextMonth = document.getElementById("nextMonth");
      addEvent(prevMonth, 'click', toPrevMonth);
      addEvent(nextMonth, 'click', toNextMonth);
    }
  
    /**
     * 绑定事件
     */
    function addEvent(dom, eType, func) {
      if(dom.addEventListener) {  // DOM 2.0
        dom.addEventListener(eType, function(e){
          func(e);
        });
      } else if(dom.attachEvent){  // IE5+
        dom.attachEvent('on' + eType, function(e){
          func(e);
        });
      } else {  // DOM 0
        dom['on' + eType] = function(e) {
          func(e);
        }
      }
    }
  
    /**
     * 点击上个月图标触发
     */
    function toPrevMonth() {
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
      showCalendarData();
    }
  
    /**
     * 点击下个月图标触发
     */
    function toNextMonth() {
      var date = dateObj.getDate();
      dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
      showCalendarData();
    }
  
    /**
     * 日期转化为字符串， 4位年+2位月+2位日
     */
    function getDateStr(date) {
      var _year = date.getFullYear();
      var _month = date.getMonth() + 1;    // 月从0开始计数
      var _d = date.getDate();
  
      _month = (_month > 9) ? ("" + _month) : ("0" + _month);
      _d = (_d > 9) ? ("" + _d) : ("0" + _d);
      return _year + _month + _d;
    }
  })();

/**
 * Created by Administrator on 2016/3/23.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var aqiTable=document.getElementById('aqi-table');
aqiTable.innerHTML="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>"

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var aqiCity=document.getElementById('aqi-city-input').value.trim();
    var aqiValue=document.getElementById('aqi-value-input').value.trim();
  aqiData[aqiCity]=aqiValue;

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    for(var city in aqiData){
        aqiTable.innerHTML+="<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button onclick='delBtnHandle()'>删除</button></td></tr>"
    }


}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {

    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.
    //this.parentNode.parentNode.firstElementChild.innerHTML="";
    console.log(this.innerHTML)
    this.remove()

    renderAqiList();
}

function init() {
    function btnListener(ele,type,fn){                           //event事件
        if(ele.attachEvent){
            ele.attachEvent('on'+type,fn);   //IE，opera
        }
        else if(ele.addEventListener){
            ele.addEventListener(type,fn,false);  //火狐谷歌
        }
    }
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var btn=document.getElementById('add-btn');
    btnListener(btn,"click",addBtnHandle)                               //事件监听不会覆盖，onclick会覆盖
                                                                       //btn.onclick=function(){addBtnHandle()}
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();

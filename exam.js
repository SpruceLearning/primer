/**
 * Created with JetBrains WebStorm.
 * User: Ge
 * Date: 5/3/13
 * Time: 1:07 AM
 * To change this template use File | Settings | File Templates.
 */
var num = 10; //global variables are accessible as attributes of the `window` object.
                // for example: window.num

function popUp(){
//        document.getElementById("popup-frame").innerHTML="<div class="overlay"><iframe name="popquiz" style="float: left; position: absolute;" src="card.html" frameborder="0" scrolling="auto" width="100%" height="100%" marginwidth="5"></iframe></div>";
    document.getElementById("header-1").innerHTML="第一部分：选择题   <em>正在解答</em>";
    var popup_frame = document.getElementById("popup-frame")
    var popup_card = document.createElement('iframe');
    //var divIdName = 'problem'+ window.num;
    window.num+=1;
    popup_card.setAttribute('id',"popup-card");
    popup_card.setAttribute('class',"overlay");
    popup_card.setAttribute('src',"./card.html");
    popup_card.setAttribute('style',"height: 100%; width: 100% ;");
    popup_card.innerHTML = '';
    alert("该题目将在20秒钟后结束答题，时间长短可以由教师在后台进行设置。如果希望开始答题，请点击“确定”");
    popup_frame.appendChild(popup_card);
    /*function close_this_damn_iframe(thisframe){
        thisframe.removeChild(popup_card);
    }*/

    setTimeout(
         function(){popup_frame.removeChild(popup_card)}
         //close_this_damn_iframe(popup_frame)
        ,20000);

}

function closePopup(myElem) {
    var popup_iframe = document.getElementById("popup-card");
    //var parent = this_iframe.getParent();
    popup_iframe.parentElement.removeChild(this_iframe);
}

function addCard() {
    var ni = document.getElementById('myDiv');
    var numi = document.getElementById('theValue');
    var num = (document.getElementById('theValue').value -1)+ 2;
    numi.value = num;
    var newdiv = document.createElement('div');
    var divIdName = 'my'+num+'Div';
    newdiv.setAttribute('id',divIdName);
    newdiv.innerHTML = 'Element Number '+num+' has been added! <a href=\'#\' onclick=\'removeElement("'+divIdName+'")\'>Remove the div "'+divIdName+'"</a>';
    ni.appendChild(newdiv);
}

function removeCard(divNum) {
    var d = document.getElementById('myDiv');
    var olddiv = document.getElementById(divNum);
    d.removeChild(olddiv);
}

function addElement() {
    var ni = document.getElementById('myDiv');
    var numi = document.getElementById('theValue');
    var num = (document.getElementById('theValue').value -1)+ 2;
    numi.value = num;
    var newdiv = document.createElement('div');
    var divIdName = 'my'+num+'Div';
    newdiv.setAttribute('id',divIdName);
    newdiv.innerHTML = 'Element Number '+num+' has been added! <a href=\'#\' onclick=\'removeElement("'+divIdName+'")\'>Remove the div "'+divIdName+'"</a>';
    ni.appendChild(newdiv);
}

function removeElement(divNum) {
    var d = document.getElementById('myDiv');
    var olddiv = document.getElementById(divNum);
    d.removeChild(olddiv);
}
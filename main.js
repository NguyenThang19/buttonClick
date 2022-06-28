const btnList = document.querySelectorAll('.btn');
let length = btnList.length;
for(let i = 0; i < length; i++){
    if(i%2 == 0)
    {
       btnList[i].onclick = function(){
        alert(` Tôi là button thứ: ${i+1}`);
       }
    }else{
        btnList[i].ondblclick = function(){
            btnList[i].classList.toggle("toggle");
        }
    }
}
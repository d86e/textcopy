function DivCopy(v){
    window.onload = function(){
		var d = document.getElementsByClassName(v),f=[];
		if(d.length>0){
			for(i = 0; i < d.length; i++){
				
				d[i].setAttribute("contenteditable","true");
				d[i].style.outline = "none";
				d[i].setAttribute("onfocus","javascript:var a=this.innerHTML,t=this;setInterval(function(){var b=t.innerHTML;if(a!=b)t.innerHTML=a;},100);")

			}
		}

	}
}

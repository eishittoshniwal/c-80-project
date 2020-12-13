var paragraph=[]
function submit(){
for (var x=1;x<6;x++){
    var line=document.getElementById("input"+x).value
    paragraph.push(line)   
}
    console.log(paragraph)

    var arraywithoutcommas=paragraph.join(". ")
    document.getElementById("output").innerHTML=arraywithoutcommas
}



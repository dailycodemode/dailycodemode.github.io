function changePic() {

    let colours = ["black", "orange", "maroon", "purple", "green", "brown", "gray", "red", "blue" ];
    let icons = ["shirt-2","battery","boat-10","cottage","airplane-3","cat-3", "1-filled", "2-filled", "lightbulb-2" , "clenched-fist", "chess-33", "info-4"]

    let val =  "<br/>"  +   document.getElementById("myTextarea").value  ;
    let record = document.getElementById("Record").innerHTML + val;
    
    for (let j = 1; j < 7; j++) {
        let iCol = Math.floor((Math.random() * colours.length));
        let iImg = Math.floor((Math.random() * icons.length));
        
        // let imgUp = "res/" + pngImages[i];  

        document.getElementById("img" + j).src = "https://www.iconsdb.com/icons/preview/" + colours[iCol] + "/" + icons[iImg] + "-xxl.png";
        console.log( iCol, iImg)
    }               
    document.getElementById("myTextarea").value = "";
    document.getElementById("Record").innerHTML = record;
    // document.getElementById("demo").innerHTML = imgUp;
  }



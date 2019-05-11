function changePic() {

    pngImages = ["almost-empty-256.png",    "arrow-204-256.png",    "arrow-256.png",    "circle-128.png",
    "clover-256.png",    "exit-256.png",    "eyeHand.png",    "favorite-5-256.png",
    "gift-3-256.png",    "greenCamera.png",    "greenFace.png",
    "guitar-256.png",    "home-5-256.png",     "joker-256.png",    "padlock-8-256.png",
    "party-hat-3-256.png",    "power-256 (1).png",    "power-256.png",    "question-mark-256.png",
    "rotate-clockwise-256.png",    "sadFace.jpg",    "security-camera-64.png",    "signs-16-256.png",
    "sofa-256.png",    "star-256.png",    "strongMan.png",    "sun-2-256.ico",
    "sun.png",    "train-5-256.png",    "uncertainFace.png",    "us-dollar-256.png",
    "visible-256.png",    "x-mark-256.png",    "book-256.png ", 
    "box-5-256.png ", "brush-4-128.png ",     "calendar-8-256.png ", "car-26-256.png ", 
    "chess-25-256.png ", "chess-28-256.png ",    "crying-128.png ", "door-9-256.png ", 
    "emoticon-28-128.png ", "emoticon-29-128.png ",     "emoticon-35-128.png ", "emoticon-38-128.png ", 
    "emoticon-46-128.png ", "emoticon-50-128.png ",     "emoticon-6-128.png ", "paint-brush-128.png ", 
    "screenshot-256.png ", "time-9-256.png ",     "workstation-256.png "
    ];

    let colours = ["black", "orange", "maroon", "bisque", "purple", "green", "brown", "gra" ];
    let icons = ["shirt-2","battery"]

    let val =  "<br/>"  +   document.getElementById("inputBox").value  ;
    let record = document.getElementById("Record").innerHTML + val;
    
    for (let j = 1; j < 7; j++) {
        let i = Math.floor((Math.random() * 34));
        let imgUp = "res/" + pngImages[i];  
        console.log(colours[1] , icons[1] );
        document.getElementById("img" + j).src = imgUp;
        // document.getElementById("img" + j).src = "https://www.iconsdb.com/icons/preview/" + colours[1] + "/" + icons[1] + "-xxl.png";
    }               
    document.getElementById("inputBox").value = "";
    document.getElementById("Record").innerHTML = record;
    // document.getElementById("demo").innerHTML = imgUp;
  }



setInterval(function(){
    var digit = document.createElement("span");
    digit.className = "digit";
    var text = document.createTextNode(Math.floor(Math.random()*2));
    digit.appendChild(text);
    document.body.appendChild(digit);

    var digit2 = document.createElement("span");
    digit2.className = "digitii";
    var text2 = document.createTextNode(Math.floor(Math.random()*2));
    digit2.appendChild(text2);
    document.body.appendChild(digit2);

    setTimeout(function(){
        document.body.removeChild(digit);
        document.body.removeChild(digit2);
    },8000);
},800);

// Change Pictures fast
function scanFaces(){
    setTimeout(function(){
        document.getElementById("scanner").style.display = "block";
        const numberPics = 7;
        let current = Math.floor(Math.random()*numberPics);
        let currentPicture = "pic-"+current;
        let x = setInterval(function(){
            document.getElementById(currentPicture).style.display = "none";
            current = (current+1)%numberPics;
            currentPicture = "pic-"+current;
            document.getElementById(currentPicture).style.display = "block";
        },100);
        setTimeout(function(){
            clearInterval(x);
        },8000);   
    },1200);
    
}

function writeCode(){
    document.getElementById("terminal").style.display = "block";
    let repeat = setInterval(function(){
        let line = document.createElement("p");
        const codes = ["$ crack0r get-creditCard -cC","","$ 1001010110101 10101 100110","$ crack wifi -w clasnwke0mon -t 127.0.0.1", "$ destroy -a anti-virus -w","$ bypass-security -f firewall","$ get the sweet sweet -m oney","$ Attack on Defender!"," $ Collecting Data...", "$ Execute order -66", "$ take a break","$ go for -a coffe","$ 1337 -H4cks0r Skillz -./usr/bin/","$ brute force attack going strong"];
        let text = codes[Math.floor((Math.random()*codes.length))];
        let tNode = document.createTextNode(text);
        line.appendChild(tNode);
        document.getElementById("bash").appendChild(line);
        setTimeout(function(){
            document.getElementById("bash").removeChild(line);
        },400);
    },80);
    setTimeout(function(){
        clearInterval(repeat);
    },9500);
}

function showResults(){
    setTimeout(function(){
        document.getElementById("response").style.display = "block";
        current = 1;
        let reveal = setInterval(function(){
            cSpan = "sp-"+current;
            document.getElementById(cSpan).style.display = "block";
            current += 1;
        },1500);
        setTimeout(function(){
            clearInterval(reveal);
        },6*1500);
    },2000);
    


}


document.getElementById("hack-btn").addEventListener("click",function(){
    scanFaces();
    writeCode();
    showResults();
});
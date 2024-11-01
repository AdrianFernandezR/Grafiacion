window.addEventListener("load", function(evt) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let rGet = document.getElementById("rId");
    let kGet = document.getElementById("kId");
    let vueltasGet = document.getElementById("vueltas");


    //epiciclo
    
    function cordX (k , r, t){
        let x= r * (k + 1) * Math.cos(t) - r * Math.cos((k + 1) * t);

        return x;

    }

    function cordY (k , r, t){
        let y= r * (k + 1) * Math.sin(t) - r * Math.sin((k + 1) * t);

        return y;

    }

    function drawCanvas(){
        
        context.setLineDash([10,5]);
        context.beginPath();
        context.lineTo(400, 600);
        context.lineTo(800, 300);
        context.stroke();
    }

    function epicicloide(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawCanvas();

        let r = parseFloat(rGet.value);
        let k = parseFloat(kGet.value);
        let vueltas= parseFloat(vueltasGet.value);

        let centerX = canvas.width/2;
        let centerY = canvas.height/2;

        context.beginPath();
        context.setLineDash([]);
        context.strokeStyle = 'black';
        context.lineJoin = 'bevel';


        for (t= 0; t <= (2*Math.PI) * vueltas; t+=0.01){

            context.lineTo(centerX + cordX(k, r, t), centerY + cordY(k, r, t));


        }

        context.stroke();
    }
    

    rGet.addEventListener("change", epicicloide);
    kGet.addEventListener("change", epicicloide);

    vueltasGet.addEventListener("change", epicicloide);
    
    epicicloide();
    

});
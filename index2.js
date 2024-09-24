<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // if else statement conditions
    
        let x = 0;
if (x > 0) {
    console.log("positive");
}
else if (x < 0) {
    console.log(" negative");
}
else {
    console.log("no value");
}

        // ternary

        let age=17;
        let vote=(age >18 ? "you can vote" : "you cannot vote");
        console.log( vote)

        
        
        // switch case

        let day=prompt("enter day number");
        switch (day) {

            case "1":
                console.log("today is monday");
                break;

                case "2":
                    console.log("today is tuesday");
                    break;

                    case "3":
                        console.log("today is wednsday")
                        break;

                        case"4":
                        console.log("invalid day")
                        break;
        
            default:
                break;
        }
        
    
        //For Loop

         for(let i=0;i<10;i++){
           console.log(i);
}

// Reverse For Loop

      for(let s=15;s>=0;s--){
         console.log(s);
}
    </script>
</body>
</html>
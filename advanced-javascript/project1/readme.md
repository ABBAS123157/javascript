ba color changeing 


        const boxes = document.querySelectorAll(".box");
        const log = document.querySelector(".log")
        console.log(boxes);
        boxes.forEach((button)=>{
            button.addEventListener("click", (e)=>{
                e.preventDefault();
                // console.log(e)
                console.log(e.target)
                if(e.target.id === 'white'){
                    document.body.style.background = e.target.id
                    log.innerHTML = "You clicked the white color"
                     document.body.style.color = "black"
                }
                if(e.target.id === 'black'){
                    document.body.style.background = e.target.id
                    log.innerHTML = "You clicked the black color"
                    document.body.style.color = "white"
                }
                if(e.target.id === 'brown'){
                    document.body.style.background = e.target.id
                    log.innerHTML = "You clicked the brown color"
                }
                if(e.target.id === 'green'){
                    document.body.style.background = e.target.id
                    log.innerHTML = "You clicked the green color"
                }
                if(e.target.id === 'yellow'){
                    document.body.style.background = e.target.id
                    log.innerHTML = "You clicked the yellow color"
                    document.body.style.color = "black"
                }
                if(e.target.id === 'blue'){
                    document.body.style.background = e.target.id
                    log.innerHTML = "You clicked the blue color"
                    document.body.style.color = "white"
                }
                
                

            })
        })
        
    


    2. digital clock

      const span = document.querySelector(".box")
         
        // console.log(date);
        setInterval(function(){
            const date = new Date()
            span.innerHTML = date.toLocaleTimeString();
        },1000)
        


        3. bmi cheack model

         const form = document.querySelector("form")
        const btn = document.querySelector(".btn")


        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const height = parseInt(document.querySelector("#height").value)
            const weight = parseInt(document.querySelector("#weight").value)
            const result = document.querySelector(".result")
            if (isNaN(height) || height < 0 || height === '') {
                result.innerHTML = `please give a valid height in a number ${height}`;
            } else if (isNaN(weight) || weight < 0 || weight === '') {
                result.innerHTML = `please give a valid weight in a number ${weight}`;
            } else {
                const bmi = (weight / ((height * height) / 10000)).toFixed(2);
                result.innerHTML = `<span>${bmi} </span>`
            }

        })



        4. guess number game

        const form = document.querySelector("form")
            const userinput = document.querySelector("#guess")
            const btn = document.querySelector(".btn")
            const prev = document.querySelector(".prev")
            const remaing = document.querySelector(".remining")
            const loworhi = document.querySelector(".loworhi")
            const result = document.querySelector(".restult")
            const randomnumber = Math.floor(Math.random() * 100 + 1);
            console.log(randomnumber)

            let arr = []
            let game = true
            let attempt = 1;

            if(game){
                btn.addEventListener("click", (e)=>{
                    e.preventDefault();
                    const guess = parseInt(userinput.value)
                    console.log(guess);
                    Display(guess)
                })
            }
            function Display (guess) {
                if(isNaN(guess)){
                    alert("please enter the valid number is NAN")
                
                }else if(guess < 1){
                    alert("please enter the valid number yoy enter less then 1")
                }else if(guess > 100){
                    alert("please enter the valid number is not more then 100 ")
                }else {
                    arr.push(guess)
                    if(attempt > 10){
                        DisplayMessage(guess);
                        DisplayMessage(`Game over. Random number was ${randomnumber}`)
                        endgame();
                    }else{
                        Displayguess(guess);
                        DisplayCheck(guess)
                    }
                }

            }
            function DisplayCheck (guess) {
                if(guess === randomnumber){
                   DisplayMessage("Congraluation! you guessed corret number.")
                   endgame();
                }
                else if(guess > randomnumber){
                    DisplayMessage("Hey! you enter the grater then 100")
                }
                else if(guess < randomnumber){
                    DisplayMessage("Hey! you enter the less then 100")
                }
            }
            function Displayguess (guess){
                userinput.value = '';
                prev.innerHTML += `${guess},`;
                attempt++;
                remaing.innerHTML = `${10 - attempt}`
            }
            function DisplayMessage (message) {
                loworhi.innerHTML = `<span>${message}</span>`
            }
            function endgame () {
                userinput.value = ''
                userinput.setAttribute("disabled", '')
                const p = document.createElement("button")
                p.innerHTML = `<h2 id = "newgame">Start new game </h2>`
                p.style.color = "white"
                result.appendChild(p)
                game = false
                restartgame()
            }
            function restartgame () {

            }
 
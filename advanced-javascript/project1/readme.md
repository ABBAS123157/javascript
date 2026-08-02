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


            5. tic-tac-toe game

            <!DOCTYPE html>
        <html lang="en">
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tic-tac-toe game</title>
    <link rel="stylesheet" href="index.css">
    <style>
        section{
            background: #00000018;
            display: grid;
            width: fit-content;
            margin: 10% auto;
            padding: 20px 20px;
            border-radius: 20px;
            box-shadow: 0px 0px 30px blanchedalmond;
        }
        .head{
            display: flex;
            justify-content: center;
        }
        .player {
         display: flex;
             justify-content: center;
             align-items: center;
             text-align: center;
            gap: 10px;
            background: #c0bdbd97;
            width: fit-content;
            margin: 10px auto;
            padding: 10px 20px;
            border-radius: 10px;
        }
        .player .playerx 
        .player .playery{
            padding: 10px 18px;
            font-size: 22px;
            background: linear-gradient(135deg, #4f8ea2, #87c1f4);
            color: #fff;
            cursor: pointer;
            box-shadow: 0 18px 35px rgba(0,0,0,0.24);
            border: none;
            border-radius: 16px;
            transition: transform 0.25s ease, background 0.25s ease;
            transform-style: preserve-3d;
        }
         .player .playerx:hover,
        .player .playery:hover{
            background: #4e8ea3;
            color: #fff;
            transform: translateZ(10px) scale(0.98);
        }
        .player .active {
            background: #0d101d;
            box-shadow: 0 18px 35px rgba(0,0,0,0.4);
        }
        .restart {
            display: inline-block;
            /* margin-top: 28px; */
            margin: 10px auto;
            padding: 12px 26px;
            font-size: 18px;
            background: linear-gradient(135deg, #5fcde4, #3b74b8);
            color: #fff;
            border: none;
            border-radius: 16px;
            cursor: pointer;
            box-shadow: 0 14px 30px rgba(0,0,0,0.28);
            transition: transform 0.25s ease, background 0.25s ease;
            transform-style: preserve-3d;
             
        }
        .restart:hover {
            background: linear-gradient(135deg, #3c93c6, #245e93);
            transform: translateY(-2px);
        }

         .box{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-top: 24px;
            transform: translateZ(40px);
        }
        .box .boxes{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(180deg, #fbfbfb, #d9d9d9);
            font-size: 72px;
            height: 150px;
            width: 150px;
            border-radius: 18px;
            color: #111;
            box-shadow: inset 0 -6px 12px rgba(130, 22, 22, 0.08), 0 20px 35px rgba(135,                 59, 59, 0.18);
            transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
            transform-style: preserve-3d;
            cursor: pointer;
        }

         .box .boxes:hover {
            transform: translateY(-10px) rotateX(10deg) rotateY(-10deg);
            box-shadow: 0 28px 45px rgba(0,0,0,0.32);
        }
        .box .boxes.filled {
            transform: translateY(-4px) rotateX(4deg);
        }
         .box .boxes.win {
            animation: winGlow 0.8s ease-in-out infinite alternate;
            background: linear-gradient(135deg, #ffe77a, #ff7f50);
            color: #0f1015;
            box-shadow: 0 0 32px rgba(255,151,62,0.65), 0 20px 40px rgba(0,0,0,0.25);
            transform: translateY(-12px) rotateX(8deg) rotateY(8deg);
        }
           @keyframes winGlow {
            from { box-shadow: 0 0 28px rgba(255,151,62,0.45), 0 20px 40px                         rgba(0,0,0,0.25); }
            to { box-shadow: 0 0 48px rgba(255,255,255,0.9), 0 26px 50px rgba(0,0,0,0.28); }
        }
            </style>
        </head>
        <body>
     <nav>
        <div class="nav">
            <h1>My first js project</h1>
            <li><a href="#">Home</a></li>
            <li><a href="https://youtube.com">you tube</a></li>
            <li><a href="readme.md">See code</a></li>
        </div>
    </nav>
        <section>
            <div class="head">
                <h1>Play the Tic-Tac-Toe game </h1>
            </div>
            <div class="player">
                <button class="playerx active">Player X</button>
                <button class="playery">Player Y</button>
            </div>

             
             <div class="box">
                <span class="boxes"></span>
                <span class="boxes"></span>
                <span class="boxes"></span>
             </div>
             <div class="box">
                <span class="boxes"></span>
                <span class="boxes"></span>
                <span class="boxes"></span>
             </div>
             <div class="box">
                <span class="boxes"></span>
                <span class="boxes"></span>
                <span class="boxes"></span>
             </div>

             <button class="restart">Restart Game</button>
        </section>


          <script>
        const boxes = document.querySelectorAll(".boxes");
        const playerx = document.querySelector(".playerx");
        let playery = document.querySelector(".playery");

        let currentPlayer = "X";
        let gameActive = true;
        let board = ["", "", "", "", "", "", "", "", ""];
        let winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]; 
        const restartButton = document.querySelector(".restart");
        let activeAudioNodes = [];

        restartButton.addEventListener("click", resetGame);

        boxes.forEach((box, index) => {
            box.addEventListener("click", () => {
                if (gameActive && board[index] === "") {
                    board[index] = currentPlayer;
                    box.textContent = currentPlayer;
                    box.classList.add("filled");
                    if (checkWin()) {
                        return;
                    }
                    switchPlayer();
                }
            });
        });

        function switchPlayer() {
            currentPlayer = currentPlayer === "X" ? "Y" : "X";
            playerx.classList.toggle("active");
            playery.classList.toggle("active");
        }

        function checkWin() {
            for (let condition of winningConditions) {
                const [a, b, c] = condition;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    gameActive = false;
                    highlightWin(condition);
                    playWinMusic();
                    alert(`Player ${currentPlayer} wins!`);
                    showRestartButton();
                    return true;
                }
            }
            if (!board.includes("")) {
                gameActive = false;
                playWinMusic(true);
                alert("It's a draw!");
                showRestartButton();
                return true;
            }
            return false;
        }

        function highlightWin(condition) {
            condition.forEach(index => boxes[index].classList.add("win"));
        }

        function showRestartButton() {
            restartButton.hidden = false;
        }

        function hideRestartButton() {
            restartButton.hidden = true;
        }

        function resetGame() {
            stopWinMusic();
            board = ["", "", "", "", "", "", "", "", ""];
            boxes.forEach(box => {
                box.textContent = "";
                box.classList.remove("filled", "win");
            });
            currentPlayer = "X";
            gameActive = true;
            playerx.classList.add("active");
            playery.classList.remove("active");
            hideRestartButton();
        }

        function playWinMusic(isDraw = false) {
            if (!window.AudioContext && !window.webkitAudioContext) return;
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            const audioCtx = new AudioCtx();
            const notes = isDraw ? [440, 392, 349, 330] : [523.25, 659.25, 783.99, 987.77];
            const now = audioCtx.currentTime;
            notes.forEach((freq, index) => {
                const oscillator = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                oscillator.type = 'triangle';
                oscillator.frequency.value = freq;
                gain.gain.setValueAtTime(0, now + index * 0.25);
                gain.gain.linearRampToValueAtTime(0.18, now + index * 0.25 + 0.04);
                gain.gain.linearRampToValueAtTime(0, now + (index + 1) * 0.25);
                oscillator.connect(gain).connect(audioCtx.destination);
                oscillator.start(now + index * 0.25);
                oscillator.stop(now + (index + 1) * 0.25);
                activeAudioNodes.push({oscillator, gain, audioCtx});
            });
            setTimeout(() => audioCtx.close(), notes.length * 300);
        }

        function stopWinMusic() {
            activeAudioNodes.forEach(({oscillator, gain, audioCtx}) => {
                try {
                    gain.gain.cancelScheduledValues(audioCtx.currentTime);
                    gain.gain.setValueAtTime(0, audioCtx.currentTime);
                    oscillator.stop();
                } catch (e) {
                    // ignore already stopped nodes
                }
            });
            activeAudioNodes = [];
        }
    </script>
</body>
</html>







 
 

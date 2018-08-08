// The Big Timer


    // Define a var for the displayed time
    var bigTimer = document.getElementById("theBigTimer");

    

    // Define a var for the total time
    var totalTime = 0;


    // Display the default time

    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    bigTimer.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";


    // Define function to display total time
    function calcTotal(){

    
        // Break Total Time into Days, Hours, Minutes, Seconds and display
        days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
        hours = Math.floor((totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((totalTime % (1000 * 60)) / 1000);
        bigTimer.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
        // Debug for total time
        document.getElementById("totalTimeChecker").innerHTML = totalTime;

    
    };
    // Add Day Button
    function addDay(){
        totalTime = totalTime + (3600000 * 24);
        calcTotal();
        btnControl();
    };
    
    // Subtract Day Button
    function minusDay(){
        totalTime = totalTime - (3600000 * 24);
        calcTotal();
        btnControl();
    };    

    // Add Hour Button
    function addHour(){
        totalTime = totalTime + 3600000;
        calcTotal();
        btnControl();
    };
   
    // Subtract Hour Button
    function minusHour(){
        totalTime = totalTime + -3600000;
        calcTotal();
        btnControl();
    };

    // Add Minute Button
    function addMinute(){
        totalTime = totalTime + 60000;
        calcTotal();
        btnControl();
    };

    // Subtract Minute Button
    function minusMinute(){
        totalTime = totalTime - 60000;
        calcTotal();
        btnControl();
    };

    // Add Second Button
    function addSecond(){
        totalTime = totalTime + 1000;
        calcTotal();
        btnControl();
    };

    // Subtract Second Button
    function minusSecond(){
        totalTime = totalTime - 1000;
        calcTotal();
        btnControl();
    };


    // Function to manage minus buttons, enabling when total time is above zeroand disabling otherwise
    function btnControl(){
        if (totalTime <= 0) {
            totalTime = 0;
            document.getElementById("minusDay").disabled = true;
            document.getElementById("minusHour").disabled = true;
            document.getElementById("minusMinute").disabled = true;
            document.getElementById("minusSecond").disabled = true;
            calcTotal();
        }
        if (totalTime > 0) {
            document.getElementById("minusDay").disabled = false;
            document.getElementById("minusHour").disabled = false;
            document.getElementById("minusMinute").disabled = false;
            document.getElementById("minusSecond").disabled = false;

        }
    };

    // Function to decrement the total time
    function bigCountdown(){
        totalTime = totalTime - 1000;
    };

    


    // Function to disable the "Start" button 
    function startBtnDisable() {
        document.getElementById("startBtn").disabled = true;
        
    };

    // Function to re-enable the start button
    function startBtnEnable() {
        document.getElementById("startBtn").disabled = false;
        
    };

    // Define a var for the interval countdown
    var timerCounter1;

    // Function to begin the countdown
    function startTimer() {
        if (totalTime <= 0) {
            alert("Add some time first!");
        }
        else {
            // Begins the count immediately and updates the displayed time, then disables the start button
            bigCountdown();
            calcTotal();
            startBtnDisable();
            // After 1000ms, begins counting down once per second
            timerCounter1 = setInterval(function(){
                if (totalTime > 0) {
                    bigCountdown();
                    calcTotal();
                }
                // Stops the counter at 0 and re-enables the start button
                else {
                    clearInterval(timerCounter1);
                    startBtnEnable();
                    alert("Time is up!!!");
                }
            }, 1000);
        }
    };


    
    // Function to stop the Big Timer
    function stopTimer() {
        clearInterval(timerCounter1);
        startBtnEnable();
    };

    // Function to reset the Big Timer and buttons
    function resetTimer() {
        clearInterval(timerCounter1);
        totalTime = 0;
        calcTotal();
        startBtnEnable();
        btnControl();
    };




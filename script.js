"use strict"

const btn = document.querySelector(".btn"),
 reset = document.querySelector(".reset"),
 heightInput = document.getElementById("height"),
 weightInput = document.getElementById("weight"),
 form = document.querySelector("form"),
 result = document.querySelector(".result");

 form.addEventListener("submit", validateinput);

    function validateinput(e){
        e.preventDefault();
        
        let height = heightInput.value;
        let weight = weightInput.value;

        reset.style.display = "block";
        result.style.display ="block";

        //validate the input
        if(height === ""){
            return(result.textContent = "Please enter valid height!");
        } else if(weight === ""){
            return(result.textContent = "Please enter valid weight!");
        } else {
            result.innerHTML = `
            <div class="loader-div"> 
            <img class="loader" src="./images/loader.gif" alt="loading...">
            </div>
            `;


            setTimeout(() => {
                calculateBMI(height, weight);
            }, 1000);
        }
     }

     //function to calculate the BMI
     function calculateBMI(height, weight){
        //convert the height to meters
        height = height / 100;

        let bmi = (weight / Math.pow(height, 2)).toFixed(1);

        if(bmi < 18.5){
            showResult(`UnderWeight: <span>${bmi}</span>`, "orange");
        } else if(bmi >= 18.5 && bmi < 24.9){
            showResult(`Normal: <span>${bmi}</span>`, "green");
        } else if(bmi >= 25 && bmi < 29.9){
            showResult(`OverWeight: <span>${bmi}</span>`, "Purple");
        } else {
            showResult(`Obese: <span>${bmi}</span>`, "red");
        }
     }

    function showResult(val, color){
        result.style.backgroundColor = color;
        return result.innerHTML = val;
    }

    reset.addEventListener("click", () => {
        form.reset();
        result.style.display = "none";
        reset.style.display = "none";
    });
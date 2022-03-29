const passwordStrength = document.querySelector(".pw-meter .pw-strength"),
    passwordInput = document.querySelector(".pw-meter #password"),
    toggleBtn = document.querySelector(".pw-meter .pw-display-toggle-btn"),
    passwordStrengthSpans = document.querySelectorAll(".pw-meter .pw-strength span");


const getPasswordStrength = password => {
    let s = 0;
    // condition (1)
    if(password.length > 6){
        s += 1;
    }
    // condition (2)
    if(password.length > 10){
        s += 1;
    }
    // condition (3)
    if(/[A-Z]/.test(password)){
        s += 1;
    }
    // condition (4)
    if(/[0-9]/.test(password)){
        s += 1;
    }
    // condition (5)
    if(/[^A-Za-z0-9]/.test(password)){
        s += 1;
    }
    // Always return s
    return s;
}

passwordInput.addEventListener("focus", () => {
    passwordStrength.style.display = "block";
});

toggleBtn.addEventListener("click", () => {
    if(toggleBtn.classList.contains("active")){
        passwordInput.setAttribute("type","password");
        toggleBtn.classList.remove("active");
    } else {
        passwordInput.setAttribute("type","text");
        toggleBtn.classList.add("active");
    }
});

passwordInput.addEventListener("keyup", e => {
    let value = e.target.value,
        strength = getPasswordStrength(value),
        inputValueLength = passwordInput.value.length;

    strength = Math.max(strength, 1);
    passwordStrengthSpans[1].style.width = strength * 20 + "%";

    if(inputValueLength <= 1) {
        console.log('zero')
        passwordStrength.style.display = 'none';
    }
    if(strength < 2){
        passwordStrengthSpans[0].innerText = "Weak";
        passwordStrengthSpans[0].style.color = "#111";
        passwordStrengthSpans[1].style.background = "#d13636";
    } else if(strength >= 2 && strength <= 4){
        passwordStrengthSpans[0].innerText = "Medium";
        passwordStrengthSpans[0].style.color = "#111";
        passwordStrengthSpans[1].style.background = "#e6da44";
    } else {
        passwordStrengthSpans[0].innerText = "Strong";
        passwordStrengthSpans[0].style.color = "#fff";
        passwordStrengthSpans[1].style.background = "#20a820";
    }
    // add condtioni for hiding on deleting
});
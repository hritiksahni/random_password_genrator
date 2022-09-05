let pass1El = document.getElementById("pass1")
let randomnumber = Math.floor(Math.random()*10)
let pass2El = document.getElementById("pass2")
let pass3El = document.getElementById("pass3")
let pass4El = document.getElementById("pass4")
let lengthEl = document.getElementById("length_id")
let length_value = ""


lengthEl.addEventListener("blur",function(){
 length_value = lengthEl.value
console.log(length_value)
})




console.log(randomnumber)

// function password()
// {
// let pass = ""


// for(i = 0; i < 11; i++)
// {
//     pass += Math.floor(Math.random()*10) 
// }

// pass1El.textContent = pass

// }


let chr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',1,2,3,4,5,6,7,8,9,0,'!', '@', '#', '$', '%', '^', '&', '*', '_', '=', '+', ':', '<', '>', '?' ]




function randomnoise()
{
    if( parseInt(length_value) < 31){
    
    for(k =0;k < 4; k++){
        let passs = ""
    for(i= 0;i < parseInt(length_value); i++){
    passs += chr[Math.floor(Math.random()*chr.length)]
    }

    if(k === 0){
        pass1El.textContent = passs
        
    }
    else if (k === 1){
        pass2El.textContent = passs
        
    }
    else if (k === 2){
        pass3El.textContent = passs
        
    }
    else{
        pass4El.textContent = passs

    }

}
}


else{
    pass1El.textContent = "Length too long"
    pass2El.textContent = "Length too long"
    pass3El.textContent = "Length too long"
    pass4El.textContent = "Length too long"
}
}
console.log(chr)








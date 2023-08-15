
let save1 = document.getElementById("message-p")
let count1 = document.getElementById("count-btn")
let count = 0;

function increment()
{
    count += 1
    count1.innerText = count
}

function save()
{
    let str = count + " - "
    save1.textContent += str
    console.log(str)

    count1.innerText = 0
    count = 0
}

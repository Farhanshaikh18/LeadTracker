const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    render()
    inputEl.value = ""
})

function render(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a target = '_blank' href = '"+"https://" +myLeads[i] + "'>" +  myLeads[i]+ "</a></li>"
        listItems += `<li>
        <a target = "_blank" href = https://${myLeads[i]} > ${myLeads[i]} </a>
        </li>`
    }

    ulEl.innerHTML = listItems
} 
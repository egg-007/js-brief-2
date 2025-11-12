const pages = [
document.getElementById('myinfo'),
document.getElementById('myjob'),
document.getElementById('myskills'),
document.getElementById('myschool'),
document.getElementById('mydownload')
]
const pbar = [
document.getElementById('bar1'),
document.getElementById('bar2'),
document.getElementById('bar3'),
document.getElementById('bar4'),
document.getElementById('bar5')
]

let currentIndex = 0 ;
// for next page    
function nextPage(test) {
    if (test && currentIndex < 4) {
        pages[currentIndex].classList.add('hiddenn');
        pbar[currentIndex].classList.remove('barcolor')
        pbar[currentIndex].classList.add('nextbarcolor')
        currentIndex++;
        pages[currentIndex].classList.remove('hiddenn');
        pbar[currentIndex].classList.remove('oldbarcolor')
        pbar[currentIndex].classList.add('barcolor')
        if(currentIndex !== 0)
            document.getElementById('Previousbtn').classList.remove('btncolor');
        if(currentIndex === 4)
            document.getElementById('nextbtn').classList.add('btncolor');
    } 
}
// for next previous page
function PreviousPage(test) {
    if (test && currentIndex > 0) {
        pages[currentIndex].classList.add('hiddenn');
        pbar[currentIndex].classList.remove('barcolor')
        pbar[currentIndex].classList.add('oldbarcolor')
        currentIndex--;
        pages[currentIndex].classList.remove('hiddenn');
        pbar[currentIndex].classList.add('barcolor')
        pbar[currentIndex].classList.remove('nextbarcolor')
        if(currentIndex !== 0)
            document.getElementById('nextbtn').classList.remove('btncolor');
        if(currentIndex === 0)
            document.getElementById('Previousbtn').classList.add('btncolor');
    } 
}

function setupNextButton() {
    const nextbtn = document.getElementById('nextbtn');
    const Previousbtn = document.getElementById('Previousbtn');
    nextbtn.addEventListener('click', () => {
        nextPage(true);
    });
    Previousbtn.addEventListener('click', () => {
        PreviousPage(true);
    });
}

// add and remove skills

let skillsId = 1;

const inputval = document.getElementById('Technical_Skills')
let addskils = document.getElementById('addskills');
const content = document.getElementById('pid');
const button = document.getElementById('btn');

inputval.addEventListener('keypress', (e) => { 
    const inp = inputval.value.trim()
    const skill = document.getElementById('skills').cloneNode(true)
    if(e.key == 'Enter' && inp != ""){
        e.preventDefault()
        if(skillsId === 1)
        {
            document.getElementById('skills').classList.remove('hiddenn');
            content.textContent = inp;
            content.id = (skillsId + 1000);
            button.id = (skillsId + 100);
            console.log("add")
        }
        else
        {
            skill.id = skillsId;
            console.log("skill.id")
            console.log(skill.id)
            skill.classList.remove('hiddenn');
            content.textContent = inp;
            content.id = (skillsId + 1000);
            button.id = (skillsId + 100);
            addskils.appendChild(skill)
            console.log("add2")
        }
        skillsId++;

        inputval.value = ""
    }
})

const div = document.getElementById('addskills')

const btnclicked = div.querySelectorAll('button')

btnclicked.forEach(button => {
    button.addEventListener('click',(e) =>{
        e.preventDefault();
        if(button.id == "btn") {
           document.getElementById('addskills').remove();
           console.log("in1")
        }
        else{
            let nid = Number(button.id) - 100;
            let elem = document.getElementById(nid)
            if(elem)
                elem.remove();
           console.log("in2")
        }
    })
})




setupNextButton();
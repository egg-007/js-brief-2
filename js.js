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

let schoolindex = 0;
let jobindex = 0;

const Education = {
    school : [],
    degree : [],
    startDate : [],
    endDate : [],
    company : [],
    job : [],
    startJobDate : [],
    endJobDate : [],
};

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
        nextPage(true); //validation
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


div.addEventListener('click', (e) => {
    const clicked = e.target.closest('button');
    if(clicked){
        e.preventDefault();
        clicked.parentElement.remove()
    }
})


let softId = 1;

const inputsoftval = document.getElementById('soft_skill')
let addsoft = document.getElementById('soft_skills');
const softContent = document.getElementById('cpid');
const softButton = document.getElementById('cbtn');

inputsoftval.addEventListener('keypress', (e) => { 
    const inp = inputsoftval.value.trim()
    const soft = document.getElementById('soft_skills_content').cloneNode(true)
    if(e.key == 'Enter' && inp != ""){
        e.preventDefault()
        if(softId === 1)
        {
            document.getElementById('soft_skills_content').classList.remove('hiddenn');
            softContent.textContent = inp;
            softContent.id = (softId + 1000);
            softButton.id = (softId + 100);
            console.log("add")
        }
        else
        {
            soft.id = softId;
            console.log("soft.id")
            console.log(soft.id)
            soft.classList.remove('hiddenn');
            softContent.textContent = inp;
            softContent.id = (softId + 1000);
            softButton.id = (softId + 100);
            addsoft.appendChild(soft)
            console.log("add2")
        }
        softId++;

        inputsoftval.value = ""
    }
})


const softDiv = document.getElementById('soft_skills')


softDiv.addEventListener('click', (e) => {
    const clicked = e.target.closest('button');
    if(clicked){
        e.preventDefault();
        clicked.parentElement.remove()
    }
})

// Education
const school = document.getElementById('school')
const degree = document.getElementById('degree')
const dateS = document.getElementById('dateS')
const dateN = document.getElementById('dateN')
const saveshool = document.getElementById('savebtn')
const savejob = document.getElementById('savejobbtn')

saveshool.addEventListener('click', (e) =>{
    e.preventDefault();
    Education.school[schoolindex] = school.value;
    Education.startDate[schoolindex] = dateS.value;
    Education.endDate[schoolindex] = dateN.value;
    if(degree.value == "")
        Education.degree[schoolindex] = "no degree";
    else
    Education.degree[schoolindex] = degree.value;
    schoolindex++;
    school.value = ""
    dateS.value = ""
    dateN.value = ""
    degree.value = ""

    const t = document.getElementById('schoolpart').id + schoolindex;
    console.log(t);

    console.log(Education);
})

// job
const company = document.getElementById('company')
const job = document.getElementById('job')
const dateS_job = document.getElementById('dateS_job')
const dateN_job = document.getElementById('dateN_job')

savejob.addEventListener('click', (e) =>{
    e.preventDefault();
    Education.company[schoolindex] = company.value;
    Education.job[schoolindex] = job.value;
    Education.startJobDate[schoolindex] = dateS_job.value;
    Education.endJobDate[schoolindex] = dateN_job.value;
    jobindex++;
    school.value = ""
    dateS.value = ""
    dateN.value = ""
    degree.value = ""

    const t = document.getElementById('schoolpart').id + schoolindex;

})



setupNextButton();
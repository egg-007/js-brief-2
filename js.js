const save1 = document.getElementById('save1')
const save2 = document.getElementById('save2')
const save3 = document.getElementById('save3')
// Education
const school = document.getElementById('school')
const degree = document.getElementById('degree')
const dateS = document.getElementById('dateS')
const dateN = document.getElementById('dateN')
const saveshool = document.getElementById('savebtn')
const savejob = document.getElementById('savejobbtn')
// job
const company = document.getElementById('company')
const job = document.getElementById('job')
const dateS_job = document.getElementById('dateS_job')
const dateN_job = document.getElementById('dateN_job')

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
let linksindex = 0;
let hskillsindex = 0;
let sskillsindex = 0;

const Education = {
    //INFO
    links : [],
    //job & skills
    hskills : [],
    //soft skills
    sskills : [],
    //SCHOOL
    school : [],
    degree : [],
    startDate : [],
    endDate : [],
    //JOB
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

// job & skills
const soft_skills = document.getElementById('soft_skills')
const soft_skill = document.getElementById('soft_skill')

soft_skill.addEventListener('keypress', (e) =>{
    if(e.key == 'Enter' && soft_skill.value.trim() != ""){
        e.preventDefault();
        Education.hskills[hskillsindex] = soft_skill.value.trim();
    
        const soft_skills_content = document.getElementById('soft_skills_content').id + hskillsindex;
        const cpid = document.getElementById('cpid').id + hskillsindex;
        const cbtn = document.getElementById('cbtn').id + hskillsindex;
        soft_skills.innerHTML += `
            <div id="${soft_skills_content}" class="flex">
                    <p id="${cpid}" class="border-2 w-auto text-center bg-white text-blue-500 text-2xl">${soft_skill.value}</p>
                    <button id="${cbtn}" class=" w-10 text-center redcolor text-white text-2xl">X</button>
            </div>
            `
        hskillsindex++;
        soft_skill.value = ""
    }
})

soft_skills.addEventListener('click', (e) => {
    const clicked = e.target.closest('button');
    if(clicked){
        e.preventDefault();
        clicked.parentElement.remove()
    }
})

// soft skills

const addskills = document.getElementById('addskills')
const Technical_Skills = document.getElementById('Technical_Skills')

Technical_Skills.addEventListener('keypress', (e) =>{
    if(e.key == 'Enter' && Technical_Skills.value.trim() != ""){
        e.preventDefault();
        Education.hskills[hskillsindex] = Technical_Skills.value.trim();
    
        const skills = document.getElementById('skills').id + hskillsindex;
        const pid = document.getElementById('pid').id + hskillsindex;
        const btn = document.getElementById('btn').id + hskillsindex;
        addskills.innerHTML += `
            <div id="${skills}" class="flex">
                    <p id="${pid}" class="border-2 w-auto text-center bg-white text-blue-500 text-2xl">${Technical_Skills.value}</p>
                    <button id="${btn}" class=" w-10 text-center redcolor text-white text-2xl">X</button>
            </div>
            `
        hskillsindex++;
        Technical_Skills.value = ""
    }
})

addskills.addEventListener('click', (e) => {
    const clicked = e.target.closest('button');
    if(clicked){
        e.preventDefault();
        clicked.parentElement.remove()
    }
})

//////////////////////////////////////////////////


saveshool.addEventListener('click', (e) =>{
    e.preventDefault();
    Education.school[schoolindex] = school.value;
    Education.startDate[schoolindex] = dateS.value;
    Education.endDate[schoolindex] = dateN.value;
    if(degree.value == "")
        Education.degree[schoolindex] = "no degree";
    else
    Education.degree[schoolindex] = degree.value;

const schoolpart = document.getElementById('schoolpart').id + schoolindex;
const schoolData = document.getElementById('schoolData').id + schoolindex;
const schoolDataBtn = document.getElementById('schoolDataBtn').id + schoolindex;
const schoolp = document.getElementById('schoolp')
        schoolp.innerHTML += `
        <div id="${schoolpart}">
            <p id="${schoolData}" class="bgtext border-2 rounded-md m-4 p-2 w-3/4 text-center">School / university name : ${Education.school[schoolindex]} degree : ${Education.degree[schoolindex]} Start dates : ${Education.startDate[schoolindex]} end dates : ${Education.endDate[schoolindex]}</p>
            <button id="${schoolDataBtn}" class="text-lg btn rounded-md m-4 p-2 text-center">Cancel</button>
            </div>
            `
    school.value = ""
    dateS.value = ""
    dateN.value = ""
    degree.value = ""
    schoolindex++;
})

const cansel = document.getElementById('schoolp')


cansel.addEventListener('click', (e) => {
    const clicked = e.target.closest('button');
    if(clicked){
        e.preventDefault();
        clicked.parentElement.remove()
    }
})

savejob.addEventListener('click', (e) =>{
    e.preventDefault();
    Education.company[jobindex] = company.value;
    Education.job[jobindex] = job.value;
    Education.startJobDate[jobindex] = dateS_job.value;
    Education.endJobDate[jobindex] = dateN_job.value;
    
    const jobpart = document.getElementById('jobpart').id + jobindex;
    const jobData = document.getElementById('jobData').id + jobindex;
    const jobDataBtn = document.getElementById('jobDataBtn').id + jobindex;
    const jobp = document.getElementById('jobp')
    jobp.innerHTML += `
        <div id="${jobpart}">
        <p id="${jobData}" class="bgtext border-2 rounded-md m-4 p-2 w-3/4 text-center">Company name : ${Education.company[jobindex]} Job title : ${Education.job[jobindex]} Start dates : ${Education.startJobDate[jobindex]} end dates : ${Education.endJobDate[jobindex]}</p>
        <button id="${jobDataBtn}" class="text-lg btn rounded-md m-4 p-2 text-center">Cancel</button>
        </div>
        `
    jobindex++;
    company.value = ""
    job.value = ""
    dateS_job.value = ""
    dateN_job.value = ""
})

const canseljob = document.getElementById('jobp')


canseljob.addEventListener('click', (e) => {
    const clicked = e.target.closest('button');
    if(clicked){
        e.preventDefault();
        clicked.parentElement.remove()
    }
})


const inplink = document.getElementById('links')
const links = document.getElementById('linkss')
const btnlink = document.getElementById('linkbtn')

btnlink.addEventListener('click', (e) =>{
    e.preventDefault();
    Education.links[linksindex] = inplink.value;
    if (inplink.value){
        const lnk = document.getElementById('lnk').id + linksindex;
        const lnktxt = document.getElementById('lnktxt').id + linksindex;
        const Cancelbtn = document.getElementById('Cancelbtn').id + linksindex;
        links.innerHTML += `
        <div id="${lnk}">
        <p id="${lnktxt}" class="bgtext border-2 rounded-md m-4 p-2 w-3/4 text-center">link : ${Education.links[linksindex]} </p>
        <button id="${Cancelbtn}" class="text-lg btn rounded-md m-4 p-2 text-center">Cancel</button>
        </div>
        `
            linksindex++;
    }
    inplink.value = ""
})

links.addEventListener('click', (e) => {
    const clicked = e.target.closest('button');
    if(clicked){
        e.preventDefault();
        clicked.parentElement.remove()
    }
})



save1.addEventListener('click', (e) =>{
    e.preventDefault()
    Education.a_first_name = document.getElementById('first_name').value
    Education.a_last_name = document.getElementById('last_name').value
    Education.a_email = document.getElementById('email').value
    Education.a_phone = document.getElementById('phone').value
    Education.a_date = document.getElementById('date').value
    Education.a_address = document.getElementById('address').value
})

save2.addEventListener('click', (e) =>{
    e.preventDefault()
    Education.b_Job_title = document.getElementById('Job_title').value
    Education.b_description = document.getElementById('description').value
    Education.b_Position_sought = document.getElementById('Position_sought').value
    Education.b_Career_objectives = document.getElementById('Career_objectives').value
})

save3.addEventListener('click', (e) =>{
    e.preventDefault()
    Education.English = document.getElementById('English').value
    Education.French = document.getElementById('French').value
    Education.Arabic = document.getElementById('Arabic').value
})

const n = document.getElementById('download')
n.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(Education)
})

setupNextButton();
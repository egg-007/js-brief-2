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
        if(currentIndex === 4){
            document.getElementById('nextbtn').classList.add('btncolor');
            localStorage.setItem('Education', JSON.stringify(Education));
        }
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
/////////////////////////////////////////////

function downloadPDF() {
    const element = document.getElementById("pdf");

    html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jspdf.jsPDF('p', 'mm', 'a4');

        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, width, height);
        pdf.save("myfile.pdf");
    });
}




///////////////////////////////////////////////
const img = document.getElementById('templet1')
const img2 = document.getElementById('templet2')

img.addEventListener('click', (e)=>{
    e.preventDefault()
    downloadPDF();
    document.getElementById('header').classList.add("hiddenn")
    document.getElementById('mydownload').classList.add("hiddenn")
    document.getElementById('body').innerHTML = `
    <div id="pdf" class="resume-container">
    
    <header class="resume-header">
        <div class="header-left">
            <h1 class="header-name">${Education.a_first_name} ${Education.a_last_name}</h1>
            <div class="header-role">${Education.b_Job_title}</div>
            
            <div class="contact-info">
                <div class="contact-item"><i class="fas fa-phone"></i>${Education.a_phone}</div>
                <div class="contact-item"><i class="fas fa-envelope"></i> ${Education.a_email}</div>
                <div class="contact-item"><i class="fab fa-linkedin"></i>${Education.links}</div>
            </div>
        </div>
        <img src="profile.jpg" alt="Profile Photo" class="header-photo">
    </header>

    <section class="resume-section">
        <h2 class="section-title">Summary</h2>
        <p>${Education.b_description}</p>
    </section>

    <section class="resume-section">
        <h2 class="section-title">Skills</h2>
        <div class="skills-grid">
            <div class="skill-item">
                <strong>Arabic ${Education.Arabic},French ${Education.French}, English ${Education.English} </strong>
                <span>${Education.hskills}</span>
            </div>
        </div>
    </section>

    <section class="resume-section">
        <h2 class="section-title">Projects</h2>

        <div class="job-entry">
            <div class="job-header">
                <div class="job-title-row">
                    Dynamic Skills Tracker
                    <a href="#" class="view-code-link"><i class="fab fa-github"></i> View Code</a>
                </div>
                <div class="job-meta">
                    <span>Nov 2025 - Present</span>
                    <span>Pure JavaScript, CSS</span>
                </div>
            </div>
            <ul>
                <li>Engineered a feature to dynamically add and remove HTML elements using <code>document.createElement</code> and <code>appendChild</code>.</li>
                <li>Solved a complex bug where event listeners were not attaching to newly created elements by implementing <strong>Event Delegation</strong> on the parent container.</li>
                <li>Utilized <code>e.preventDefault()</code> to handle form submissions seamlessly without page reloads.</li>
                <li>Implemented input validation to prevent empty or duplicate skill entries.</li>
            </ul>
        </div>

        <div class="job-entry">
            <div class="job-header">
                <div class="job-title-row">
                    ${Education.b_Job_title} 
                </div>
                <div class="job-meta">
                    <span>Nov 2025</span>
                    <span>Creative Direction</span>
                </div>
            </div>
            <ul>
                <li>Led the creative direction for "L’Annonce Galactique," ensuring visual consistency with Sci-Fi/Cyberpunk themes.</li>
                <li>Coordinated script requirements in multiple languages (French & Darija) to target specific audience demographics.</li>
            </ul>
        </div>
    </section>

    <section class="resume-section">
        <h2 class="section-title">Education</h2>
        
        <div class="job-entry" style="border-bottom: none;">
            <div class="job-header">
                <div class="job-title-row">Self-Taught Web Development</div>
                <div class="job-meta">
                    <span>2024 - Present</span>
                </div>
            </div>
            <ul>
                <li>Focus on JavaScript Algorithms, Data Structures, and DOM interaction.</li>
                <li>Completed rigorous practical coding challenges and live coding sessions.</li>
            </ul>
            </div>
            </section>
            
            </div>
            <div class="flex justify-center m-4">
                    <button id="download" onclick="downloadPDF()" class="border-2 px-4 py-2 rounded-2xl m-4 bg-blue-500 text-white text-2xl">download</button>
                </div>
            `
    })
img2.addEventListener('click', (e)=>{
    e.preventDefault()
    document.getElementById('header').classList.add("hiddenn")
    document.getElementById('mydownload').classList.add("hiddenn")
    document.getElementById('body').innerHTML = `
    <div class="resume-container-2">

    <header class="top-header">
        <div class="header-text">
            <h1 class="main-name">YOUR <br> NAME</h1>
            <h2 class="sub-role">FRONTEND DEVELOPER</h2>
        </div>
        <div class="header-image-wrapper">
            <img src="profile.jpg" alt="Profile Photo" class="profile-circle">
        </div>
    </header>

    <hr class="header-line">

    <div class="content-wrapper">
        
        <aside class="sidebar">
            
            <div class="sidebar-section">
                <h3 class="sidebar-title">CONTACT</h3>
                <div class="contact-details">
                    <p>123 Street Name, City</p>
                    <p>+212 600 000 000</p>
                    <p>email@example.com</p>
                    <p>github.com/yourname</p>
                </div>
            </div>
            
            <hr class="sidebar-divider">

            <div class="sidebar-section">
                <h3 class="sidebar-title">SKILLS</h3>
                <ul class="sidebar-list">
                    <li>JavaScript (ES6+)</li>
                    <li>DOM Manipulation</li>
                    <li>Event Delegation</li>
                    <li>HTML5 & CSS3</li>
                    <li>Git & GitHub</li>
                    <li>Debugging (DevTools)</li>
                </ul>
            </div>

            <hr class="sidebar-divider">

            <div class="sidebar-section">
                <h3 class="sidebar-title">INTERESTS</h3>
                <ul class="sidebar-list">
                    <li>Algorithmic Logic</li>
                    <li>UI/UX Design</li>
                    <li>Video Production</li>
                    <li>Football Analytics</li>
                </ul>
            </div>

        </aside>

        <main class="main-content">
            
            <section class="main-section">
                <h3 class="section-heading">PROFILE</h3>
                <p class="profile-text">
                    Dedicated Frontend Developer with a passion for building interactive web applications. specialized in <strong>JavaScript logic</strong> and DOM manipulation. Recently completed complex projects involving dynamic content generation and event handling without external frameworks. Eager to apply problem-solving skills in a professional environment.
                </p>
            </section>

            <hr class="main-divider">

            <section class="main-section">
                <h3 class="section-heading">EDUCATION</h3>
                
                <div class="timeline-item">
                    <div class="timeline-date">
                        2024 <br> - <br> PRESENT
                    </div>
                    <div class="timeline-content">
                        <h4>Self-Taught Web Development</h4>
                        <span class="institution">Online Curriculum / Personal Projects</span>
                        <p>Focus on JavaScript core concepts, Data Structures, and Browser Rendering optimization.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">
                        2020 <br> - <br> 2023
                    </div>
                    <div class="timeline-content">
                        <h4>Bachelor of Science</h4>
                        <span class="institution">University of Morocco</span>
                    </div>
                </div>
            </section>

            <hr class="main-divider">

            <section class="main-section">
                <h3 class="section-heading">PROJECT EXPERIENCE</h3>
                
                <div class="timeline-item">
                    <div class="timeline-date">
                        NOV 2025
                    </div>
                    <div class="timeline-content">
                        <h4>Dynamic Skills Tracker</h4>
                        <span class="institution">Personal JavaScript Project</span>
                        <ul class="main-list">
                            <li>Built a responsive UI that allows users to add/remove skills dynamically using <code>document.createElement</code>.</li>
                            <li>Implemented <strong>Event Delegation</strong> to handle clicks on dynamically generated buttons, improving performance.</li>
                            <li>Solved complex DOM traversal issues to ensure the correct parent elements were deleted upon user interaction.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">
                        NOV 2025
                    </div>
                    <div class="timeline-content">
                        <h4>Marshal Prime Project</h4>
                        <span class="institution">Multimedia Direction</span>
                        <ul class="main-list">
                            <li>Led the creative direction for "L’Annonce Galactique," coordinating scriptwriting in Darija and French.</li>
                            <li>Managed visual assets to ensure consistency with the project's sci-fi theme.</li>
                        </ul>
                    </div>
                </div>
            </section>

        </main>
    </div>
</div>
<div class="flex justify-center m-4">
                    <button id="download" onclick="downloadPDF()" class="border-2 px-4 py-2 rounded-2xl m-4 bg-blue-500 text-white text-2xl">download</button>
                </div>
    `
})
setupNextButton();
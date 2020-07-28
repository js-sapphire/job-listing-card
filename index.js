const data = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "FullStack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ];


function createCard(details) {

const { id:key, company, logo, featured, position, postedAt, contract, location, role, level, languages, tools
} = details;

const newSpan = details.new ? `<span class="newSpan">NEW!</span>`: ``;
const leftSectionFeatured = details.new && featured ? `leftSectionFeatured` : ``;
const littleTopPadding = !(details.new || featured) ? `littleTopPadding`: ``;
const featuredSpan = featured ? `<span class="newSpan featuredSpan">FEATURED</span>`: ``;
let tagSpan = ``;
tagSpan += `<span class="tagSpan">${role}</span>`
tagSpan += `<span class="tagSpan">${level}</span>`
languages.forEach((lang) => {
    tagSpan += `<span class="tagSpan">${lang}</span>`
})
tools.forEach((tool) => {
    tagSpan += `<span class="tagSpan">${tool}</span>`
})

const cardParentDiv = document.createElement('div');
cardParentDiv.classList.add('cardParent');

cardParentDiv.innerHTML = `<div class="card ${leftSectionFeatured}">
    <div class="left">
      <div class="centerMe littlePadding">
        <div class="circle">
          <img src="${logo}">
        </div>
      </div>
    <div class="details">
      <div class="detailsUpper">
        <span class="companySpan">${company}</span>
        ${newSpan}
        ${featuredSpan}
      </div>
      <span class="positionSpan ${littleTopPadding}">${position}</span>
      <div class="detailsLower">
        <span class="">${postedAt}</span>
        <span class="delimeter">.</span>
        <span class="">${contract}</span>
        <span class="delimeter">.</span>
        <span class="">${location}</span>
      </div>
    </div>
  </div>

    <div class="right centerMe">
      <div class="tags">
        ${tagSpan}
      </div>
    </div>
  </div>`;


return cardParentDiv;
}


function init(){
    const containerDiv = document.querySelector('.container');
    data.forEach((details) => {
        const card = createCard(details);
        containerDiv.appendChild(card);
    })
}

init();

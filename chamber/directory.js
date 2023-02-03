const url = 'https://jacquebento.github.io/1_WDD230/chamber/data/members.json';
const giturl = "https://jacquebento.github.io/1_WDD230/"

const cards = document.querySelector('#cards');

async function getMembersData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
      let card = document.createElement('section');
      card.className = "members";
      let logo = document.createElement('img');
      logo.className = "logo";
      let name = document.createElement('h2'); 
      let adress = document.createElement('h3');
      let phone = document.createElement('h3');
      let website = document.createElement('h3');
      let membership = document.createElement('h3');
      
  
      
      name.textContent = `${member.name}`; 
      adress.textContent = `Address: ${member.address}`;
      phone.textContent = `Phone: ${member.phone}`;
      website.textContent = `Website: ${member.website}`;
      membership.textContent = `Membership Level: ${member.membLevel}`;
      
      logo.setAttribute('src', member.logo);
      logo.setAttribute('alt', `Logo of ${member.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '340');
      logo.setAttribute('height', '440');
  
      
      card.appendChild(name); 
      card.appendChild(adress);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(membership);
      card.appendChild(logo);
  
      cards.appendChild(card);
    }); 
  }

getMembersData();
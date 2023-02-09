const getContact = () => {
  // create a menu div
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const info = document.createElement("p");
  info.textContent = "Contact Information";
  contact.appendChild(info);

  // phone number
  const phone = document.createElement("p");
  phone.textContent = "☎️ Phone number: 0367123123";
  contact.appendChild(phone);

  // address
  const address = document.createElement("p");
  address.textContent = "🪴 Address: 528 Swanston St, Carlton VIC, 3053";
  contact.appendChild(address);

  // address
  const opening_hour = document.createElement("p");
  opening_hour.textContent = "🕰️ Opening hours:";
  contact.appendChild(opening_hour);

  // hours
  const hours = document.createElement("div");
  const weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const opening = ['08:00 am - 02:30 pm', '08:00 am - 02:30 pm', '08:00 am - 02:30 pm', '08:00 am - 02:30 pm', '08:00 am - 02:30 pm', '08:00 am - 03:30 pm', '08:00 am - 03:30 pm'];
  for (let i = 0; i < 7; i++) {
    const day = document.createElement('p');
    day.textContent = weekday[i];
    const hour = document.createElement('p');
    hour.textContent = opening[i];
    hours.appendChild(day);
    hours.appendChild(hour);
  }
  hours.classList.add('opening-hour');
  contact.appendChild(hours);

  const content = document.querySelector("#content");
  content.replaceChild(contact, content.children[1]);
};

export default getContact;

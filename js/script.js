let form = document.querySelector(".site-form");
let usersList = document.querySelector(".list");

// Create elements
let nameInput = document.createElement("input");
let ageInput = document.createElement("input");
let emailInput = document.createElement("input");
let submitBtn = document.createElement("button");

// Set attributes to elements
nameInput.id = "name";
nameInput.type = "text";
nameInput.placeholder = "Name";
nameInput.required = true;
nameInput.minLength = 4;
nameInput.className = "inputs"

ageInput.id = "age";
ageInput.type = "number";
ageInput.placeholder = "Age";
ageInput.required = true;
ageInput.minLength = 4;
ageInput.className = "inputs"

emailInput.id = "email";
emailInput.type = "email";
emailInput.placeholder = "Email";
emailInput.required = true;
emailInput.minLength = 4;
emailInput.className = "inputs"

// Text content
submitBtn.className = "btn"
submitBtn.textContent = "Submit";

// Append elements
form.append(nameInput);
form.append(ageInput);
form.append(emailInput);
form.append(submitBtn);

// users array
let users = [];

// handle submit function
function handleSubmit(e) {
  e.preventDefault();

  // create user object
  let user = {
    name: nameInput.value,
    ageInput: ageInput.value,
    emailInput: emailInput.value,
  };

  //   add user object to users array
  users.push(user);

  // clear inputs
  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";

  console.log(users);

  renderUsers();
}

// Add event listener to form
form.addEventListener("submit", handleSubmit);

// Render users array
function renderUsers() {
  usersList.innerHTML = null;
  for (let i = 0; i < users.length; i++) {
    //   create li
    let li = document.createElement("li");
    li.className = "list-item";

    // Create h3
    let h3 = document.createElement("h3");
    // Shu yerda class berasiz
    // h3.className = "";
    h3.textContent = users[i].name;
    li.appendChild(h3);

    // create age p
    let ageTextP = document.createElement("p");
    // ageTextP.className = "";
    ageTextP.textContent = users[i].ageInput;
    li.appendChild(ageTextP);

    // create email p
    let emailTextP = document.createElement("p");
    // emailTextP.className = "";
    emailTextP.textContent = users[i].emailInput;
    li.appendChild(emailTextP);

    usersList.appendChild(li);
  }
}

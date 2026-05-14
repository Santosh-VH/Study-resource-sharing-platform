
let resources = [];

function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username && password){
        alert("Login Successful");
    }else{
        alert("Enter Username and Password");
    }
}

function addResource(){

    let title = document.getElementById("title").value;
    let subject = document.getElementById("subject").value;
    let description = document.getElementById("description").value;
    let link = document.getElementById("link").value;
    let fileInput = document.getElementById("fileInput");

    let fileName = "";

    if(fileInput.files.length > 0){
        fileName = fileInput.files[0].name;
    }

    if(title === "" || subject === ""){
        alert("Please fill required fields");
        return;
    }

    let resource = {
        title,
        subject,
        description,
        link,
        fileName
    };

    resources.push(resource);

    displayResources(resources);

    document.getElementById("title").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("description").value = "";
    document.getElementById("link").value = "";
    document.getElementById("fileInput").value = "";
}

function displayResources(data){

    let resourceList = document.getElementById("resourceList");

    resourceList.innerHTML = "";

    data.forEach((resource, index) => {

        resourceList.innerHTML += `
        <div class="card">
            <h3>${resource.title}</h3>
            <p><b>Subject:</b> ${resource.subject}</p>
            <p>${resource.description}</p>

            ${resource.fileName ? `<p><b>File:</b> ${resource.fileName}</p>` : ""}

            ${resource.link ? `<a href="${resource.link}" target="_blank">Open Resource Link</a>` : ""}

            <br><br>

            <button onclick="deleteResource(${index})">Delete</button>
        </div>
        `;
    });
}

function deleteResource(index){
    resources.splice(index,1);
    displayResources(resources);
}

function searchResource(){

    let keyword = document.getElementById("search").value.toLowerCase();

    let filtered = resources.filter(resource =>
        resource.subject.toLowerCase().includes(keyword) ||
        resource.title.toLowerCase().includes(keyword)
    );

    displayResources(filtered);
}

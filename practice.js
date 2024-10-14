//document.addEventListener("DOMContentLoaded",() => {
  //  fetch("http://localhost:3000/students")
  //  .then(response => response.json())
    //.then(data => {
       // data.forEach(student => {
           // displayStudents(student) 
       
    //    });
   // })
    //.catch(err => console.log(err));

    //document.getElementById("add.form").addEventListener("submit",(event) => {
  //      event.preventDefault()
   //     const formdata = new FormData(event.target)
   //     const newData = {
   //         name:formdata.get("name"),
   //         age:formdata.get("age"),
   //         studentNo:formdata.get("studno")
   //     };
//fetch("http://localhost:3000/students",{
      //      method:"POST",
      ////      headers: {
      //          'content-type':'application/json'
     //       },
    //        body: JSON.stringify(newData)
     //       
        //})
     //   .then(res => res.json())
        
    //})


//});



//function displayStudents(student){
  //  let studentContainer = document.createElement("div");
  //  studentContainer.classList.add("student"); 
  //  studentContainer.innerHTML = `
     //  <p>Name: ${student.name}</p>
       //<p>Age: ${student.age}</p>
      // <p>Number: ${student.studentNo}</p>
       //<form id="edit-form" onsubmit="editStud(event.this.${student.id})>
           //  <label for="name">New Name</label>
           //  <input type="text" id="name" name="name" required>
           //  <button>Update</button>
      // </form>
        //<button onclick="deleteStud(${student.id})">Delete</button>
    // `;
   //let studList = document.getElementById("students")
    //studList.appendChild(studentContainer)

//}

//function deleteStud(id){
    //fetch(`http://localhost:3000/students/${id}`,{
     //   method: "DELETE",
     //   headers: {
    //        'Content-Type': "application/json"
      //  }
   // })
   // .then(res => res.json())
    //.then(() => {
    //    alert("Deleted successfully")
    //})
    //.catch(error => console.log(error))
//}//
//function editStud(e,form.id){
//  e.preventDefault()
//} 
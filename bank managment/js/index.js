let worker = [
  {
    id: 1,
    workerName: "Rza",
    workerSurname: "Mirzeyev",
    workerType: "Developer",
    workerSalary: 4500,
    img: "https://st2.depositphotos.com/1017228/9855/i/600/depositphotos_98555688-stock-photo-thoughtful-programmer-coding-in-the.jpg",
  },
  {
    id: 2,
    workerName: "Cavad",
    workerSurname: "Manafov",
    workerType: "Developer",
    workerSalary: 4000,
    img: "http://st2.depositphotos.com/1643295/7439/i/450/depositphotos_74390343-Smiling-software-developer.jpg",
  },
  {
    id: 3,
    workerName: "Sahin",
    workerSurname: "Bayramov",
    workerType: "ProductOwner",
    workerSalary: 3500,
    img: "https://previews.123rf.com/images/dragonimages/dragonimages1802/dragonimages180201123/98340151-software-developer.jpg",
  },
  {
    id: 4,
    workerName: "Raul",
    workerSurname: "Mammadli",
    workerType: "Tester",
    workerSalary: 3000,
    img: "https://media.megger.com/mediacontainer/medialibraries/meggerglobal/product-catagories/motor%20and%20generator%20testing/motor-and-generator-testing.jpg?ext=.jpg",
  },
  {
    id: 5,
    workerName: "Turay",
    workerSurname: "Humbatov",
    workerType: "Tester",
    workerSalary: 3000,
    img: "https://c8.alamy.com/comp/2HPGJWX/professional-young-industrial-factory-woman-employee-working-with-machine-parts-putting-checking-and-testing-industrial-equipments-and-robot-arms-in-2HPGJWX.jpg",
  },
  {
    id: 6,
    workerName: "Nurcan",
    workerSurname: "Ismayilova",
    workerType: "ProductOwner",
    workerSalary: 3500,
    img: "https://hiredigital.com/img/Image_1.webp",
  },
  {
    id: 6,
    workerName: "Huseyn",
    workerSurname: "Babayev",
    workerType: "Tester",
    workerSalary: 3000,
    img: "https://img.freepik.com/premium-photo/confident-clever-positive-arabian-indian-stylish-man-with-glasses-freelancer-product-manager-sit-desk-home-kitchen-working-project-uses-laptop-studying-documents-smiling_754108-696.jpg?w=2000",
  },
  {
    id: 7,
    workerName: "Cristiano",
    workerSurname: "Ronaldo siuuu",
    workerType: "Developer",
    workerSalary: 4500,
    img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1920,h_1080,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/90min_fr_international_web/01g2svkdt1xexaaagynj.jpg",
  },
  {
    id: 8,
    workerName: "Aytac",
    workerSurname: "Aslanli",
    workerType: "ProductOwner",
    workerSalary: 3500,
    img: "https://as1.ftcdn.net/v2/jpg/05/42/64/56/1000_F_542645693_8O4ZH0HCuL7npFqVlKpuXGEOkqZZ5vUL.jpg",
  },
];
worker.forEach(function (item) {
  let card = `
    <div class="col-3 p-3">
      <div class="items border  rounded-lg">
        <img
          src="${item.img}"
          alt="${item.workerType}"
        />
        <div class="info pl-3">
          <div class="workerType font-weight-bold">
            <span>${item.workerType}</span>
          </div>
          <div class="workerName"><span>${item.workerName} ${item.workerSurname}</span></div>
          <div class="worker-info">
            <span>${item.workerSalary} AZN</span>
          </div>
        </div>
      </div>`;
  workers.innerHTML += card;
});
// show all button
const showAllWorker = document.querySelector("#showallbutton");
showAllWorker.addEventListener("click", () => {
  workers.innerHTML = "";
  worker.forEach(function (item) {
    let card = `
    <div class="col-3 p-3">
      <div class="items border  rounded-lg">
        <img
          src="${item.img}"
          alt="${item.workerType}"
        />
        <div class="info pl-3">
          <div class="workerType font-weight-bold">
            <span>${item.workerType}</span>
          </div>
          <div class="workerName"><span>${item.workerName} ${item.workerSurname}</span></div>
          <div class="worker-info">
            <span>${item.workerSalary} AZN</span>
          </div>
        </div>
      </div>`;
    workers.innerHTML += card;
  });
});
// show button
const showButton = document.querySelector("#showButton");
showButton.addEventListener("click", () => {
  let filtreWorkerType = document
    .querySelector("#inputWorkerType")
    .value.toLocaleLowerCase();
  let filtreWorkerName = document.querySelector("#searchName").value;
  let filtreWorkerSurname = document.querySelector("#searchSurname").value;
  let filtreMin = document.querySelector("#minPrice").value;
  let filtreMax = document.querySelector("#maxPrice").value;
  console.log(filtreWorkerType);
  filtreShowName(
    filtreWorkerType,
    filtreWorkerName,
    filtreWorkerSurname,
    filtreMin,
    filtreMax
  );
});

// name and surname filtre
function filtreShowName(filtreWorkerType, name, surname, filtreMin, filtreMax) {
  workers.innerHTML = "";

  worker.forEach(function (item) {
    if (
      (item.workerType.toLocaleLowerCase() === filtreWorkerType &&
        item.workerName.includes(name) &&
        item.workerSurname.includes(surname) &&
        item.workerSalary > filtreMin &&
        item.workerSalary < filtreMax) ||
      (item.workerType.toLocaleLowerCase() === filtreWorkerType &&
        item.workerName.includes(name) &&
        item.workerSurname.includes(surname)) ||
      (item.workerSalary > filtreMin && item.workerSalary < filtreMax)
    ) {
      let card = `
    <div class="col-3 p-3">
      <div class="items border  rounded-lg">
        <img
          src="${item.img}"
          alt="${item.workerType}" 
        />
        <div class="info pl-3">
          <div class="workerType font-weight-bold">
            <span>${item.workerType}</span>
          </div>
          <div class="workerName"><span>${item.workerName} ${item.workerSurname}</span></div>
          <div class="worker-info">
            <span>${item.workerSalary} AZN</span>
          </div>
        </div>
      </div>`;
      workers.innerHTML += card;
    }
  });
}
// name and surname filtre end

// edit section
const editWorker = document.querySelector("#editWorkers");
editWorker.addEventListener("click", () => {
  document.querySelector("#searching").style.display = "none";
  document.querySelector("#workerList").style.display = "none";
  document.querySelector("#editWorker").style.display = "block";
});
const editSumbitWorker = document.querySelector("#editBtn");
editSumbitWorker.addEventListener("click", (e) => {
  e.preventDefault();
  const editWorkerId = document.querySelector("#editid").value;
  const editWOrkerName = document.querySelector("#editname").value;
  const editWorkerSurname = document.querySelector("#editsurname").value;
  const editWorkerSalary = document.querySelector("#editsalary").value;
  const editWorkerType = document.getElementById("edittypes").value;
  workers.innerHTML = "";
  worker.forEach(function (item) {
    if (editWorkerId == item.id) {
      item.workerName = editWOrkerName;
      item.workerSurname = editWorkerSurname;
      item.workerSalary = editWorkerSalary;
      item.workerType = editWorkerType;
    }
  });
  worker.forEach(function (item) {
    let card = `
      <div class="col-3 p-3">
        <div class="items border  rounded-lg">
          <img
            src="${item.img}"
            alt="${item.workerType}"
          />
          <div class="info pl-3">
            <div class="workerType font-weight-bold">
              <span>${item.workerType}</span>
            </div>
            <div class="workerName"><span>${item.workerName} ${item.workerSurname}</span></div>
            <div class="worker-info">
              <span>${item.workerSalary} AZN</span>
            </div>
          </div>
        </div>`;
    workers.innerHTML += card;
  });

  document.querySelector("#searching").style.display = "block";
  document.querySelector("#workerList").style.display = "block";
  document.querySelector("#editWorker").style.display = "none";
});

// add worker
const addNewWorker = document.querySelector("#addNewWorkers");
addNewWorker.addEventListener("click", () => {
  document.querySelector("#searching").style.display = "none";
  document.querySelector("#workerList").style.display = "none";
  document.querySelector("#register").style.display = "block";
});
const addSumbitWorker = document.querySelector("#addNewWorker");
addSumbitWorker.addEventListener("click", (e) => {
  e.preventDefault();
  const inputAddWorkerType = document.querySelector("#types");
  const inputAddWorkerName = document.querySelector("#addWorkerName");
  const inputAddWorkerSurname = document.querySelector("#addWorkerSurname");
  const inputAddWorkerSalary = document.querySelector("#addworkerSalary");
  const inputAddImg = document.querySelector("#addWorkerImage");
  worker[worker.length] = {
    id: worker.length + 1,
    workerName: inputAddWorkerName.value,
    workerSurname: inputAddWorkerSurname.value,
    workerSalary: inputAddWorkerSalary.value,
    workerType: inputAddWorkerType.value,
    img: inputAddImg.value,
  };
  workers.innerHTML = "";
  worker.forEach(function (item) {
    let card = `
    <div class="col-3 p-3">
      <div class="items border  rounded-lg">
        <img
          src="${item.img}"
          alt="${item.workerType}"
        />
        <div class="info pl-3">
          <div class="workerType font-weight-bold">
            <span>${item.workerType}</span>
          </div>
          <div class="workerName"><span>${item.workerName} ${item.workerSurname}</span></div>
          <div class="worker-info">
            <span>${item.workerSalary} AZN</span>
          </div>
        </div>
      </div>`;
    workers.innerHTML += card;
  });
  document.querySelector("#searching").style.display = "block";
  document.querySelector("#workerList").style.display = "block";
  document.querySelector("#register").style.display = "none";
});
// delete start
document.querySelector("#delete").addEventListener("click", () => {
  document.querySelector("#searching").style.display = "none";
  document.querySelector("#workerList").style.display = "none";
  document.querySelector("#deleteWorker").style.display = "block";
});
const deleteBtn = document.querySelector("#deleteBtn");
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const deleteId = document.querySelector("#deleteid").value;

  worker.forEach(function (item) {
    if (item.id == deleteId) {
      delete worker[deleteId - 1];
      workers.innerHTML = "";
    }
  });
  worker.forEach(function (item) {
    let card = `
    <div class="col-3 p-3">
      <div class="items border  rounded-lg">
        <img
          src="${item.img}"
          alt="${item.workerType}"
        />
        <div class="info pl-3">
          <div class="workerType font-weight-bold">
            <span>${item.workerType}</span>
          </div>
          <div class="workerName"><span>${item.workerName} ${item.workerSurname}</span></div>
          <div class="worker-info">
            <span>${item.workerSalary} AZN</span>
          </div>
        </div>
      </div>`;
    workers.innerHTML += card;
  });
});
document.querySelector("#deleteAfterMain").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#searching").style.display = "block";
  document.querySelector("#workerList").style.display = "block";
  document.querySelector("#deleteWorker").style.display = "none";
});
// delete end

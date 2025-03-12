const catagoryButton = document.getElementById("catagory-btn");
const vedio = document.getElementById("Vedio");

const recivedCatagoryBtn = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(catagory => displayCatagoryBtn(catagory.categories))
        .catch(err => console.log(err));
};

const displayCatagoryBtn = (catagories) => {
    catagories.forEach(cat => {
        const createBtn = document.createElement("div");
        createBtn.innerHTML = `<button id="${cat.category_id}" class="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg">${cat.category}</button>`;
        catagoryButton.appendChild(createBtn);
    });

    const buttonCollect = document.querySelectorAll("#catagory-btn button");
    for (const btn of buttonCollect) {
        btn.addEventListener("click", (event) => {
            for (let i = 0; i < buttonCollect.length; i++) {
                const buttonRemoveClass = buttonCollect[i];
                buttonRemoveClass.classList.remove('bg-primary');
                buttonRemoveClass.classList.add('bg-gray-500');
            }
            event.target.classList.add("bg-primary");
            event.target.classList.remove('bg-gray-500');
        });
    }
};

recivedCatagoryBtn();

const recivedVedio = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(listOfVedio => displayVedioAll(listOfVedio.videos))
        .catch(err => console.log(err, "maara kha"));
};

recivedVedio();

const displayVedioAll = (allVedios) => {
    allVedios.forEach(vedio => {
        console.log(vedio);
        const createCard = document.createElement("div");
        createCard.innerHTML = `
            <div class="shadow-sm p-3 border border-bordercolor rounded-lg">
                <!-- image  -->
                <div class=""><img src=${vedio.thumbnail} class="rounded-lg" alt=""></div>
                <!-- text content  -->
                <div class="my-3 ">
                    <div class="flex gap-1">
                        <!-- profile picture  -->
                        <div class="w-12 h-12 rounded-full border-4 border-blue-500 p-1"><img class="rounded-full w-full" src=${vedio.authors[0].profile_picture} alt=""></div>
                        <!-- detail  -->
                        <div class="flex flex-col">
                            <h3 class="text-xl font-bold">${vedio.title}</h3>
                            <p class="text-gray-400 my-2 font-medium flex items-center gap-2">${vedio.authors[0].profile_name} ${vedio.authors[0].verified === true ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F72C5B" class="size-6">
                                <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                                </svg>` : ""}
                            </p>
                            <p class="text-gray-400 my-2 font-medium">${vedio.others.views} Views <button class="bg-primary font-bold text-lg px-2 py-1 rounded-lg text-white ml-5">Watch</button></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        vedio.appendChild(createCard);
    });
};
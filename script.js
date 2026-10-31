
// Element data:
// Symbol, Name, Atomic Mass, Category

const raw = [

["H","Hydrogen","1.008","nonmetal"],
["He","Helium","4.0026","noble"],
["Li","Lithium","6.94","alkali"],
["Be","Beryllium","9.0122","alkaline"],
["B","Boron","10.81","metalloid"],
["C","Carbon","12.011","nonmetal"],
["N","Nitrogen","14.007","nonmetal"],
["O","Oxygen","15.999","nonmetal"],
["F","Fluorine","18.998","halogen"],
["Ne","Neon","20.180","noble"],

["Na","Sodium","22.990","alkali"],
["Mg","Magnesium","24.305","alkaline"],
["Al","Aluminium","26.982","post"],
["Si","Silicon","28.085","metalloid"],
["P","Phosphorus","30.974","nonmetal"],
["S","Sulfur","32.06","nonmetal"],
["Cl","Chlorine","35.45","halogen"],
["Ar","Argon","39.948","noble"],

["K","Potassium","39.098","alkali"],
["Ca","Calcium","40.078","alkaline"],
["Sc","Scandium","44.956","transition"],
["Ti","Titanium","47.867","transition"],
["V","Vanadium","50.942","transition"],
["Cr","Chromium","51.996","transition"],
["Mn","Manganese","54.938","transition"],
["Fe","Iron","55.845","transition"],
["Co","Cobalt","58.933","transition"],
["Ni","Nickel","58.693","transition"],
["Cu","Copper","63.546","transition"],
["Zn","Zinc","65.38","transition"],
["Ga","Gallium","69.723","post"],
["Ge","Germanium","72.630","metalloid"],
["As","Arsenic","74.922","metalloid"],
["Se","Selenium","78.971","nonmetal"],
["Br","Bromine","79.904","halogen"],
["Kr","Krypton","83.798","noble"],

["Rb","Rubidium","85.468","alkali"],
["Sr","Strontium","87.62","alkaline"],
["Y","Yttrium","88.906","transition"],
["Zr","Zirconium","91.224","transition"],
["Nb","Niobium","92.906","transition"],
["Mo","Molybdenum","95.95","transition"],
["Tc","Technetium","98","transition"],
["Ru","Ruthenium","101.07","transition"],
["Rh","Rhodium","102.91","transition"],
["Pd","Palladium","106.42","transition"],
["Ag","Silver","107.87","transition"],
["Cd","Cadmium","112.41","transition"],
["In","Indium","114.82","post"],
["Sn","Tin","118.71","post"],
["Sb","Antimony","121.76","metalloid"],
["Te","Tellurium","127.60","metalloid"],
["I","Iodine","126.90","halogen"],
["Xe","Xenon","131.29","noble"],

["Cs","Caesium","132.91","alkali"],
["Ba","Barium","137.33","alkaline"],
["La","Lanthanum","138.91","lanth"],
["Ce","Cerium","140.12","lanth"],
["Pr","Praseodymium","140.91","lanth"],
["Nd","Neodymium","144.24","lanth"],
["Pm","Promethium","145","lanth"],
["Sm","Samarium","150.36","lanth"],
["Eu","Europium","151.96","lanth"],
["Gd","Gadolinium","157.25","lanth"],
["Tb","Terbium","158.93","lanth"],
["Dy","Dysprosium","162.50","lanth"],
["Ho","Holmium","164.93","lanth"],
["Er","Erbium","167.26","lanth"],
["Tm","Thulium","168.93","lanth"],
["Yb","Ytterbium","173.05","lanth"],
["Lu","Lutetium","174.97","lanth"],

["Hf","Hafnium","178.49","transition"],
["Ta","Tantalum","180.95","transition"],
["W","Tungsten","183.84","transition"],
["Re","Rhenium","186.21","transition"],
["Os","Osmium","190.23","transition"],
["Ir","Iridium","192.22","transition"],
["Pt","Platinum","195.08","transition"],
["Au","Gold","196.97","transition"],
["Hg","Mercury","200.59","transition"],
["Tl","Thallium","204.38","post"],
["Pb","Lead","207.2","post"],
["Bi","Bismuth","208.98","post"],
["Po","Polonium","209","post"],
["At","Astatine","210","halogen"],
["Rn","Radon","222","noble"],

["Fr","Francium","223","alkali"],
["Ra","Radium","226","alkaline"],
["Ac","Actinium","227","act"],
["Th","Thorium","232.04","act"],
["Pa","Protactinium","231.04","act"],
["U","Uranium","238.03","act"],
["Np","Neptunium","237","act"],
["Pu","Plutonium","244","act"],
["Am","Americium","243","act"],
["Cm","Curium","247","act"],
["Bk","Berkelium","247","act"],
["Cf","Californium","251","act"],
["Es","Einsteinium","252","act"],
["Fm","Fermium","257","act"],
["Md","Mendelevium","258","act"],
["No","Nobelium","259","act"],
["Lr","Lawrencium","266","act"],

["Rf","Rutherfordium","267","transition"],
["Db","Dubnium","268","transition"],
["Sg","Seaborgium","269","transition"],
["Bh","Bohrium","270","transition"],
["Hs","Hassium","277","transition"],
["Mt","Meitnerium","278","transition"],
["Ds","Darmstadtium","281","transition"],
["Rg","Roentgenium","282","transition"],
["Cn","Copernicium","285","transition"],
["Nh","Nihonium","286","post"],
["Fl","Flerovium","289","post"],
["Mc","Moscovium","290","post"],
["Lv","Livermorium","293","post"],
["Ts","Tennessine","294","halogen"],
["Og","Oganesson","294","noble"]

];


// Category names

const names = {
    alkali: "Alkali metals",
    alkaline: "Alkaline earth metals",
    transition: "Transition metals",
    post: "Post-transition metals",
    metalloid: "Metalloids",
    nonmetal: "Other nonmetals",
    halogen: "Halogens",
    noble: "Noble gases",
    lanth: "Lanthanides",
    act: "Actinides"
};


// Convert data into element objects

const elements = raw.map((x, i) => ({
    number: i + 1,
    symbol: x[0],
    name: x[1],
    mass: x[2],
    category: x[3]
}));


// Get HTML elements

const table = document.getElementById("table");
const overlay = document.getElementById("overlay");
const details = document.getElementById("details");


// Find position of each element

function pos(n) {

    if (n === 1) return [1, 1];
    if (n === 2) return [1, 18];

    if (n <= 4) return [2, n - 2];
    if (n <= 10) return [2, n + 8];

    if (n <= 12) return [3, n - 10];
    if (n <= 18) return [3, n];

    if (n <= 36) return [4, n - 18];
    if (n <= 54) return [5, n - 36];

    if (n <= 56) return [6, n - 54];
    if (n <= 71) return [8, n - 54];
    if (n <= 86) return [6, n - 68];

    if (n <= 88) return [7, n - 86];
    if (n <= 103) return [9, n - 86];

    return [7, n - 100];
}


// Create category filters and legend

Object.entries(names).forEach(([key, label]) => {

    // Filter option
    let option = document.createElement("option");

    option.value = key;
    option.textContent = label;

    document.getElementById("filter").appendChild(option);


    // Legend item
    let item = document.createElement("span");

    item.innerHTML = `
        <i class="${key}"></i>
        ${label}
    `;

    document.getElementById("legend").appendChild(item);

});


// Display all 118 elements

elements.forEach(element => {

    let [row, column] = pos(element.number);

    let box = document.createElement("button");

    box.className = `element ${element.category}`;

    box.style.gridRow = row;
    box.style.gridColumn = column;

    box.innerHTML = `
        <span class="num">${element.number}</span>

        <span class="sym">${element.symbol}</span>

        <span class="nm">${element.name}</span>
    `;

    box.dataset.n = element.number;

    // Show details when clicked

    box.addEventListener("click", () => {
        showDetails(element);
    });

    table.appendChild(box);

});


// Show element details

function showDetails(element) {

    details.innerHTML = `

        <small>ELEMENT PROFILE</small>

        <div class="detail-top">

            <div class="detail-symbol ${element.category}">
                ${element.symbol}
            </div>

            <div>

                <p class="detail-number">
                    ATOMIC NUMBER ${element.number}
                </p>

                <h2 class="detail-name">
                    ${element.name}
                </h2>

                <p class="detail-category">
                    ${names[element.category]}
                </p>

            </div>

        </div>

        <div class="detail-grid">

            <div class="cell">
                <span>Symbol</span>
                <strong>${element.symbol}</strong>
            </div>

            <div class="cell">
                <span>Atomic Number</span>
                <strong>${element.number}</strong>
            </div>

            <div class="cell">
                <span>Atomic Mass</span>
                <strong>${element.mass} u</strong>
            </div>

            <div class="cell">
                <span>Category</span>
                <strong>${names[element.category]}</strong>
            </div>

        </div>
    `;

    overlay.classList.add("active");

}


// Close popup

function closeDetails() {

    overlay.classList.remove("active");

}

document.getElementById("close").addEventListener("click", closeDetails);


// Close popup by clicking outside

overlay.addEventListener("click", event => {

    if (event.target === overlay) {
        closeDetails();
    }

});


// Close popup with Escape key

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeDetails();
    }

});


// Search and category filter

function filterElements() {

    let query = document
        .getElementById("search")
        .value
        .toLowerCase()
        .trim();

    let category = document.getElementById("filter").value;

    let count = 0;

    document.querySelectorAll(".element").forEach(box => {

        let element = elements[Number(box.dataset.n) - 1];

        let searchMatch =
            element.name.toLowerCase().includes(query) ||
            element.symbol.toLowerCase().includes(query) ||
            String(element.number) === query;

        let categoryMatch =
            category === "all" ||
            category === element.category;

        let match = searchMatch && categoryMatch;

        box.classList.toggle("dim", !match);

        if (match) {
            count++;
        }

    });

    document.getElementById("count").textContent =
        `Showing ${count} of 118 elements`;

}


// Search event

document.getElementById("search")
    .addEventListener("input", filterElements);


// Category filter event

document.getElementById("filter")
    .addEventListener("change", filterElements);


// Reset button

document.getElementById("reset")
    .addEventListener("click", () => {

        document.getElementById("search").value = "";

        document.getElementById("filter").value = "all";

        filterElements();

    });

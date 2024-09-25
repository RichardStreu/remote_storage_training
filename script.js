function init() {
  console.log("Hallo Welt");
  // loadData(pathFruit1Type);
  loadData();
}

let pathFruit1Type = "/fruits/fruit1/type";

const BASE_URL = "https://remotestorage-c3cfa-default-rtdb.europe-west1.firebasedatabase.app/";

// #####################################################################################
// ###############       fetch GET      ###############################################
// #####################################################################################

// man kann hier einen path übergeben, der by default ein leerer string ist, sodass die api auch abgerufen wird, wenn kein direkter path als parameter beim funktionsaufruf übergeben wird.
// man kann dann aber beim funktionsaufruf einen pfad übergeben, welcher quasi in die gesamte url eingebunden wird und uns dann das gewünschte lement ausgibt. in zukunft die einzelnen zwischenpfade vielleicht sogar als variable speichern.

async function loadData(path = "") {
  let response = await fetch(BASE_URL + path + ".json");
  console.log(response);
  if (!response.ok) return;
  return (responseToJson = await response.json());
}

// #####################################################################################
// ###############       fetch POST      ###############################################
// #####################################################################################

async function postData(path = "", data = {}) {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseToJson = await response.json());
}

let newFruit = {
  fruit3: {
    type: "Coconut",
    name: "Mr. Coco",
    count: 53,
  },
};

let newFruitPath = "/fruits";

// postData(newFruitPath, newFruit);

// die methode POST erzeugt einen eindeutigen Schlüssel, unter dem sie die Daten abspeichert
// Bsp.:  -O7bwKauyOnFoF40vUwd

// #####################################################################################
// ###############       fetch DELETE      #############################################
// #####################################################################################

// VORSICHT MIT default leerem Path!!!  Wenn diese Funktion so versehentlich abfeuert, wird das komplette Objekt in der Datenbank (alle Daten) gelöscht!!!
async function deleteData(path = "") {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "DELETE",
  });
  return (responseToJson = await response.json());
}

// deleteData("/fruits/-O7c-kRZHZVZfBdAopov");

// #####################################################################################
// ###############       fetch POST      ###############################################
// #####################################################################################

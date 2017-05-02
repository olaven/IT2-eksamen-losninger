window.onload = oppstart;

function oppstart() {
  //lage lister
  lagListeObj(data, "bySelect")
}
function lagListeObj(arr, identifier, selectId) {//forventer assosiativ array
  for(i in arr){
    var nyOp = document.createElement("option");
    nyOp.innerHTML = arr[i].by;
    nyOp.value = arr[i].by;
    document.getElementById(selectId).appendChild(nyOp);
  }
}

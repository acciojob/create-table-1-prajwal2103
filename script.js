let grandParent=document.getElementById("sampleTable");
function insert_Row() {
 let tr=document.createElement("tr");
 let td=document.createElement("td");
	td.innerText="New Cell1"
  tr.appendChild(td);
	grandParent.appendChild(tr)
	let firstChild=document.querySlector("tr");
	grandParent.insertBefore(tr,firstChild);
  
  
}

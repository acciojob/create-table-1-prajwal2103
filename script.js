let grandParent=document.querySelector("tbody");
function insert_Row() {
 let tr=document.createElement("tr");
 let td=document.createElement("td");
  let td2=document.createElement("td");
	td.innerText="New Cell1";
	td2.innerText="New Cell2"
    tr.append(td,td2);
	grandParent.appendChild(tr)
	let firstChild=document.querySelector("tbody>tr");
	grandParent.insertBefore(tr,firstChild);
  
  
}

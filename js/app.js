async function vote(id) {
  try {
    const tx = await contract.vote(id);
    await tx.wait();
    alert("Vote Casted Successfully!");
  } catch (err) {
    alert("You already voted or error occurred");
  }
}

async function loadResults() {
  const c1 = await contract.getCandidate(1);
  const c2 = await contract.getCandidate(2);

  document.getElementById("result").innerHTML =
    `${c1[0]}: ${c1[1]} votes <br>
     ${c2[0]}: ${c2[1]} votes`;
}


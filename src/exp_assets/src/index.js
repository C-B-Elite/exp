import { exp } from "../../declarations/exp";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with exp actor, calling the greet method
  const greeting = await exp.greet(name);

  document.getElementById("greeting").innerText = greeting;
});

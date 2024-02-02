import axios from "axios";

export default function APIquote() {
  const url = "https://api.quotable.io/random";
//   const key = "b4fcbb79ced9d8def638993171fec108";

  async function getquote() {
    try {
      const response = await fetch(url);
      const data=await response.json();
      console.log(data.content);
      const p=document.getElementById('quote')
      p.textContent=data.content
    } catch (error) {
      console.error('Une erreur s\'est produite', error);
    }
  }

  getquote();
}

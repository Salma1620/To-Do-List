import axios from "axios";
function APIboxcolor(){
    async function changecolor(){
        const generateRandomHexColor = () => {
            return Math.floor(Math.random()*16777215).toString(16);
        };
        const apiUrl = 'https://www.thecolorapi.com/id?hex=';
        try{
            const randomColor = generateRandomHexColor();
            const response=await axios.get(apiUrl+randomColor)
            const colorData = response.data;
            const newColor = colorData.hex.value;
            const box=document.getElementsByClassName('firstdiv')[0]
            box.style.backgroundColor=newColor
        }
        catch{
            console.error('Une erreur s\'est produite lors de la récupération des données de couleur.');
        }
    }
    changecolor();
}
export default APIboxcolor;
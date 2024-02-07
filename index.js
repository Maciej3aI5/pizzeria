document.getElementById('menu').addEventListener("click", () => {
    document.getElementById('content').style.display="none";
    document.getElementById('content3').style.display="none";
    document.getElementById('content2').style.display="grid";
    for(let i=0;i<15;i++){
        const danie = new Danie("Pizza Margheritta","Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia aperiam at ipsa unde provident minus, aliquid fugiat. Expedita, nisi?",35);
        danie.tworzenie();
    }
});
document.getElementById('pizza').addEventListener("click", () => {
    document.getElementById('content').style.display="grid";
    document.getElementById('content2').style.display="none";
    document.getElementById('content3').style.display="none";
});
document.getElementById('galeria').addEventListener("click", () => {
    document.getElementById('content').style.display="none";
    document.getElementById('content2').style.display="none";
    document.getElementById('content3').style.display="grid";
    for(let j=0;j<9;j++)
    {
        for(let i=0;i<4;i++)
        {
            const zdjecie = new Zdjecie("pizza.jpg","rozmiar1");
            zdjecie.dodajZdjecie();
        }
        const zdjecie = new Zdjecie("pizza.jpg","rozmiar2");
        zdjecie.dodajZdjecie();
    }
});
class Danie{
    constructor(nazwa,tresc,cena){
        this.nazwa = document.createElement('div');
        this.nazwa.innerHTML = nazwa;
        
        this.tresc = document.createElement('div');
        this.tresc.innerHTML = "<p>" + tresc + "</p>";
        
        this.cena = document.createElement('div');
        this.cena.innerHTML = "<p>" + cena+"$" + "</p>";
        
        this.danie = document.createElement('div');
        this.opis = document.createElement('div');
    }
    tworzenie(){  
        this.danie.classList.add("danie");
        this.nazwa.classList.add('nazwa');
        this.opis.classList.add("opis");
        this.tresc.classList.add("tresc");
        this.cena.classList.add("cena");

        this.danie.appendChild(this.nazwa);
        this.danie.appendChild(this.opis);

        this.opis.appendChild(this.tresc);
        this.opis.appendChild(this.cena);

        document.getElementById('content2').appendChild(this.danie);
    }
}
class Zdjecie {
    constructor(zrodlo, rozmiar) {
        this.zdjecie = document.createElement('img'); 
        this.zrodlo = zrodlo;
        this.zdjecie.setAttribute('src', this.zrodlo);
        this.zdjecie.classList.add(rozmiar, "block", "rounded-xl");
    }
    
    dodajZdjecie() {
        document.getElementById('zdjecia').appendChild(this.zdjecie);
    }
}


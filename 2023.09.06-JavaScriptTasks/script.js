// function zmogausMetaiISunsMetus(zmogausAmzius) {
//     var sunsMetai = zmogausAmzius * 7;
//     return zmogausAmzius + " žmogaus metai yra " + sunsMetai + " šuns metai.";
//   }
  
//   // Pavyzdys: 
//   var zmogausAmzius = 5;
//   var rezultatas = zmogausMetaiISunsMetus(zmogausAmzius);
//   console.log(rezultatas); // Išvestų "5 žmogaus metai yra 35 šuns metai."
 




// function skaiciuotiLaikaPerskaitytiKnyga(knyguPerMetus) {
//     // Patikriname, ar knygų skaičius per metus yra teigiamas skaičius
//     if (knyguPerMetus <= 0) {
//       return "Norimas knygų skaičius per metus turi būti teigiamas skaičius.";
//     }
  
//     // Skaičiuojame dienas, reikalingas vienai knygai perskaityti
//     const dienosPerMetus = 365;
//     const dienosVienaiKnygai = dienosPerMetus / knyguPerMetus;
  
//     return `Norint perskaityti ${knyguPerMetus} knygų per metus, vienai knygai perskaityti turėsite ${dienosVienaiKnygai} dienas.`;
//   }
  
//   // Pavyzdys: Norime perskaityti 10 knygų per metus
//   const norimiKnyguPerMetus = 10;
//   const atsakymas = skaiciuotiLaikaPerskaitytiKnyga(norimiKnyguPerMetus);
//   console.log(atsakymas);





// function konvertuotiDienasISavaites(dienos) {
//     // Patikriname, ar dienų skaičius yra teigiamas skaičius
//     if (dienos <= 0) {
//       return "Dienų skaičius turi būti teigiamas skaičius.";
//     }
  
//     // Skaičiuojame savaites
//     const savaites = Math.floor(dienos / 7);
  
//     return `${dienos} dienos yra ${savaites} savaitės.`;
//   }
  
//   // Pavyzdys: Konvertuojame 35 dienas į savaites
//   const dienos = 35;
//   const atsakymas = konvertuotiDienasISavaites(dienos);
//   console.log(atsakymas);





// function konvertuotiDienasIMetus(dienos) {
//     // Patikriname, ar dienų skaičius yra teigiamas skaičius
//     if (dienos <= 0) {
//       return "Dienų skaičius turi būti teigiamas skaičius.";
//     }
  
//     // Skaičiuojame metus, apvalindami iki sveiko skaičiaus
//     const metai = Math.round(dienos / 365);
  
//     return `${dienos} dienos yra ${metai} metai.`;
//   }
  
//   // Pavyzdys: Konvertuojame 365 dienas į metus
//   const dienos = 365;
//   const atsakymas = konvertuotiDienasIMetus(dienos);
//   console.log(atsakymas);

  



// function konvertuotiMetusIValandas(metai) {
//     // Patikriname, ar metų skaičius yra teigiamas skaičius
//     if (metai <= 0) {
//       return "Metų skaičius turi būti teigiamas skaičius.";
//     }
  
//     // Skaičiuojame valandas
//     const valandos = metai * 365 * 24;
  
//     return `${metai} metai turi ${valandos} valandas.`;
//   }
  
//   // Pavyzdys: Konvertuojame 5 metus į valandas
//   const metai = 5;
//   const atsakymas = konvertuotiMetusIValandas(metai);
//   console.log(atsakymas);





// function konvertuotiMenesiusIValandas(menesiuSkaicius) {
//     // Vidutinė mėnesio trukmė apie 730.44 valandas
//     const valandosPerMenesi = 730.44;
    
//     // Apskaičiuojame valandas
//     const valandos = menesiuSkaicius * valandosPerMenesi;
    
//     // Sukuriame rezultato tekstą
//     const rezultatas = `${menesiuSkaicius} mėnesiai turi ${valandos} valandas.`;
    
//     // Grąžiname rezultatą
//     return rezultatas;
//   }
  
//   // Pavyzdinis naudojimas
//   const menesiai = 3;
//   const rezultatas = konvertuotiMenesiusIValandas(menesiai);
//   console.log(rezultatas); // Spausdins "3 mėnesiai turi 2191.32 valandas."
  




function konvertuotiMenesiusIMinutes(menesiuSkaicius) {
    // Vidutinė mėnesio trukmė apie 43800 minutes
    const minutesPerMenesi = 43800;
    
    // Apskaičiuojame minutes
    const minutes = menesiuSkaicius * minutesPerMenesi;
    
    // Sukuriame rezultato tekstą
    const rezultatas = `${menesiuSkaicius} mėnesiai turi ${minutes} minutes.`;
    
    // Grąžiname rezultatą
    return rezultatas;
  }
  
  // Pavyzdinis naudojimas
  const menesiai = 2;
  const rezultatas = konvertuotiMenesiusIMinutes(menesiai);
  console.log(rezultatas); // Spausdins "2 mėnesiai turi 87600 minutes."
  
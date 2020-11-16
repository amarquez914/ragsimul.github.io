/*eslint-env browser*/
var str = 1, agi = 1, vit = 1, int = 1, dex = 1, luk = 1;
var stra = 2, agia = 2, vita = 2, inta = 2, dexa = 2, luka = 2;

var pow = 0, sta = 0, wis = 0, spl = 0, con = 0, crt = 0;
var powa = 0, staa = 0, wisa = 0, spla = 0, cona = 0, crta = 0;


var strb = 0;
var agib = 0;
var vitb = 0;
var intb = 0;
var dexb = 0;
var lukb = 0;

var powb = 0;
var stab = 0;
var wisb = 0;
var splb = 0;
var conb = 0;
var crtb = 0;


var strcost = 0; agicost = 0; vitcost = 0; intcost = 0; dexcost = 0; lukcost = 0;

var powcost = 0; stacost = 0; wiscost = 0; splcost = 0; concost = 0; crtcost = 0; tstatcost = 7;

var tstatmax = 100;

var atk = 1; def = 1; matk = 1; mdef = 1; hit = 177; flee = 102; crit = 1;
var patk = 0; res = 0, smatk = 0; mres = 0; hplus = 0; crate = 0;

function statreset(){
  str = 1; agi = 1; vit = 1; int = 1; dex = 1; luk = 1;
  stra = 2; agia = 2; vita = 2; inta = 2; dexa = 2; luka = 2;
  strcost = 0; agicost = 0; vitcost = 0; intcost = 0; dexcost = 0; lukcost = 0;

  pow = 0; sta = 0; wis = 0; spl = 0; con = 0; crt = 0;
  powa = 1; staa = 1; wisa = 1; spla = 1; cona = 1; crta = 1;
  powcost = 0;  stacost = 0;  wiscost = 0;  splcost = 0;  concost = 0;  crtcost = 0;

  if(fourthClasses.includes(className.innerHTML) || thirdClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
    remaincost = stat_transcendence[baseLV.value-1];
    statdisplay();
  }else{
    remaincost = stat_none[baseLV.value-1];
    statdisplay();
  }
}


/* stats */
document.getElementById("strblock").addEventListener('keypress', (e) => {
  if (e.which === 13 || (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("strblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("STR").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    str = num + 1 ;
    stra = stat_cost[str-1];
    strcost += stat_cost[str-2];
    if(str === maxstat){
      stra = 0;
    }
  }else{
    if(num <= 1) return false;
    str = num - 1 ;
    stra = stat_cost[str-1];
    strcost -= stat_cost[str-1];
  }
  statdisplay();
});

document.getElementById("agiblock").addEventListener('keypress', (e) => {
  if (e.which === 13|| (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("agiblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("AGI").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    agi = num + 1 ;
    agia = stat_cost[agi-1];
    agicost += stat_cost[agi-2];
    if(agi === maxstat){
      agia = 0;
    }
  }else{
    if(num <= 1) return false;
    agi = num - 1 ;
    agia = stat_cost[agi-1];
    agicost -= stat_cost[agi-1];
  }
  statdisplay();
});

document.getElementById("vitblock").addEventListener('keypress', (e) => {
  if (e.which === 13|| (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("vitblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("VIT").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    vit = num + 1 ;
    vita = stat_cost[vit-1];
    vitcost += stat_cost[vit-2];
    if(vit === maxstat){
      vita = 0;
    }
  }else{
    if(num <= 1) return false;
    vit = num - 1 ;
    vita = stat_cost[vit-1];
    vitcost -= stat_cost[vit-1];
  }
  statdisplay();
});

document.getElementById("intblock").addEventListener('keypress', (e) => {
  if (e.which === 13|| (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("intblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("INT").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    int = num + 1 ;
    inta = stat_cost[int-1];
    intcost += stat_cost[int-2];
    if(int === maxstat){
      inta = 0;
    }
  }else{
    if(num <= 1) return false;
    int = num - 1 ;
    inta = stat_cost[int-1];
    intcost -= stat_cost[int-1];
  }
  statdisplay();
});

document.getElementById("dexblock").addEventListener('keypress', (e) => {
  if (e.which === 13|| (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("dexblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("DEX").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    dex = num + 1 ;
    dexa = stat_cost[dex-1];
    dexcost += stat_cost[dex-2];
    if(dex === maxstat){
      dexa = 0;
    }
  }else{
    if(num <= 1) return false;
    dex = num - 1 ;
    dexa = stat_cost[dex-1];
    dexcost -= stat_cost[dex-1];
  }
  statdisplay();
});

document.getElementById("lukblock").addEventListener('keypress', (e) => {
  if (e.which === 13|| (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(String.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("lukblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("LUK").innerHTML);
  if(e.wheelDeltaY > 0){
    if (noviceClasses.includes(className.innerHTML) ||firstClasses.includes(className.innerHTML) || secondClasses.includes(className.innerHTML) || secondtrClasses.includes(className.innerHTML)){
      maxstat = 99;
    }else{
      maxstat = 130;
    }
    if(num >= maxstat) return false;
    luk = num + 1 ;
    luka = stat_cost[luk-1];
    lukcost += stat_cost[luk-2];
    if(luk === maxstat){
      inta = 0;
    }
  }else{
    if(num <= 1) return false;
    luk = num - 1 ;
    luka = stat_cost[luk-1];
    lukcost -= stat_cost[luk-1];
  }
  statdisplay();
});

/* tstats */
document.getElementById("powblock").addEventListener('keypress', (e) => {
  if (e.which === 13 || (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(powing.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("powblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("POW").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      pow = num + 1 ;
      powa = tstat_cost[pow];
      powcost += tstat_cost[pow]
      if(pow === tstatmax){
        powa = 0;
      }
    }else{
      if(num <= 0) return false;
      pow = num - 1;
      powa = tstat_cost[pow];
      powcost -= tstat_cost[pow]
    }

  }else{
    e.preventDefault();
  }statdisplay();
});

document.getElementById("stablock").addEventListener('keypress', (e) => {
  if (e.which === 13|| (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(powing.fromCharCode(e.which))) {
    e.preventDefault();
  }

});
document.getElementById("stablock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("STA").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      sta = num + 1 ;
      staa = tstat_cost[sta];
      stacost += tstat_cost[sta];
      if(sta === tstatmax){
        staa = 0;
      }
    }else{
      if(num <= 0) return false;
      sta = num - 1 ;
      staa = tstat_cost[sta];
      stacost -= tstat_cost[sta];
    }

  }else{
    e.preventDefault();
  }
  statdisplay();
});

document.getElementById("wisblock").addEventListener('keypress', (e) => {
  if (e.which === 13|| (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(powing.fromCharCode(e.which))) {
    e.preventDefault();
  }

});
document.getElementById("wisblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("WIS").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      wis = num + 1 ;
      wisa = tstat_cost[wis];
      wiscost += tstat_cost[wis];
      if(wis === tstatmax){
        wisa = 0;
      }
    }else{
      if(num <= 0) return false;
      wis = num - 1 ;
      wisa = tstat_cost[wis];
      wiscost -= tstat_cost[wis];
    }
  }else{
    e.preventDefault();
  }
  statdisplay();
});

document.getElementById("splblock").addEventListener('keypress', (e) => {
  if (e.which === 13|| (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(powing.fromCharCode(e.which))) {
    e.preventDefault();
  }

});
document.getElementById("splblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("SPL").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      spl = num + 1 ;
      spla = tstat_cost[spl];
      splcost += tstat_cost[spl];
      if(spl === tstatmax){
        spla = 0;
      }
    }else{
      if(num <= 0) return false;
      spl = num - 1 ;
      spla = tstat_cost[spl];
      splcost -= tstat_cost[spl];
    }
  }else{
    e.preventDefault();
  }
  statdisplay();
});

document.getElementById("conblock").addEventListener('keypress', (e) => {
  if (e.which === 13|| (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(powing.fromCharCode(e.which))) {
    e.preventDefault();
  }

});
document.getElementById("conblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("CON").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      con = num + 1;
      cona = tstat_cost[con];
      concost += tstat_cost[con];
      if(con === tstatmax){
        cona = 0;
      }
    }else{
      if(num <= 0) return false;
      con = num - 1;
      cona = tstat_cost[con];
      concost -= tstat_cost[con];
    }
  }else{
    e.preventDefault();
  }
  statdisplay();
});

document.getElementById("crtblock").addEventListener('keypress', (e) => {
  if (e.which === 13|| (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }
  if (isNaN(powing.fromCharCode(e.which))) {
    e.preventDefault();
  }
});
document.getElementById("crtblock").addEventListener('mousewheel',function (e) {
  e.preventDefault();
  var num = Number(document.getElementById("CRT").innerHTML);
  if (fourthClasses.includes(className.innerHTML)){
    if(e.wheelDeltaY > 0){
      if(num >= tstatmax) return false;
      crt = num + 1 ;
      crta = tstat_cost[crt];
      crtcost += tstat_cost[crt];
      if(crt === tstatmax){
        crta = '0';
      }
    }else{
      if(num <= 0) return false;
      crt = num - 1 ;
      crta = tstat_cost[crt];
      crtcost -= tstat_cost[crt];
    }
  }else{
    e.preventDefault();
  }
  statdisplay();
});

/* stat bonus */

function statBonusAdj(){
  for(var i=0; i< classNameEN.length; i++){
    if (className.innerHTML === classNameEN[i]){
      strb = jobBonuses[i][jobLV.value-1][0];
      document.getElementById("STRBonus").innerHTML = strb;
      agib = jobBonuses[i][jobLV.value-1][1];
      document.getElementById("AGIBonus").innerHTML = agib;
      vitb = jobBonuses[i][jobLV.value-1][2];
      document.getElementById("VITBonus").innerHTML = vitb;
      intb = jobBonuses[i][jobLV.value-1][3];
      document.getElementById("INTBonus").innerHTML = intb;
      dexb = jobBonuses[i][jobLV.value-1][4];
      document.getElementById("DEXBonus").innerHTML = dexb;
      lukb = jobBonuses[i][jobLV.value-1][5];
      document.getElementById("LUKBonus").innerHTML = lukb;
    }
  }statcal();
}

function tstatBonusAdj(){
  if (fourthClasses.includes(className.innerHTML)){
    for(var i=0; i< fourthClasses.length; i++){
      if (className.innerHTML === fourthClasses[i]){
        powb = jobtstatBonuses[i][jobLV.value-1][0];
        document.getElementById("POWBonus").innerHTML = powb;
        stab = jobtstatBonuses[i][jobLV.value-1][1];
        document.getElementById("STABonus").innerHTML = stab;
        wisb = jobtstatBonuses[i][jobLV.value-1][2];
        document.getElementById("WISBonus").innerHTML = wisb;
        splb = jobtstatBonuses[i][jobLV.value-1][3];
        document.getElementById("SPLBonus").innerHTML = splb;
        conb = jobtstatBonuses[i][jobLV.value-1][4];
        document.getElementById("CONBonus").innerHTML = conb;
        crtb = jobtstatBonuses[i][jobLV.value-1][5];
        document.getElementById("CRTBonus").innerHTML = crtb;
      }
    }
  }statcal();
}



var remaincost = 0;
var remaintcost = 0;
function statdisplay(){
  document.getElementById("STR").innerHTML = str;
  document.getElementById("STRAdd").innerHTML = stra;
  document.getElementById("AGI").innerHTML = agi;
  document.getElementById("AGIAdd").innerHTML = agia;
  document.getElementById("VIT").innerHTML = vit;
  document.getElementById("VITAdd").innerHTML = vita;
  document.getElementById("INT").innerHTML = int;
  document.getElementById("INTAdd").innerHTML = inta;
  document.getElementById("DEX").innerHTML = dex;
  document.getElementById("DEXAdd").innerHTML = dexa;
  document.getElementById("LUK").innerHTML = luk;
  document.getElementById("LUKAdd").innerHTML = luka;

  document.getElementById("POW").innerHTML = pow;
  document.getElementById("POWAdd").innerHTML = powa;
  document.getElementById("STA").innerHTML = sta;
  document.getElementById("STAAdd").innerHTML = staa;
  document.getElementById("WIS").innerHTML = wis;
  document.getElementById("WISAdd").innerHTML = wisa;
  document.getElementById("SPL").innerHTML = spl;
  document.getElementById("SPLAdd").innerHTML = spla;
  document.getElementById("CON").innerHTML = con;
  document.getElementById("CONAdd").innerHTML = cona;
  document.getElementById("CRT").innerHTML = crt;
  document.getElementById("CRTAdd").innerHTML = crta;

  remaincost = statcost - strcost - agicost - vitcost - intcost - dexcost - lukcost;
  remaintcost = tstatcost - powcost - stacost - wiscost - splcost - concost - crtcost;

  if(remaincost < 0){
    statpoint.innerHTML = remaincost;
    statpoint.style.color = "red";
  }else{
    statpoint.innerHTML = remaincost;
    statpoint.style.color = "black";
  }

  if(remaintcost < 0){
    tstatpoint.innerHTML = remaintcost;
    tstatpoint.style.color = "red";
  }else{
    tstatpoint.innerHTML = remaintcost;
    tstatpoint.style.color = "black";
  }

  statcal();
}

function tstatreset(){

  if(fourthClasses.includes(className.innerHTML)){
    remaincost = tstat_obtain[baseLV.value-200];
  }else{
    remaincost = 0;
  }
};

function tstatAdj(){
  if(fourthClasses.includes(className.innerHTML)){
    tstatpoint.innerHTML = tstat_obtain[baseLV.value-200];
  }else{
    tstatpoint.innerHTML = 0;
  }
}


function statcal(){
  /* stat cal */
  // ATK = floor[(BaseLevel ÷ 4) + Str + (Dex ÷ 5) + (Luk ÷ 3)] + ((POW+POWBonus) * 5)
  atk = Math.floor(str + strb + (dex + dexb)/5 + (luk + lukb)/3 + (parseInt(baseLV.value)/4)) + (pow + powb)*5;
  // MATK = floor[floor[BaseLevel ÷ 4] + Int + floor[Int ÷ 2] + floor[Dex ÷ 5] + floor[Luk ÷ 3]]
  matk = Math.floor((int + intb) + Math.floor((int + intb)/2)+ Math.floor((dex + dexb)/5) + Math.floor((luk + lukb)/3) + Math.floor(parseInt(baseLV.value)/4) + Math.floor((spl + splb)*5));

  //DEF = floor((VIT ÷ 2) + (AGI ÷ 5) + (BaseLv ÷ 2))
  def = Math.floor((parseInt(baseLV.value)/2) + ((vit + vitb)/2) + ((agi + agib)/5));

  //MdeF = floor((INT + (VIT ÷ 5) + (DEX ÷ 5) + (BaseLv ÷ 4))
  mdef = Math.floor((int+intb) + ((vit+vitb)/5) + ((dex+dexb)/5) + (parseInt(baseLV.value)/4));
  //hit = 175 + BaseLv + DEX + Floor(LUK ÷ 3) + Bonus

  hit = 175 + parseInt(baseLV.value) + (dex + dexb) + Math.floor((luk + lukb)/3) + (con+conb)*2;
  //crit = LUK × 0.3 + Bonus

  crit = (luk + lukb)*0.3
  //flee = 100 + BaseLv + AGI + Floor(LUK ÷ 5) + Bonus
  flee = 100 + parseInt(baseLV.value) + (agi+agib) + Math.floor((luk + lukb)/5)+ (con+conb)*2;

   document.getElementById("ATK").innerHTML = atk;
   document.getElementById("DEF").innerHTML = def;
   document.getElementById("MATK").innerHTML = matk;
   document.getElementById("MDEF").innerHTML = mdef;
   document.getElementById("HIT").innerHTML = hit;
   document.getElementById("CRIT").innerHTML = Math.ceil(crit);
   document.getElementById("FLEE").innerHTML = flee;


   /* tstat cal */
   // patk = pow/3 +

   patk = Math.floor((pow + powb)/3) +  + Math.floor((con + conb)/5);
   res = (sta+stab);
   smatk = Math.floor((spl + splb)/3) + Math.floor((con + conb)/5);
   mres = (wis+wisb);
   hplus = (crt+crtb);
   crate = Math.floor((crt+crtb)/3);
   document.getElementById("PATK").innerHTML = patk;
   document.getElementById("RES").innerHTML = res;
   document.getElementById("SMATK").innerHTML = smatk;
   document.getElementById("MRES").innerHTML = mres;
   document.getElementById("HPLUS").innerHTML = hplus;
   document.getElementById("CRATE").innerHTML = crate;
}

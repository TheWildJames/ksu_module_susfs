import{H as T,F as N}from"./fade-B36w67cd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();let U=0;function D(e){return`${e}_callback_${Date.now()}_${U++}`}function f(e,s){return typeof s>"u"&&(s={}),new Promise((o,c)=>{const n=D("exec");window[n]=(d,_,L)=>{o({errno:d,stdout:_,stderr:L}),a(n)};function a(d){delete window[d]}try{ksu.exec(e,JSON.stringify(s),n)}catch(d){c(d),a(n)}})}function i(e){ksu.toast(e)}const C="/assets/blue-8Pd85PrK.png",k="/assets/brown-DkMF-zd4.png",H="/assets/cyan-CxxU9VUc.png",O="/assets/cyan1-BWTE1JdY.png",P="/assets/orange-Dz5Wr5v6.png",F="/assets/orange1-CeH2ZIyG.png",R="/assets/yellow-Bmr_vY2u.png",q="/assets/green-BwBzMX7_.png",z="/assets/lime-DPDNUj7v.png",Y="/assets/pink-BsJVk9ad.png",J="/assets/purple-b3Qaozit.png",V="/assets/red-DsgSinuJ.png",W="/assets/white-BOZMyur9.png",X="/assets/black-CWwxUpmx.png",r=document.getElementById("backgroundCanvas"),l=r.getContext("2d");function v(){r.width=window.innerWidth,r.height=window.innerHeight,p()}const m=[],g=[],j=100,y=[C,k,k,H,O,P,F,R,q,z,Y,J,V,W,X];y.length;function G(){m.length=0;for(let e=0;e<j;e++)m.push({x:Math.random()*r.width,y:Math.random()*r.height,radius:Math.random()*2,speed:Math.random()*.5})}function K(e,s){return[...e].sort(()=>.5-Math.random()).slice(0,s)}function p(){g.length=0,K(y,6).forEach(s=>{const o=new Image;o.src=s,o.onload=()=>{g.push({img:o,x:Math.random()*r.width,y:Math.random()*r.height,width:50,height:60,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.02,speedX:(Math.random()-.5)*1.5,speedY:(Math.random()-.5)*1.5})}})}function w(){l.clearRect(0,0,r.width,r.height),l.fillStyle="white",m.forEach(e=>{l.beginPath(),l.arc(e.x,e.y,e.radius,0,Math.PI*2),l.fill(),e.y+=e.speed,e.y>r.height&&(e.y=0,e.x=Math.random()*r.width)}),g.forEach(e=>{l.save(),l.translate(e.x+e.width/2,e.y+e.height/2),l.rotate(e.rotation),l.drawImage(e.img,-e.width/2,-e.height/2,e.width,e.height),l.restore(),e.x+=e.speedX,e.y+=e.speedY,e.rotation+=e.rotationSpeed,e.x>r.width&&(e.x=-e.width),e.x+e.width<0&&(e.x=r.width),e.y>r.height&&(e.y=-e.height),e.y+e.height<0&&(e.y=r.height)}),requestAnimationFrame(w)}window.addEventListener("resize",v);v();G();p();w();const u="/data/adb/modules/susfs4ksu";var h=await t(`su -c "grep version= ${u}/module.prop | cut -d '=' -f 2"`);const Z=document.getElementById("susfs_version");Z.innerHTML=h;var Q=await t(`[ -s ${u}/susfslogs.txt ] && echo false || echo true`);if(Q=="true"){var $=await t(`su -c "grep '\${SUSFS_BIN} add_sus_path' ${u}/*.sh | wc -l"`),A=await t(`su -c "grep '\${SUSFS_BIN} add_sus_mount' ${u}/*.sh | wc -l"`),E=await t(`su -c "grep '\${SUSFS_BIN} add_try_umount' ${u}/*.sh | wc -l"`);i("susfslogs.txt is empty/missing. Showed Stats from module script")}else var $=await t(`su -c "grep 'CMD_SUSFS_ADD_SUS_PATH'  ${u}/susfslogs.txt | wc -l"`),A=await t(`su -c "grep 'CMD_SUSFS_ADD_SUS_MOUNT'  ${u}/susfslogs.txt | wc -l"`),E=await t(`su -c "grep 'CMD_SUSFS_ADD_TRY_UMOUNT'  ${u}/susfslogs.txt | wc -l"`);document.getElementById("sus_path").innerHTML=$;document.getElementById("sus_mount").innerHTML=A;document.getElementById("try_umount").innerHTML=E;document.getElementById("kernel_version").innerHTML=await t("uname -a | cut -d' ' -f3-");var b=await t(`su -c "[[ -f "${u}/sus_su_enabled" || -f "${u}/sus_su_mode" ]] && echo true || echo false"`);const ee=document.getElementById("sus_su_152"),se=document.getElementById("sus_su_142"),te=document.getElementById("sus_su_NOS");b=="false"?(sus_su.removeAttribute("checked"),sus_su.setAttribute("disabled",""),enable_sus_su.removeAttribute("checked"),enable_sus_su.setAttribute("disabled",""),te.classList.remove("hidden")):h.includes("1.5.2")?(ee.classList.remove("hidden"),I()):h.includes("1.4.2")&&(se.classList.remove("hidden"),S());const ne=new T.Core({transitions:{default:N}});ne.on("NAVIGATE_END",({to:e,from:s,trigger:o,location:c})=>{x(),B(),M(),h.includes("1.5.2")&&b=="true"?I():h.includes("1.4.2")&&b=="true"&&S()});async function t(e){const{errno:s,stdout:o,stderr:c}=await f(e);if(s!=0){i(`stderr: ${c}`);return}else return o}async function S(){const e=document.getElementById("sus_su"),s=document.getElementById("enable_sus_su");var o=await t(`su -c "if grep -q '^enable_sus_su$' ${u}/service.sh; then echo true; else echo false; fi;"`),c=await t(`su -c "cat ${u}/sus_su_enabled"`);o=="true"?e.addEventListener("click",function(){e.getAttribute("checked")?(console.log("false"),t("su -c ksu_susfs sus_su 0"),f(`su -c echo 0 > ${u}/sus_su_enabled`),i("sus su off no need to reboot"),e.removeAttribute("checked")):(console.log("true"),t("su -c ksu_susfs sus_su 1"),f(`su -c echo 1 > ${u}/sus_su_enabled`),i("sus su on no need to reboot"),e.setAttribute("checked","checked"))}):(e.removeAttribute("checked"),s.removeAttribute("checked"),e.setAttribute("disabled","")),c=="0"&&e.removeAttribute("checked"),s.addEventListener("click",async function(){o=="true"&&s.getAttribute("checked")?(console.log("false"),i("Reboot to take effect"),t(`su -c "sed -i 's/^enable_sus_su$/#enable_sus_su/' ${u}/service.sh"`),s.removeAttribute("checked"),e.setAttribute("disabled","")):(console.log("true"),i("Reboot to take effect"),t(`su -c "sed -i 's/^#enable_sus_su$/enable_sus_su/' ${u}/service.sh"`),s.setAttribute("checked","checked"),e.removeAttribute("disabled",""))})}async function I(){const e=document.getElementById("sus_su_0"),s=document.getElementById("sus_su_1"),o=document.getElementById("sus_su_2"),c=document.getElementById("enable_sus_su_1"),n=document.getElementById("enable_sus_su_2");var a=await t(`su -c "if grep -q '^enable_sus_su_mode_1$' ${u}/service.sh; then echo true; else echo false; fi;"`),d=await t(`su -c "if grep -q '^sus_su_2$' ${u}/service.sh; then echo true; else echo false; fi;"`),_=await t(`su -c "cat ${u}/sus_su_mode"`);_=="1"?(e.checked=!1,s.checked="checked",o.checked=!1):_=="2"?(e.checked=!1,s.checked=!1,o.checked="checked"):_=="0"&&(e.checked="checked",s.checked=!1,o.checked=!1),a=="true"?(s.removeAttribute("disabled"),c.setAttribute("checked","checked")):(s.setAttribute("disabled",""),c.removeAttribute("checked")),d=="false"&&n.removeAttribute("checked"),c.addEventListener("click",async function(){c.hasAttribute("checked")?(console.log("false"),c.removeAttribute("checked"),i("Reboot to take effect"),t(`su -c "sed -i 's/^enable_sus_su_mode_1$/#enable_sus_su_mode_1/' ${u}/service.sh"`)):(console.log("true"),c.setAttribute("checked","checked"),i("Reboot to take effect"),t(`su -c "sed -i 's/^#enable_sus_su_mode_1$/enable_sus_su_mode_1/' ${u}/service.sh"`))}),n.addEventListener("click",async function(){n.hasAttribute("checked")?(console.log("false"),n.removeAttribute("checked"),i("Reboot to take effect"),t(`su -c "sed -i 's/^sus_su_2$/#sus_su_2/' ${u}/service.sh"`)):(console.log("true"),n.setAttribute("checked","checked"),i("Reboot to take effect"),t(`su -c "sed -i 's/^#sus_su_2$/sus_su_2/' ${u}/service.sh"`))})}async function B(){document.getElementById("kernel_version").innerHTML=await t("uname -a | cut -d' ' -f3-");const e=document.getElementById("set_uname");e.addEventListener("click",async function(){var s=document.getElementById("sus_uname").value;s.includes(" ")?i("Spaces are not allowed in the input!"):s==""?(console.log("default kernel version"),t(`su -c "ksu_susfs set_uname 'default' 'default'"`),document.getElementById("kernel_version").innerHTML=await t("uname -a | cut -d' ' -f3-"),e.blur()):(console.log(`sets to ${s}`),t(`su -c "ksu_susfs set_uname '${s}' 'default'"`),document.getElementById("kernel_version").innerHTML=await t("uname -a | cut -d' ' -f3-"),e.blur())})}async function M(){var e=document.getElementById("susfs_log"),s=await t(`su -c "grep -q 'enable_log 1' /data/adb/modules/susfs4ksu/service.sh && echo true || echo false"`);e.addEventListener("click",async function(){e.hasAttribute("checked")?(console.log("false"),i("Reboot to take effect"),await t(`su -c "sed -i 's/enable_log 1/enable_log 0/' ${u}/service.sh"`),e.removeAttribute("checked")):(console.log("true"),i("Reboot to take effect"),await t(`su -c "sed -i 's/enable_log 0/enable_log 1/' ${u}/service.sh"`),e.setAttribute("checked","checked"))}),s=="false"?e.removeAttribute("checked"):e.setAttribute("checked","checked")}function x(){const e=document.getElementById("sus_uname"),s=document.querySelector("main");e.addEventListener("focus",()=>{s.style.paddingBottom="300px",e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}),e.addEventListener("blur",()=>{s.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{s.style.paddingBottom="0px"},500)})}B();x();M();
function onclick(N){
var b=['.block1','.block2','.block3','block4','.block5','.block6','.block7','.block8','.block9','block10','.block11','.block12','.block13','.block14','.block15','block16','.block17','.block18','.block19','.block20','.block21','block22','.block23','.block24','.block25','.block26','.block27','block28','.block29','.block30','.block31','.block32','.block33','block34','.block35','.block36'.];
for(var i=1;i<=9;i++){
if(N===i){
var block=document.querySelector(b(N-1));
var znach=Math.Floor(Math.random()*2)+1);
if(znach==1){
block.style.background='red';}
else if(znach==z){
block.style.background='green';}}}}

export default (name, ImageCount) => {

let existe = ImageCount.filter(e => e.name == name)
if(existe.length == 0){
    ImageCount.push({id:ImageCount.length, name, count: 1})
}
else{
   ImageCount[existe[0].id].count = existe[0].count +1;
}
console.log(ImageCount)

return ;
};
module.exports = function check(str, bracketsConfig) {
  
    let config =[];
    let i=0;
    let currentPair = '';
    for (let pair of bracketsConfig) {
        config.push(pair[0]+pair[1]);
    }
    

    while ((str.length>1) && (i<str.length-1)) {
        currentPair=str.substr(i,2);
        
        if (config.includes(currentPair)) {
            str=str.slice(0,Math.max(0,i))+str.slice(i+2,str.length);
            i=Math.max(0, i-1);
        } else {
            i++;
        }
    }
     return (str.length==0 ? true: false)
}

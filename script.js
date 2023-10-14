const binarySearch=(array,num)=>{
    let min=0
    let max=array.length-1
  
    while(min<=max){
      let mid=Math.floor((min+max)/2)
      if(array[mid]===num){return document.getElementById("demo").innerHTML=mid}
      else if (array[mid]<num){min=mid+1}
      else{max=mid-1}
    }
    return -1
  }
  
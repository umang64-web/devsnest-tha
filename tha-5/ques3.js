var arr=[7, 9, 0, -2];
var n=0;

 console.log(first([7, 9, 0, -2]));
 console.log(first([],3));
 console.log(first([7, 9, 0, -2],3));
 console.log(first([7, 9, 0, -2],6));
 console.log(first([7, 9, 0, -2],-3));

function first(arr,n)
{
    if(n<0)
    return [];

    if(n==null)
    return arr[0];

    var ans=arr.slice(0,n);
    return ans;
}
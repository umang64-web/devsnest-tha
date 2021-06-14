var arr1 = [1, 2, 4, 0];
var arr2= [1, 2, [4, 0]];
 
array_clone(arr1);
array_clone(arr2);

function array_clone(arr)
{
    var ans=arr;
    console.log(ans);
}
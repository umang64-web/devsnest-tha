var myName = {
    firstName: 'akriti',
    lastName:'Aggarawal',
    getFUllname:function(){
        var name = this.firstName +' '+this.lastName
        console.log(name)
        return name;
    }
}
var myName2 = {
    firstName: 'umang',
    lastName: 'aggarwal'
}
myName.getFUllname.call(myName2)
 
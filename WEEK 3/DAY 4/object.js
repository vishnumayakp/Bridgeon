const object={
    name:"Vishnumaya",
    fullname:function(){
        return this.name+""+this.age
    },
    age:20,
    place:"Karad",
    qualification:"UG",
}
console.log(object.fullname())
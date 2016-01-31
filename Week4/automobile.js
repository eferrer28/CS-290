/*

This assignment is graded based on correctness and will require you to use higher-order functions to sort automobiles. The description is below and can also be found here  (Links to an external site.)on jsFiddle. You should submit a single .js file called automobile.js which when run with node.js using the command "node automobile.js" produces the described results. You must make use of  higher-order functions to sort the cars. You should not, for example, create entirely separate functions each with dedicated loops to sort the cars. You will need a loop (or potentially more than one loop depending on your sorting algorithm of choice) in the sortArr function but that is pretty much it.

 

function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
    /*your code here*/
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    /* your code here*/
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    /* your code here*/
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    /* your code here*/
}

/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.

*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****

As an example of the content in the parenthesis:
1990 Ford F-150 */




*/

function Automobile( year, make, model, type ){
    this.year = year; 
    this.make = make; 
    this.model = model; 
    this.type = type; 
    
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

Automobile.prototype.logMe = function(boolean){
    if(boolean){
       console.log(this.year + ' ' + this.make + ' ' + this.model + ' ' + this.type);
    }
    else {
        // console.log("DEBUGG"); 
         console.log(this.year + ' ' + this.make + ' ' + this.model);
    }
};
/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){

    for(var i = 0; i < array.length - 1; i++){
		for(var j = i + 1; j < array.length; j++){
			if(comparator(array[j], array[i]))
            {
				var temp = array[j];
				array[j] = array[i];
				array[i] = temp;
			} 
		}
	}
}


/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    if(auto1.year > auto2.year)
    {   
        //console.log("more DEBUG"); 
        return true;
        
    }else{
        //console.log("WOOORKRK"); 
        return false;
        }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    if(auto1.make.charAt(0) < auto2.make.charAt(0))
        return true;
    else{
        return false;
    }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    var autos = [ 'roadster', 'pickup', 'suv', 'wagon', 'sedan'];
    if(autos.indexOf(auto1.type.toLowerCase()) < autos.indexOf(auto2.type.toLowerCase())) //
    {   
        return true;
    }
    if(autos.indexOf(auto1.type.toLowerCase()) > autos.indexOf(auto2.type.toLowerCase()))
    {
        return false;
    }
    if(autos.indexOf(auto1.type.toLowerCase()) == autos.indexOf(auto2.type.toLowerCase()))
    {
        if(yearComparator(auto1,auto2))
        {
            return true;
        }
        else{
            return false;
            }
    }
 }
/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.

*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****

As an example of the content in the parenthesis:
1990 Ford F-150 */


console.log("*****");
console.log("The cars sorted by year are: ");
sortArr(yearComparator, automobiles);
for (a in automobiles)
{
    automobiles[a].logMe(false);
}
console.log(" ");
console.log("The cars sorted by make are: ");
sortArr(makeComparator, automobiles);
for (b in automobiles)
{
    automobiles[b].logMe(false);
}
console.log(" ");
console.log("The cars sorted by type are: ");
sortArr(typeComparator, automobiles);
for (c in automobiles)
{
    automobiles[c].logMe(true);
}
console.log("*****");


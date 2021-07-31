async function findIntersection(steps) {
    let intersection = false;
    let trajectory = [{x:0,y:0}];
    let currentLocation = {x:0,y:0};
    let seg = 0;
    //looping through the array and checks for intersection if intersection happens loop will terminate and function returns segment number.
    await steps.forEach((step,segment) => {
    if(intersection){return true;}
       X = currentLocation.x;
       Y = currentLocation.y;
        switch(segment%4){
            case 0://moving on positive Y axis
                while (step>0) {Y++;
                    if(trajectory.filter(location=>(location.x == X && location.y == Y)).length > 0){
                        intersection = true;
                    }else{trajectory.push({x:X,y:Y});}
                    if(intersection){seg = segment;return 0;}else{step--};
                }
                break;
            case 1:
                while (step>0) {X++;//moving on positive X axis
                    if(trajectory.filter(location=>(location.x == X && location.y == Y)).length > 0){
                        intersection = true;
                    }else{trajectory.push({x:X,y:Y});}
                    if(intersection){seg = segment;return 0;}else{step--;}
                }
                break;
            case 2:
                while (step>0) {Y--;//moving on negative Y axis
                    if(trajectory.filter(location=>(location.x == X && location.y == Y)).length > 0){
                        intersection = true;
                    }else{trajectory.push({x:X,y:Y});}
                    if(intersection){seg = segment;return 0;}else{step--;}
                }
                break;
            case 3://moving on negative X axis
                while (step>0) {X--;
                    if(trajectory.filter(location=>(location.x == X && location.y == Y)).length > 0){
                        intersection = true;
                    }else{trajectory.push({x:X,y:Y});}
                    if(intersection){seg = segment;return 0;}else{step--;}
                }
                break;
        }
        currentLocation.x=X;
        currentLocation.y=Y;
    });
    return seg;
}
const steps = [6, 3, 5, 6, 2, 6];//Array of Crawl path

//Calling Function for finding intersection and return the segament number with point of intersection.
//<data> is index of segment in array and <data+1> is actual position of segment in Array
findIntersection(steps).then(data=> data?
    console.log(`The Tortoise will Cross his own path at point (x,y) => (${X},${Y}) while Completing the segment number ${data+1}.`):
console.log(`The Tortoise will never cross his own path.`));
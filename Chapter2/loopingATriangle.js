// #
// ##
// ###
// ####
// #####
// ######
// #######

// Approach - 1
for(let i=0; i<=7; i++) {
    let r= '';
    for(let j=0; j<=i; j++) {
        r+= '#';
    }
    console.log(r);
}

// Approach - 2
for(let i=0; i<=7; i++) {
    console.log("#".repeat(i));
}
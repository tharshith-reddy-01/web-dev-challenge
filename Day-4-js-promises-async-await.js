// Promises Example
const promise = new Promise(function (resolve, reject) {
    console.log("Inside promise");
    // Uncomment one of the lines below to test resolve or reject
    // reject("Promise rejected");
    // resolve("Promise resolved");
});

promise.then(handleResolve).catch(handleReject);

function handleResolve(value) {
    console.log("Resolved:", value);
}

function handleReject(error) {
    console.log("Rejected:", error);
}

// Function returning a promise
function one() {
    return new Promise(function (resolve, reject) {
        // Uncomment one of the lines below to test resolve or reject
        // reject("Error occurred");
        // resolve("Operation successful");
    });
}

// Async/Await Example
async function two() {
    console.log("Async function started");
    try {
        let result = await one();
        console.log("Promise resolved in async function:", result);
    } catch (error) {
        console.log("Promise rejected in async function:", error);
    }
}

console.log("Start of script");
two();
console.log("End of script");

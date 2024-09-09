// Questions and Answers on Promises and async/await

// 1. Simple Promise Resolution
// Problem: Create a Promise that resolves with the message "Hello, Promises!" after a delay of 2 seconds.
// Use .then() to log the message when the Promise is resolved.
const simplePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, Promises!");
    }, 2000);
});
simplePromise.then((message) => {
    console.log(message); // Logs: "Hello, Promises!"
});

// 2. Promise Rejection
// Problem: Create a Promise that randomly either resolves with "Success!" or rejects with "Error!".
// Use .then() for handling the success and .catch() for handling the error.
const randomPromise = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Success!") : reject("Error!");
});
randomPromise
    .then((message) => {
        console.log(message); // Logs: "Success!" (or nothing if rejected)
    })
    .catch((error) => {
        console.log(error); // Logs: "Error!" (if the Promise was rejected)
    });

// 3. Chaining Promises
// Problem: Create two Promises: 
// - The first Promise resolves with the value 5 after 1 second.
// - The second Promise multiplies the result from the first Promise by 10.
// Chain these Promises to compute and log the final result.
const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
    }, 1000);
});
const secondPromise = (value) => {
    return new Promise((resolve) => {
        resolve(value * 10);
    });
});
firstPromise
    .then((result) => secondPromise(result))
    .then((finalResult) => {
        console.log(finalResult); // Logs: 50
    });

// 4. Using async/await with Error Handling
// Problem: Write an async function that waits for a Promise to resolve with "Task completed!" after 2 seconds.
// Use try...catch to log an error message if the Promise rejects.
const asyncPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task completed!");
    }, 2000);
});
async function handleAsync() {
    try {
        const result = await asyncPromise;
        console.log(result); // Logs: "Task completed!"
    } catch (error) {
        console.log("An error occurred:", error);
    }
}
handleAsync();

// 5. Sequential Execution with async/await
// Problem: Create two functions:
// - delayOneSecond which returns a Promise that resolves after 1 second with "First done".
// - delayTwoSeconds which returns a Promise that resolves after 2 seconds with "Second done".
// Write an async function to call these functions sequentially and log their results.
function delayOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First done");
        }, 1000);
    });
}
function delayTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Second done");
        }, 2000);
    });
}
async function runSequentially() {
    const first = await delayOneSecond();
    console.log(first); // Logs: "First done"
    const second = await delayTwoSeconds();
    console.log(second); // Logs: "Second done"
}
runSequentially();

// 6. Delayed Message with Promise
// Problem: Create a function delayedMessage that takes a message and a delay time (in milliseconds). 
// The function should return a Promise that resolves with the message after the specified delay. 
// Test it with a message "Waited message" and a 3-second delay.
function delayedMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}
delayedMessage("Waited message", 3000).then((msg) => {
    console.log(msg); // Logs: "Waited message"
});

// 7. Parallel Execution with Promise.all
// Problem: Create three Promises that resolve with different messages ("A", "B", "C") each after 1 second.
// Use Promise.all() to log all results once they are resolved.
const promiseA = new Promise((resolve) => {
    setTimeout(() => resolve("A"), 1000);
});
const promiseB = new Promise((resolve) => {
    setTimeout(() => resolve("B"), 1000);
});
const promiseC = new Promise((resolve) => {
    setTimeout(() => resolve("C"), 1000);
});
Promise.all([promiseA, promiseB, promiseC]).then((results) => {
    console.log(results); // Logs: ["A", "B", "C"]
});

// 8. Error Propagation in Promise Chains
// Problem: Create a Promise chain where:
// - The first Promise resolves with a number 10.
// - The second Promise doubles the number.
// - The third Promise throws an error "Something went wrong!".
// Handle the error in the chain using .catch().
const promiseChain = new Promise((resolve) => {
    resolve(10);
});
promiseChain
    .then((value) => {
        return value * 2;
    })
    .then((doubledValue) => {
        throw new Error("Something went wrong!"); // Simulating an error
    })
    .catch((error) => {
        console.log("Caught an error:", error.message); // Logs: "Caught an error: Something went wrong!"
    });

// 9. Conditional Promise
// Problem: Create a Promise that resolves if a given number is even and rejects if it is odd. 
// Test the Promise with both even and odd numbers, handling both the resolve and reject cases with .then() and .catch().
function evenOrOdd(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("Even number");
        } else {
            reject("Odd number");
        }
    });
}
evenOrOdd(4)
    .then((result) => {
        console.log(result); // Logs: "Even number"
    })
    .catch((error) => {
        console.log(error);
    });

evenOrOdd(3)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error); // Logs: "Odd number"
    });

// 10. Loop with Promises
// Problem: Write a function countDown that counts down from a given number to zero, logging each number with a 1-second delay using Promises.
function countDown(number) {
    let promise = Promise.resolve();
    for (let i = number; i >= 0; i--) {
        promise = promise.then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(i);
                    resolve();
                }, 1000);
            });
        });
    }
}
countDown(5);
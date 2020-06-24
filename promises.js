const promiseObject = new Promise((resolve, reject) => {
    try {
        const data = 'Hello World';
        resolve(data);
    } catch (err) {
        reject(new Error(err));
    }
});
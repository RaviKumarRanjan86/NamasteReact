function deepCopy(obj) {
  // Check if obj is null or not an object
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Create a new object or array to hold the copied values
  const copy = Array.isArray(obj) ? [] : {};
  
  // Iterate over each key in obj
  for (let key in obj) {
    // Recursively copy nested objects and arrays
    copy[key] = deepCopy(obj[key]);
  }
  
  return copy;
}

// Example usage
const originalObject = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, 5]
  }
};

const copiedObject = deepCopy(originalObject);
console.log(copiedObject);

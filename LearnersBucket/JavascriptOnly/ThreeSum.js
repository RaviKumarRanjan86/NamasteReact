// Given an array of integers nums and an integer target, check if there are three numbers in the array such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You should return true or false.

// Example 1:

// Input: nums = [1, 2, 3, 5, 6, 11, 15, 16, 17, 18], target = 20 
// Output: true 
// Output: Because nums[1] + nums[2] + nums[6] == 20, we return true.
// Example 2:

// Input: nums = [1, 2, 3, 5, 6, 11, 15, 16, 17, 18], target = 90 
// Output: false 
// Output: There are no triplets which sum up to the given target, thus we return false.


function threeSum(nums, target) {
    for (let i = 0; i < nums.length - 2; i++) {
      let s = i + 1;
      e = nums.length - 1;
      let desiredNum = target - nums[i];
      while (s < e && s > i) {
        if (nums[s] + nums[e] === desiredNum) {
            //console.log('s',s,'e',e,'i',i)
          return true;
        } else if (nums[s] + nums[e] > desiredNum) {
          e--;
        } else {
          s++;
        }
      }
    }
    return false;
  }
  
  let nums = [1, 2, 3, 5, 6, 11, 15, 16, 17, 18],
    target = 20
  
  console.log(threeSum(nums, target))
  
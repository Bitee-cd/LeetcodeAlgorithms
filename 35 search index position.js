/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// loops through an array and searches for the target, 
//if it finds it, it returns the index
//if the number is in between two numbers
// it adds the number after the less number and return its index
// if the number at the beginning is more than the target, 
// it adds the number at the beginning and returns index
//if the number at the end of the array is less than the target it returns the index if the last number +1
var searchInsert = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return nums.indexOf(target)
        }
        else if (target > nums[i] && target < nums[i + 1]) {
            nums.splice(i + 1, 0, target)
            return nums.indexOf(target)
        }
    }
    if (nums[0] > target) {
        nums.unshift(target)
        return nums.indexOf(target)
    }
    else if (nums[nums.length - 1] < target) {
        nums.push(target)
        return nums.indexOf(target)
    }
};
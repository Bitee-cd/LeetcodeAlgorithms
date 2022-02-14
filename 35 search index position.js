/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
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
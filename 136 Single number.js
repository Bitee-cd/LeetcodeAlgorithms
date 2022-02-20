var singleNumber = function(nums) {
    nums = nums.sort(function(a, b){return a - b})
     for (i=0;i<nums.length;i++){
         if(nums[i]=== nums[i+1]){
             nums.splice(i,2)
             i--
         }
     }
     return nums[0]
 }
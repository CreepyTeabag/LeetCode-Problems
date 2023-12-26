var containsDuplicate = function(nums) {
   /*let compare = [];
   compare.push(nums[0]);
   for (let i = 1; i < nums.length; i++) {
       if (compare.includes(nums[i])) {
           return true;
       } else {
           compare.push(nums[i]);
       }
   }
   return false;*/

   /*for (let i = 0; i < nums.length; i++) {
       if (nums.slice(i + 1).includes(nums[i])) {
           return true;
       }
   }
   return false;*/

   nums.sort();
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] === nums[i + 1]) {
           return true;
       }
   }
   return false;
};
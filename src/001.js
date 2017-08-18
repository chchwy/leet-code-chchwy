/**
 * @title 1. Two Sum
 * @author http://chchwy.github.io
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    let j = 0;
    for ( i = 0; i < nums.length; ++i ) {
        for ( j = i + 1; j < nums.length; ++j ) {
            if ( nums[i] + nums[j] === target ) {
                return [ i, j ];
            }
        }
    }
};

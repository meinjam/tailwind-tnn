const hamburger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
  console.log('btn clicked');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});

// const twoSum = (nums, target) => {
//   //   console.log(nums);
//   //   console.log(target);

//   //   const lessThanTarget = nums.filter((n) => n <= target);
//   //   console.log(lessThanTarget);

//   let for1 = [];
//   let for2 = [];

//   for (let i = 0; i < nums.length; i++) {
//     for1.push(nums[i]);
//     // console.log(nums[i]);
//     for (let j = i + 1; j < nums.length; j++) {
//       for2.push(nums[j]);
//       console.log(nums[j]);
//     }
//   }

//   //   console.log(for1);
//   //   console.log(for2);
// };

// twoSum([2, 7, 11, 15], 9);

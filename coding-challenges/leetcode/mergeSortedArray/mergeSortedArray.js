function merge(nums1, m, nums2, n) {
  nums1.push(...nums2);
  console.log(nums1.filter((item) => item !== 0).sort());
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

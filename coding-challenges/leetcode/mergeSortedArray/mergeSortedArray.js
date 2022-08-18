function merge(nums1, m, nums2, n) {
<<<<<<< HEAD
  while (n > 0) {
    //if val in nums1 is greater than val in nums2, use nums1
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    }
    //otherwise use nums2 val
    else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
=======
  nums1.push(...nums2);
  return nums1.filter((item) => item !== 0).sort();
>>>>>>> 6995aaf (solved reverse linked list)
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

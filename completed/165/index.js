console.clear();

// Should return 0
const t1 = {
  s1: '1.01',
  s2: '1.001'
};

// Should return 0
const t2 = {
  s1: '1.0',
  s2: '1.0.0'
};

// Should return -1
const t3 = {
  s1: '0.1',
  s2: '1.1'
};

// TODO: current implementation only accounts for MAJOR.MINOR.PATCH
// .PATCH can be any additional number of .'s
const compareVersionNumbers = (version1, version2) => {
  const ver1Arr = version1.split('.').map(ver => parseInt(ver));
  const ver2Arr = version2.split('.').map(ver => parseInt(ver));

  const ver1Obj = {
    major: ver1Arr[0] || 0,
    minor: ver1Arr[1] || 0,
    patch: ver1Arr[2] || 0
  }

  const ver2Obj = {
    major: ver2Arr[0] || 0,
    minor: ver2Arr[1] || 0,
    patch: ver2Arr[2] || 0
  }

  if (ver1Obj.major !== ver2Obj.major) {
    return ver1Obj.major > ver2Obj.major ? 1 : -1;
  } else if (ver1Obj.minor !== ver2Obj.minor) {
    return ver1Obj.minor > ver2Obj.minor ? 1 : -1;
  } else if (ver1Obj.patch !== ver2Obj.patch) {
    return ver1Obj.patch > ver2Obj.patch ? 1 : -1;
  }

  return 0;
}

console.log(compareVersionNumbers(t1.s1, t1.s2))
console.log(compareVersionNumbers(t2.s1, t2.s2))
console.log(compareVersionNumbers(t3.s1, t3.s2))

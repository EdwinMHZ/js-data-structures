// I have solved this problem in leetcode

// https://leetcode.com/submissions/detail/1052829429/

function createMapWord(str: string): Map<string, number> {
  const map = new Map();
  for (const char of str) {
    let value = 1;
    if (map.has(char)) {
      value = map.get(char) + 1;
    }
    map.set(char, value);
  }

  return map;
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const mapWord1 = createMapWord(s);
  const mapWord2 = createMapWord(t);

  let isValidAnagram = true;
  mapWord1.forEach((value, key, _) => {
    if (!mapWord2.has(key)) {
      isValidAnagram = false;
      return;
    }
    if (mapWord2.has(key) && mapWord2.get(key) !== value) {
      isValidAnagram = false;
      return;
    }
  });

  return isValidAnagram;
}

console.log("Result:", isAnagram("anagram", "nagaram"));
console.log("Result:", isAnagram("rat", "car"));

let zeroCount = 0;
let oneCount = 0;
let twoCount = 0;

let curr = head;
while (curr) {
  if (curr.data === 0) {
    zeroCount++;
  } else if (curr.data === 1) {
    oneCount++;
  } else if (curr.data === 2) {
    twoCount++;
  }
  curr = curr.next; // ✅ fixed
}

curr = head; // ✅ reset pointer

while (curr) {
  if (zeroCount != 0) {
    curr.data = 0;
    zeroCount--;
  } else if (oneCount != 0) {
    curr.data = 1;
    oneCount--;
  } else {
    curr.data = 2;
    twoCount--;
  }
  curr = curr.next;
}

return head;

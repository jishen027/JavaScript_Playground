function triggerDataTransfer(origin) {
  let percentage = 1- (origin / 1);
  let processedData = 5000 * percentage;

  return processedData;
}

console.log(triggerDataTransfer(0.99));
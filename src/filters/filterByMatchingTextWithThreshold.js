function getOptionText(opt) {
  return typeof opt === 'string' ?
    opt :
    typeof opt.label === 'string' ?
      opt.label :
      opt.text || opt.value;
}

function isStatic(opt) {
  return opt === null || opt.static === true;
}

export default function filterByMatchingTextWithThreshold(threshold) {
  return (options, value) => {
    if (!value || threshold && options.length < threshold) return options;
    value = value.toLowerCase();

    return options.filter(opt => {
      return isStatic(opt) || getOptionText(opt).toLowerCase().indexOf(value) !== -1
    });
  }
}

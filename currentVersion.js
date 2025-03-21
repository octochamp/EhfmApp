const currentVersion = () => {
  const version = "0.1.7";
  const buildDate = "2025 03 21";
  // set releaseType to 'release' to hide Beta modal on launch
  const releaseType = "beta";
  return [version, releaseType, buildDate];
};

export default currentVersion;
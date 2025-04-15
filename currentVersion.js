const currentVersion = () => {
  const version = "0.1.8";
  const buildDate = "2025 04 xx";
  // set releaseType to 'release' to hide Beta modal on launch
  const releaseType = "beta";
  return [version, releaseType, buildDate];
};

export default currentVersion;
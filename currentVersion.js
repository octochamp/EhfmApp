const currentVersion = () => {
  const version = "1.0.0";
  const buildDate = "2025 04 16";
  // set releaseType to 'release' to hide Beta modal on launch
  const releaseType = "beta";
  return [version, releaseType, buildDate];
};

export default currentVersion;
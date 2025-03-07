const currentVersion = () => {
  const version = "0.1.6";
  const buildDate = "2025 03 07";
  // set releaseType to 'release' to hide Beta modal on launch
  const releaseType = "release";
  return [version, releaseType, buildDate];
};

export default currentVersion;
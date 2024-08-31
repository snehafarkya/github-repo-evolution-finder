import axios from "axios";

export const getRepoEvents = async (username, repo) => {
  const commitsUrl = `https://api.github.com/repos/${username}/${repo}/commits`;
  const issuesUrl = `https://api.github.com/repos/${username}/${repo}/issues`;
  const pullsUrl = `https://api.github.com/repos/${username}/${repo}/pulls`;
  const releasesUrl = `https://api.github.com/repos/${username}/${repo}/releases`;

  const [commits, issues, pulls, releases] = await Promise.all([
    axios.get(commitsUrl),
    axios.get(issuesUrl),
    axios.get(pullsUrl),
    axios.get(releasesUrl),
  ]);

  return {
    commits: commits.data,
    issues: issues.data,
    pulls: pulls.data,
    releases: releases.data,
  };
};

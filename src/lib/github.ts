export const fetchGitHubProfile = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error('GitHub profile not found');
    }
    const profile = await response.json();

    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
    const repos = await reposResponse.json();

    return {
      profile,
      repos: repos.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        language: repo.language,
        url: repo.html_url,
      })),
    };
  } catch (error) {
    throw new Error('Failed to fetch GitHub profile');
  }
};
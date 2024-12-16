export interface User {
  login: string;
  name: string;
  bio?: string;
  avatar_url?: string;
  location?: string;
  followers: number;
  following: number;
}
export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}
export interface RepoUser {
  id: string;
  name: string | null;
  html_url: string;
  description: string;
  license: License | null;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
}
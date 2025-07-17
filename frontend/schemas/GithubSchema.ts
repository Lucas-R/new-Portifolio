import { z } from "zod";

export const githubUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string(),
  gravatar_id: z.string(),
  url: z.string(),
  html_url: z.string(),
  followers_url: z.string(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  organizations_url: z.string(),
  repos_url: z.string().url(),
  events_url: z.string(),
  received_events_url: z.string(),
  type: z.string(),
  user_view_type: z.string(),
  site_admin: z.boolean(),
  name: z.string(),
  company: z.string().nullable(),
  blog: z.string().url(),
  location: z.string(),
  email: z.string().nullable(),
  hireable: z.boolean().nullable(),
  bio: z.string(),
  twitter_username: z.string(),
  public_repos: z.number(),
  public_gists: z.number(),
  followers: z.number(),
  following: z.number(),
  created_at: z.string(), 
  updated_at: z.string()
});

export type GithubUser = z.infer<typeof githubUserSchema>;

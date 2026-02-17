export interface Feature {
	icon: string;
	title: string;
	description: string;
}

export const features: Feature[] = [
	{
		icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
		title: 'Agent-in-Container',
		description:
			'Each agent gets its own isolated container with embedded Dockerfile templates. Alpine or Debian, your call.',
	},
	{
		icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
		title: 'Firewalled',
		description:
			'Block internet access by default, whitelist only the domains you need. Per-project rules via clawker.yaml.',
	},
	{
		icon: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7',
		title: 'Credential Forwarding',
		description:
			'SSH keys, GPG keys, and git config forwarded from your host automatically. No copy-pasting secrets into containers.',
	},
	{
		icon: 'M16 3h5v5 M4 20L21 3 M21 16v5h-5 M15 15l6 6 M4 4l5 5',
		title: 'Git Worktrees',
		description:
			'Spawn agents on separate branches simultaneously. Each worktree gets its own container — no conflicts.',
	},
	{
		icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
		title: 'Jailed Docker',
		description:
			'Agents get Docker access scoped to clawker containers only. They can\'t accidentally nuke your other stuff.',
	},
	{
		icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
		title: 'Bind or Snapshot',
		description:
			'Live-sync your workspace with bind mounts, or give the agent a snapshot copy. You pick the isolation level.',
	},
];

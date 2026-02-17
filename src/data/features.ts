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
		icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 19h2v2 M19 19v2',
		title: 'Fresh or Copy Agent Mode',
		description:
			'Clean install or seamless transition — bring your existing Claude Code settings, plugins, skills, and config along for the ride.',
	},
	{
		icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
		title: 'Bind or Snapshot',
		description:
			'Live-sync your workspace with bind mounts, or give the agent a snapshot copy. You pick the isolation level.',
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
			'SSH keys, GPG keys, and git config forwarded from your host automatically — just like devcontainers. No copy-pasting secrets into containers.',
	},
	{
		icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M4.5 4.5l15 15',
		title: 'Jailed Docker',
		description:
			'A guardrail layer between clawker and Docker that prevents operations on resources created outside of clawker. You won\'t accidentally nuke unrelated containers, networks, or volumes.',
	},
	{
		icon: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z M12 10v4 M10 12h4',
		title: 'Project Namespace Isolation',
		description:
			'Container resources scoped per-project. Run multiple projects simultaneously without stepping on each other\'s toes.',
	},
	{
		icon: 'M9 2v6 M15 2v6 M12 17v5 M5 8h14 M4.5 14h1 M18.5 14h1 M8 14h8 M8 11l4 3 4-3',
		title: 'Dedicated Docker Network',
		description:
			'All clawker resources live on the same clawker-net Docker network for easy communication.',
	},
	{
		icon: 'M16 3h5v5 M4 20L21 3 M21 16v5h-5 M15 15l6 6 M4 4l5 5',
		title: 'Git Worktrees',
		description:
			'Spin up agents in git worktrees with a single flag. Clawker handles worktree lifecycle for you — create, list, and clean up branches without leaving your workflow.',
	},
	{
		icon: 'M8 3l4 8 5-5 M4 11h16 M12 11v10 M8 21h8',
		title: 'Host Proxy Service',
		description:
			'Browser authentication callbacks forwarded from container to host. OAuth flows just work — zero config.',
	},
	{
		icon: 'M18 2l3 3-3 3 M11 8H3 M6 22l-3-3 3-3 M13 16h8 M21 12H3',
		title: 'Injectable Build Instructions',
		description:
			'Custom packages, environment variables, and scripts injected at container build time. Your Dockerfile, your rules.',
	},
	{
		icon: 'M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4 M14 3v4a2 2 0 0 0 2 2h4',
		title: 'Post-Init Scripts',
		description:
			'Bash scripts that run after container init. Perfect for MCP server setup, custom tooling, or whatever your workflow needs.',
	},
	{
		icon: 'M17 2l4 4-4 4 M3 11v-1a4 4 0 0 1 4-4h14 M7 22l-4-4 4-4 M21 13v1a4 4 0 0 1-4 4H3',
		title: 'Autonomous Looping',
		description:
			'Experimental looping mode with stagnation detection, circuit breaker protection, and configurable max loop limits. Built-in token and cost tracking so your agent doesn\'t run away with your wallet.',
	},
	{
		icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
		title: 'Monitoring & Observability',
		description:
			'Real-time insights into your agents\' performance, decisions, tool calls, costs, token usage, and more. Optional Prometheus, Loki, and Grafana stack with OpenTelemetry integration. Dashboards and alerts out of the box.',
	},
];

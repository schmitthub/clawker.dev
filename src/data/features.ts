export interface Feature {
	icon: string;
	title: string;
	description: string;
	href?: string;
}

export const features: Feature[] = [
	{
		icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
		title: 'Agent-in-Container',
		description:
			'Each agent — Claude Code, Codex, OpenCode, Pi, or your own — gets its own sandboxed Docker container with embedded Dockerfile templates and a purpose-built init daemon. Alpine or Debian, your call.',
		href: 'https://docs.clawker.dev/container-internals',
	},
	{
		icon: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.3 7l8.7 5 8.7-5 M12 22V12',
		title: 'Harness-Agnostic Bundles',
		description:
			'Any coding agent harness, one sandbox. Bundles package harness setups, dev stacks, and monitoring extensions as Dockerfile template fragments plus config files — hand-roll your own or distribute them. Claude Code, Codex, OpenCode, and Pi work out of the box; Copilot, Grok, z.ai, or anything else installable can be bundled in.',
	},
	{
		icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 19h2v2 M19 19v2',
		title: 'Fresh or Copy Agent Mode',
		description:
			'Clean install or seamless transition — bring your existing harness settings, plugins, skills, and auth along for the ride. Config and memory persist in volumes across container restarts.',
	},
	{
		icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
		title: 'Bind or Snapshot',
		description:
			'Live-sync your workspace with bind mounts, or give the agent a snapshot copy for pure isolation. You pick the sandbox level.',
	},
	{
		icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
		title: 'Kernel-Side Egress Firewall',
		description:
			'Deny-by-default networking via Envoy, CoreDNS, and eBPF — unlisted domains don\'t even resolve. TLS inspection enables path- and method-level rules, enforced kernel-side where the agent holds no privileges. Per-project rules via clawker.yaml.',
		href: 'https://docs.clawker.dev/firewall',
	},
	{
		icon: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7',
		title: 'Credential Forwarding',
		description:
			'SSH agent, GPG agent, git HTTPS, and harness auth forwarded from your host automatically — private keys never enter the container. No copy-pasting secrets.',
		href: 'https://docs.clawker.dev/credentials',
	},
	{
		icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M4.5 4.5l15 15',
		title: 'Jailed Docker',
		description:
			'A guardrail layer between clawker and Docker that prevents operations on resources created outside of clawker. You won\'t accidentally nuke unrelated containers, networks, or volumes.',
		href: 'https://docs.clawker.dev/docker-hygiene',
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
			'Run parallel agents on separate branches with a single flag. Clawker handles worktree lifecycle, and host-path mirroring keeps session resume (like Claude Code /resume) working across container restarts.',
		href: 'https://docs.clawker.dev/worktrees',
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
		href: 'https://docs.clawker.dev/custom-images',
	},
	{
		icon: 'M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4 M14 3v4a2 2 0 0 0 2 2h4',
		title: 'Lifecycle Hooks',
		description:
			'post_init scripts that run once after container init, plus pre_run hooks on every start. Perfect for MCP server setup, custom tooling, or whatever your workflow needs.',
	},
	{
		icon: 'M17 2l4 4-4 4 M3 11v-1a4 4 0 0 1 4-4h14 M7 22l-4-4 4-4 M21 13v1a4 4 0 0 1-4 4H3',
		title: 'Control Plane',
		description:
			'A per-host supervisor that owns the firewall lifecycle, eBPF programs, and the agent identity registry. mTLS gRPC with OAuth2 — and if the control plane dies, firewall rules stay pinned in the kernel. Fail closed, not open.',
		href: 'https://docs.clawker.dev/control-plane',
	},
	{
		icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
		title: 'Monitoring & Observability',
		description:
			'Real-time insight into your agents\' tool calls, decisions, costs, and token usage. Optional OpenTelemetry stack with Prometheus metrics, OpenSearch logs, and preinstalled Cost & Usage dashboards — extensible per-harness via monitoring bundles.',
		href: 'https://docs.clawker.dev/monitoring',
	},
	{
		icon: 'M12 8v4l3 3 M3.05 11a9 9 0 1 1 .5 4 M2 12h4',
		title: 'Egress Audit Trail',
		description:
			'Every firewall decision — allowed, denied, even bypassed — logged as a structured event with per-agent attribution. Records travel an mTLS-authenticated lane agents can\'t forge. Bypass mode is no longer a forensic black hole.',
		href: 'https://docs.clawker.dev/observability',
	},
];

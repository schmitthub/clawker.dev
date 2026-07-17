export interface FaqItem {
	question: string;
	answer: string;
}

export const faq: FaqItem[] = [
	{
		question: 'How do I sandbox Claude Code, Codex, or another coding agent?',
		answer:
			'Run it in a container. clawker builds an isolated Docker container per agent with a deny-by-default egress firewall, forwards your git credentials and harness settings in, and gives you a single CLI to build, run, and attach. One command: clawker run.',
	},
	{
		question: 'Which coding agent harnesses does clawker support?',
		answer:
			'clawker is harness-agnostic. Claude Code, OpenAI Codex, OpenCode, and Pi run out of the box via bundles. Anything else installable — GitHub Copilot CLI, Grok, z.ai, or your own tool — can be set up through the same bundle system. Sky is the limit: if it installs in a Docker image, clawker can sandbox it.',
	},
	{
		question: 'What is a clawker bundle?',
		answer:
			'A bundle packages a harness setup, dev stack, or monitoring extension as Dockerfile template fragments plus config files. Hand-roll one for your own workflow or distribute it for others to use — the same mechanism powers the built-in Claude Code, Codex, OpenCode, and Pi setups.',
	},
	{
		question: 'Is it safe to run Claude Code with --dangerously-skip-permissions?',
		answer:
			'On your host, you are trusting the agent with your filesystem, credentials, and network. Inside a clawker container the blast radius is the container: the workspace is the only host data mounted in, outbound traffic is blocked unless whitelisted, and the agent runs unprivileged with no Linux capabilities.',
	},
	{
		question: 'How is clawker different from devcontainers or Claude Code sandbox mode?',
		answer:
			'Devcontainers hand you a container and stop there. clawker ships the infrastructure around it: a control plane and kernel-side firewall stack in a box, agents seeded with auth material for provenance and trust, a custom PID 1 supervisor that executes control-plane commands, OpenTelemetry monitoring pre-built for coding agents and security events, and harness memory that persists between environments. Sandbox mode restricts the process — but it still shares your host.',
	},
	{
		question: 'Which models does clawker work with?',
		answer:
			'Any model your harness can run — clawker contains the harness, not the model. Anthropic models from Haiku up to mythos-class Fable 5 via Claude Code, OpenAI models via Codex, and any provider your harness of choice supports.',
	},
	{
		question: 'What platforms does clawker support?',
		answer:
			'macOS and Linux, with Docker installed and running. Install via Homebrew (brew install schmitthub/tap/clawker) or the shell script. Windows is not currently supported.',
	},
	{
		question: 'Does clawker protect against prompt injection?',
		answer:
			'clawker does not try to filter content — LLMs can be coerced through base64, steganography, even ancient languages, and that is an arms race you cannot win. It constrains the network instead: prompt injection can change the agent\'s intent, but it cannot change the container\'s constraints. If the agent is coerced into exfiltration, the firewall blocks the egress and the attempt lands in the audit trail.',
	},
	{
		question: 'Can the agent still reach the internet?',
		answer:
			'Only where you allow it. DNS for unlisted domains returns NXDOMAIN, and allowed domains can be scoped down to specific URL paths and HTTP methods via per-project rules in clawker.yaml.',
	},
];

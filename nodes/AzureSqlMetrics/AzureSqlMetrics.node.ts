import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlMetrics implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Metrics',
		name: 'N8nDevAzureSqlMetrics',
		icon: { light: 'file:./azure-sql-metrics.png', dark: 'file:./azure-sql-metrics.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Manages Azure SQL Database CRUD for servers, databases, elastic pools, recommendations, operations, and usage metrics.',
		defaults: { name: 'Azure SQL Metrics' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlMetricsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}

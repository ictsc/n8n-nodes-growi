import { INodeExecutionData, INodeType, INodeTypeDescription, jsonParse } from 'n8n-workflow';
import { IExecuteFunctions } from 'n8n-core';

export class GrowiNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Growi',
		name: 'growi',
		group: ['transform'],
		version: 1,
		description: 'Growi Node',
		defaults: {
			name: 'Growi Node',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'growiApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Page',
						value: 'page',
						description: 'Get page by page path or page ID',
						action: 'Get page by page path or page id',
					},
					{
						name: 'Subordinated Pages',
						value: 'subordinatedPages',
						description: 'Get subordinated pages',
						action: 'Get subordinated pages',
					},
				],
				default: 'page',
			},
			{
				displayName: 'Path',
				name: 'path',
				type: 'string',
				default: '',
				placeholder: 'Placeholder value',
				description: 'The description text',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const returnData: INodeExecutionData[] = [];

		const cred = await this.getCredentials('growiApi');
		const token = cred.token;
		const baseUrl = cred.baseUrl;

		const operation = this.getNodeParameter('operation', 0);

		if (operation === 'page') {
			const path = this.getNodeParameter('path', 1, '/') as string;

			const url = `${baseUrl}v3/page?access_token=${token}&path=${path}`;

			const response = await this.helpers.request({
				method: 'GET',
				url: url,
				headers: {
					'Content-Type': 'application/json',
				},
			});

			returnData.push({
				json: {
					page: jsonParse(response),
				},
			});
		} else if (operation === 'subordinatedPages') {
			const path = this.getNodeParameter('path', 1, '/') as string;

			const url = `${baseUrl}v3/pages/subordinated-list?access_token=${token}&path=${path}`;

			const response = await this.helpers.request({
				method: 'GET',
				url: url,
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const subordinatedPages = (jsonParse(response) as any)['subordinatedPages'];

			for (const page of subordinatedPages) {
				returnData.push({
					json: {
						page: page,
					},
				});
			}
		}

		return this.prepareOutputData(returnData);
	}
}

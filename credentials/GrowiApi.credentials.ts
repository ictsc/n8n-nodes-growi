import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class GrowiApi implements ICredentialType {
	name = 'growiApi';
	displayName = 'Growi API';
	properties: INodeProperties[] = [
		{
			displayName: 'Personal Access Token',
			name: 'token',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
			placeholder: 'https://example.com/_api/',
		},
	];
}

# n8n-nodes-growi

Information can be retrieved via Growi's API and incorporated into the n8n workflow.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)
[Compatibility](#compatibility)
[Resources](#resources)
[Development](#development)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community
nodes documentation.

### Community Install

1. Open n8n
2. Go to `Settings`
3. Go to `Community Nodes`
4. Click on `Install`
5. Input `@icttroacon/n8n-nodes-growi` in the input field

### Manual Install

```
npm install @icttroacon/n8n-nodes-growi
```

## Operations

### Get Page

* Get subordinated pages

### Get Subordinated Pages

* Get subordinated pages from Growi.

## Credentials

1. Access Token
	* Access Token for Growi
2. Host
	* Host for Growi
	
**Image**
	
<img width="512" alt="スクリーンショット 2023-03-06 18 59 02" src="https://user-images.githubusercontent.com/50326556/223078296-bb99af94-0df5-467f-be00-646e1b941852.png">
<img width="512" alt="n8n image" src="https://user-images.githubusercontent.com/50326556/223077553-790d9de0-c812-4e48-a8c8-0879d702b45b.png">


## Compatibility

* n8n: 0.218.0~

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Growi](https://growi.org/)

## Development

### Getting Started by Using Docker Compose

#### 1. Copy `.env.example` to `.env` and set the environment variables.

```
cp .env.example .env
```

#### 2. Run the following command to start the container.

```
docker compose up -d
```

#### 3. Reload the Growi Node in n8n.

```
npm run build && docker compose restart && docker compose logs -f
```




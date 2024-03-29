#  Content Management System (CMS)


## Table of Contents

- [About](#about)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Endpoints](#endpoints)
- [Installation](#installation)


## About

This Django project is a Content Management System (CMS) API that provides the backend functionality for managing and organizing content. The system caters to two types of users: admin and author. Admin users are pre-seeded into the system, while authors can register and log in using their email addresses.


### Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- ExpressJs

## Endpoints

The following API endpoints are available:


<br>

- ## User Registration: `register` (POST)

**Body:**
```
{
    "username": "author2",
    "email": "author2@example.com",
    "full_name": "John Doe",
    "password": "Mozzam@123",
    "phone": "1234567890",
    "address": "123 Main St",
    "city": "Your City",
    "state": "Your State",
    "country": "Your Country",
    "pincode": "123456",
    "role": "author"
}
```

- ## User Login: `login` (POST)

**Body:** 
```
{
  "email": "author1@example.com",
  "password": "Mozzam@123"
}
```


- ## List All Content: `getcontent` (GET)
**Body:**
```
{
    "username": "author2@example.com"
}
```
- ## Create Content: ## `create` (POST)
**Body:**
```
{
    "username": "author2@example.com",
    "content": {
        "title": "third title",
        "body": "third body"
    }
}
```
- ## Delete Content:##  `delete` (POST)
**Body:** 
```
{
    "username": "author2@example.com",
    "content_id": "080f168f-fc16-4e34-b3ad-6ab6dfb29392"
}
```

- ## Search Content:##  `search` (POST)
**Body:**
```
{
    "query": "author2 through api"
}
```
### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/mozzam123/Basic-Nodejs-Chat-Application.git
   ```





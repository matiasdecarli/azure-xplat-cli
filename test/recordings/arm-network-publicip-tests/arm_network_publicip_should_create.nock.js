// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314/?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3b32046e-ed91-444c-8d17-58bf9e3dd114',
  'x-ms-correlation-request-id': '3b32046e-ed91-444c-8d17-58bf9e3dd114',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173351Z:3b32046e-ed91-444c-8d17-58bf9e3dd114',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 17:33:51 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314/?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3b32046e-ed91-444c-8d17-58bf9e3dd114',
  'x-ms-correlation-request-id': '3b32046e-ed91-444c-8d17-58bf9e3dd114',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173351Z:3b32046e-ed91-444c-8d17-58bf9e3dd114',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 17:33:51 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314/?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicipnew7314\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314\",\r\n  \"etag\": \"W/\\\"26155153-a4bc-4899-b78e-80eb922dbc33\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip19272\",\r\n      \"fqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip9501.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e990d854-0fbd-4df0-8e2e-9dfe9dde769e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/e990d854-0fbd-4df0-8e2e-9dfe9dde769e?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '8686c769-ad56-4775-9f55-146bb226051e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173359Z:8686c769-ad56-4775-9f55-146bb226051e',
  date: 'Wed, 22 Apr 2015 17:33:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314/?api-version=2015-05-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicipnew7314\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314\",\r\n  \"etag\": \"W/\\\"26155153-a4bc-4899-b78e-80eb922dbc33\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip19272\",\r\n      \"fqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip9501.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e990d854-0fbd-4df0-8e2e-9dfe9dde769e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/e990d854-0fbd-4df0-8e2e-9dfe9dde769e?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '8686c769-ad56-4775-9f55-146bb226051e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173359Z:8686c769-ad56-4775-9f55-146bb226051e',
  date: 'Wed, 22 Apr 2015 17:33:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/e990d854-0fbd-4df0-8e2e-9dfe9dde769e?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8f716985-70c5-40d3-92a4-3f8d0b19819f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': 'eb78b500-f96e-4dcb-a4e0-acf3f3f57722',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173410Z:eb78b500-f96e-4dcb-a4e0-acf3f3f57722',
  date: 'Wed, 22 Apr 2015 17:34:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/e990d854-0fbd-4df0-8e2e-9dfe9dde769e?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8f716985-70c5-40d3-92a4-3f8d0b19819f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-correlation-request-id': 'eb78b500-f96e-4dcb-a4e0-acf3f3f57722',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173410Z:eb78b500-f96e-4dcb-a4e0-acf3f3f57722',
  date: 'Wed, 22 Apr 2015 17:34:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicipnew7314\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314\",\r\n  \"etag\": \"W/\\\"c592fdff-6fad-4808-9fcd-3e0ecba80a7d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip19272\",\r\n      \"fqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip9501.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '629',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c592fdff-6fad-4808-9fcd-3e0ecba80a7d"',
  'x-ms-request-id': '406b3154-8c2e-45ed-bfe6-f3a3ecc2f7b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31988',
  'x-ms-correlation-request-id': '3437b177-d2bf-4e4e-94f0-2c78c1217ced',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173411Z:3437b177-d2bf-4e4e-94f0-2c78c1217ced',
  date: 'Wed, 22 Apr 2015 17:34:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicipnew7314\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7314\",\r\n  \"etag\": \"W/\\\"c592fdff-6fad-4808-9fcd-3e0ecba80a7d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip19272\",\r\n      \"fqdn\": \"dnstestpubip19272.eastus.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip9501.eastus.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '629',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c592fdff-6fad-4808-9fcd-3e0ecba80a7d"',
  'x-ms-request-id': '406b3154-8c2e-45ed-bfe6-f3a3ecc2f7b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31988',
  'x-ms-correlation-request-id': '3437b177-d2bf-4e4e-94f0-2c78c1217ced',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173411Z:3437b177-d2bf-4e4e-94f0-2c78c1217ced',
  date: 'Wed, 22 Apr 2015 17:34:11 GMT',
  connection: 'close' });
 return result; }]];
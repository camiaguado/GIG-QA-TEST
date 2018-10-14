# GIG - QA ASSESSMENT

## Exercise one:
Find exercise number one on **GIG-QA-test/BDD/features/** path. In this folder you will find two .features:
1. backEnd.feature
2. frontEnd.feature


## Exercise two:
Automation test framework using protractor

### Getting started
#### Prerequisites
 - You have installed [Node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm)
 
#### Installation
###### 1. Clone github repository
```bash
git clone https://github.com/camiaguado/GIG-QA-TEST.git
```
##### 2. Download dependencies
```bash
npm install
```
##### 3. Run tests
```bash
npm test
```

#### Finally you can see the report of tests in following path:

`GIG-QA-TEST/reporter/GIG-test--htmlReport.html`


Bug in signup form:
-------------
Sign Up tests are failing because Consent form is not visible

**Steps**:

1. Open https://qatest.staging.kaboo.com/en/signup
2. Fill email field
3. Fill username field
4. Fill password field
5. Fill repeat password field

**Expected result:** Consents form should be visible to be able to accept terms and conditions
**Result:** The form does not load after 10 seconds

Results are in GIG-test--htmlReport.html file.


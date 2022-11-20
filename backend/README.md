# Backend
### Request Handling
The request are sent as snakecase then later converted to camel case before processing. On completion, the request is converted back to snakecase before being sent to the front end.

<br>
REQUEST VALIDATION: [Fastest Validator](https://www.npmjs.com/package/fastest-validator)

TEST: [mocha](), [chai](), [supertest]()

<br>

### TODO
> [x] __Create User Model__ 
> - this is going to be used to match the author and his account on the platform. <br>
_Note: Only identified Users can create blogs. This is very nessesary so that modification and ownership permissions can be implemented_

> [] __Create Authentication__
> - login service ( This should just be a simple email and password login )
> - register service ( This should jsut be a simple email and password registration ) <br>
_Note: This task has to be completed before any other routes can be built._
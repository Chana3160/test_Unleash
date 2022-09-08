# testHome

**answer 1:**
 we have here 2 api calls, and they are same api call, we can see that we don't send any parameter what can affect on the response, so we can tell that what return from the server in this api call is same and so we can declare x1 and x2, and then call getNumberFromServer() just once, x1 and x2 will be equals to the response, and if we will do it like that we can save 5 sec, and improve performance.
https://github.com/chaniYehudit/test_Unleash/blob/e15b871c6e43680e81b46da0e5c69b8e458ad9ac/homeWork.ts#L3
**answer 2:**
the syntax of recursion is clearlier than loop' syntax, but the recursion use more memory than loop, because in every iteration it's keeping the previous iterations value, and loop does not
* https://github.com/chaniYehudit/test_Unleash/blob/e15b871c6e43680e81b46da0e5c69b8e458ad9ac/homeWork.ts#L16
* https://github.com/chaniYehudit/test_Unleash/blob/8bf419546dbd3b8d7b2869e132a8efe478d6ee96/homeWork.ts#L52
**answer 3:**
https://github.com/chaniYehudit/test_Unleash/blob/8bf419546dbd3b8d7b2869e132a8efe478d6ee96/homeWork.ts#L72
**answer 4:**
When you are using promises in a for loop, the loop does not wait for the promises to resolve/reject by default.
This causes unexpected behavior
And in this case the Promise should be sent asynchronously, so it is not correct to put the await in a simple for loop, but in the loop from which the Promise is sent. (before promises.push...)
**answer 5:**
https://github.com/chaniYehudit/test_Unleash/blob/8bf419546dbd3b8d7b2869e132a8efe478d6ee96/express/app.ts#L10
**answer 6:**
https://github.com/chaniYehudit/test_Unleash/blob/8bf419546dbd3b8d7b2869e132a8efe478d6ee96/homeWork.css#L5

**answer 7:**
* GET /users/id=id1,id2,id3,id4,id5
* PUT/users/{id}
* POST /users/ [{"name": "hana"}, {"name": "sara"}]

**answer 8:** 

An OAuth Refresh Token is a string that the OAuth client can use to get a new access token without the user's interaction. A refresh token must not allow the client to gain any access beyond the scope of the original grant. The refresh token exists to enable authorization servers to use short lifetimes for access tokens without needing to involve the user when the token expires. An OAuth Access Token is a string that the OAuth client uses to make requests to the resource server.

**answer 9:**

*q= name contains 'pdf' AND '1234' in parents
*q= sharedWithMe AND name contains 'mp3'
*q= name = 'important'


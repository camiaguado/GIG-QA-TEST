
Background:
Given user1 has claimed 2 tokens

 {
	  username: user1, 
	  token: [ 
	 	token1[{
	 			game-slug: 'game1', 
	 			date-claimed: '01-01-2018', 
	 			info: 'information', 
	 			reason: 'reason',
	 			expiry-date: '01-12-2018'
	 			}],
	 	token2[{
	 			game-slug: 'game2', 
	 			date-claimed: '01-02-2018', 
	 			info: 'information', 
	 			reason: 'reason',
	 			expiry-date: '01-01-2019'
	 			}]
 }


 And user2 has claimed one token 3 times
 {
	  username: user2, 
	  token: [ 
	 	token1[{
	 			game-slug: 'game1', 
	 			date-claimed: '01-01-2018', 
	 			info: 'information', 
	 			reason: 'reason',
	 			expiry-date: '01-12-2018'
	 			},
	 			{
	 			game-slug: 'game1', 
	 			date-claimed: '02-01-2018', 
	 			info: 'information', 
	 			reason: 'reason',
	 			expiry-date: '02-12-2018'
	 			},
	 			{
	 			game-slug: 'game1', 
	 			date-claimed: '03-01-2018', 
	 			info: 'information', 
	 			reason: 'reason',
	 			expiry-date: '03-12-2018'
	 			}]
 }

 And user3 has not claimed tokens
  {
	  username: user3, 
	  token: []
 }

 And user4 has claimed one token and an other token 2 times

 {
	  username: user4, 
	  token: [ 
	 	token1[{
	 			game-slug: 'game1', 
	 			date-claimed: '01-05-2018', 
	 			info: 'information', 
	 			reason: 'reason',
	 			expiry-date: '01-12-2018'
	 			}],
	 	token2[{
	 			game-slug: 'game2', 
	 			date-claimed: '01-01-2018', 
	 			info: 'information', 
	 			reason: 'reason',
	 			expiry-date: '01-12-2018'
	 			},
	 			{
	 			game-slug: 'game2', 
	 			date-claimed: '02-01-2018', 
	 			info: 'information', 
	 			reason: 'reason',
	 			expiry-date: '02-12-2018'
	 			},
	 			{
	 			game-slug: 'game2', 
	 			date-claimed: '03-01-2018', 
	 			info: 'information', 
	 			reason: 'reason',
	 			expiry-date: '03-12-2018'
	 			}]
	 	token3[{
	 			game-slug: 'game3', 
	 			date-claimed: '01-06-2018', 
	 			info: 'information', 
	 			reason: 'reason',
	 			expiry-date: '01-06-2019'
	 			}],
 }



Scenario 1: Correct request with right parm
	Given a request using ´/igc/betspin/rewards/history´ method
	When send a ´userName´ as param
	Then should get 200 response code

Scenario 2: Bad request
	Given a request using ´/igc/betspin/rewards/history´ method
	When send a ´username´ as param
	Then should get 500 error

Scenario 3: User and token matched
	Given a request using ´/igc/betspin/rewards/history´ method
	When send a user <user> as param
	Then should get a JSON with <tokens>

Examples:
	|    user   |          token           |
	|    user1  | [token1, token2]         |
    |    user2  | [token1]                 |
    |    user3  | []                       |
	|    user4  | [token1, token2, token3] |

Scenario 4: Subarray fields
	Given a request using ´/igc/betspin/rewards/history´ method
	When send a user user2 as name
	Then each token1 subarray should contain <field>

Examples:
	|    field     |
	| game-slug    |
	| date claimed |
	| info         |
	| reason       |
	| expiry date  |

Scenario 5: Chronological order
	Given a request using ´/igc/betspin/rewards/history´ method
	When send a user user2 as name
	Then subarray with <date> date should be <position>

Examples:
	| 	date      | position |
	| 03-01-2018  |  first   |  
	| 02-01-2018  |	 second  |  
	| 01-01-2018  |  third   |
	


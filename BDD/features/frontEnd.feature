
Background:
Given: An user logged 

Scenario 1: History section displayed
	Given a user that has claimed a reward
	When user is in Freebies Vault Section 
	Then Your History section is dispalyed

Scenario 2: History section hided
	Given a user that has not claimed a reward
	When user is in Freebies Valut Section
	Then Your History section is hided

Scenario 3: Characteristic thumbnail
	Given a user that has claimed <reward> reward(s)
	When user is in Frebies Valut Section
	Then <image> characteristic thumbnail(s) are dispalyed

	Examples:

		| reward | image |
		|   1    |   1   |
		|   4    |   4   |
		|   8    |   8   |
		|   12   |   8   |

Scenario 4: Last 8 rewards
	Given a user that has claimed 10 rewards
	When user is in Frebies Valut Section
	Then last 8 rewards should be displayed

Scenario 5: Mouse hover
	Given a user that has claimed rewards
	When user is in Febies Valut Section
	And user hover the mouse over a reward
	Then text with the name of specific reward should be displayed
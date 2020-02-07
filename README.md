As an Lumber API user
I want to be able to compare cuts of lumber
So that I can make purchasing decisions 
When I request a lumber with width, length, and thickness
Then I see a list of lumber matching those dimensions
And it’s brand name, price, quality, and material
path structure: /lumber/:width:/:length:/:height:


/lumber/2/4/1
```
[
	{
		"brand": "Blue Ox",
		"price": "$2000.00",
		"quality": "high",
		"material": "maple" 
	}
	…
]

```
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

# Lumber V2 
In order to give our customers a more streamlined experience, we have updated our API to include a more robust set of data:

We now include a manufacturer description and Id, in the hopes API consumers will let users filter by brand.

There is now a specification object which describes the product in a way that is more consistent with how we want them displayed. One important note here is that we include a `warn_customer` flag to inform customers on whether a material is suitable for construction.

Lastly, the price object gives consumers the ability to show both Canadian and US based pricing. We have also included a `per_unit` attribute in preparation of bulk pricing feature—coming in Q4 this year. 
 
```json
{
    product_details: {
    manufacturer: {
        name: "Jimmys Lumber",
        id: 1
    },
    specification: {
        quality: "premium",
        material: "maple",
        warn_customer: false,
        dimensions: "2x4",
        length: "10ft"
    },
    upc_code: '0067784412184',
    price: {
        dollars: "$20.00",
        canadian_dollars: "$26.00",
        per_unit: 1
    }
  }
}   
``` 
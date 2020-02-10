module.exports = [
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
                length: "10ft",
                backend_dimensions: {
                    width: 2,
                    height: 4,
                    length: 10
                }
            },
            upc_code: '0067784412184',
            price: {
                dollars: "$20.00",
                canadian_dollars: "$26.00",
                per_unit: 1
            }
        }   
    },
    {
        product_details: {
            manufacturer: {
                name: "Blue Ox",
                id: 1021
            },
            specification: {
                quality: "medium",
                material: "common wood",
                warn_customer: false,
                dimensions: "5x3",
                length: "9ft",
                backend_dimensions:
                {
                    width: 5,
                    height: 3,
                    length: 9
                }
            },
            upc_code: '4672242421480',
            price: {
                dollars: "$5.00",
                canadian_dollars: "$10.00",
                per_unit: 1
            }
        }   
    },
    {
        product_details: {
            manufacturer: {
                name: "Jenny Mae's Premium",
                id: 2021
            },
            specification: {
                quality: "premium",
                material: "rare redwood",
                warn_customer: false,
                dimensions: "8x5",
                length: "16ft",
                backend_dimensions:
                                {
                                    width: 8,
                                    height: 5,
                                    length: 16
                                }
            },
            upc_code: '2394354378092',
            price: {
                dollars: "$5.00",
                canadian_dollars: "$10.00",
                per_unit: 1
            }
        }   
    },
    {
        product_details: {
            manufacturer: {
                name: "Alexander's",
                id: 12102
            },
            specification: {
                quality: "low",
                material: "scrap",
                warn_customer: true,
                dimensions: "2x4",
                length: "1ft",
                backend_dimensions: {
                    width: 2,
                    height: 4,
                    length: 1
                }
            },
            upc_code: '72527273070',
            price: {
                dollars: "$0.50",
                canadian_dollars: "$1.00",
                per_unit: 1
            }
        }   
    }
]
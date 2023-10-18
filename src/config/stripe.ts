export const PLANS = [
    {
        name: "Free",
        slug: "free",
        quota: 10,
        pagesPerPdf: 5,
        price: {
            amount: 0,
            priceIds: {
                test: '',
                production: ''
            }
        }
    },

    {
        name: "Pro",
        slug: "pro",
        quota: 60,
        pagesPerPdf: 25,
        price: {
            amount: 10,
            priceIds: {
                test: 'price_1O25TOBltskGxjtkns3KnDSx',
                production: 'price_1O25TOBltskGxjtkns3KnDSx',
            }
        }
    }
]
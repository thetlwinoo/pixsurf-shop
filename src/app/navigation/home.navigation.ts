import { PixsurfNavigation } from "@pixsurf/types";

export const homeNavigation: PixsurfNavigation[] = [
    {
        id: "mobiles-tablets",
        title: "Mobiles and Tablets",
        translate: "NAV.MOBILETABLETS",
        type: "group",
        icon: "cat1",
        children: [
            {
                id: "women",
                title: "WOMEN'S",
                translate: "NAV.WOMEN",
                type: "collapsable",
                children: [
                    {
                        id: "dress",
                        title: "Dresses",
                        translate: "NAV.DRESS",
                        type: "item"
                    },
                    {
                        id: "coats-jackets",
                        title: "Coats & Jackets",
                        translate: "NAV.COATSJACKETS",
                        type: "item"
                    },
                    {
                        id: "blouses-shirts",
                        title: "Blouses & Shirts",
                        translate: "NAV.BLOUSESSHIRTS",
                        type: "item"
                    },
                    {
                        id: "tops-tees",
                        title: "Tops & Tees",
                        translate: "NAV.TOPSTEES",
                        type: "item"
                    },
                    {
                        id: "hoodies-sweatshirts",
                        title: "Hoodies & Sweatshirts",
                        translate: "NAV.HOODIESSWEATSHIRTS",
                        type: "item"
                    },
                    {
                        id: "intimates",
                        title: "Intimates",
                        translate: "NAV.INTIMATES",
                        type: "item"
                    },
                    {
                        id: "swimwear",
                        title: "Swimwear",
                        translate: "NAV.SWIMWEAR",
                        type: "item"
                    },
                    {
                        id: "pants-capris",
                        title: "Pants & Capris",
                        translate: "NAV.PANTSCAPRIS",
                        type: "item"
                    },
                    {
                        id: "sweaters",
                        title: "Sweaters",
                        translate: "NAV.SWEATERS",
                        type: "item"
                    },
                    {
                        id: "accessories",
                        title: "Accessories",
                        translate: "NAV.ACCESSORIES",
                        type: "item"
                    }
                ]
            },
            {
                id: "men1",
                title: "MEN'S",
                translate: "NAV.MEN1",
                type: "collapsable",
                icon: "cat-mega-thumb",
                children: [
                    {
                        id: "tops-tees",
                        title: "Tops & Tees",
                        translate: "NAV.TOPSTEES",
                        type: "item"
                    },
                    {
                        id: "coatsandjackets",
                        title: "Coats & Jackets",
                        translate: "NAV.COATSJACKETS",
                        type: "item"
                    },
                    {
                        id: "underwear",
                        title: "Underwear",
                        translate: "NAV.UNDERWEAR",
                        type: "item"
                    },
                    {
                        id: "shirts",
                        title: "Shirts",
                        translate: "NAV.SHIRTS",
                        type: "item"
                    },
                    {
                        id: "hoodies-sweatshirts",
                        title: "Hoodies & Sweatshirts",
                        translate: "NAV.HOODIESSWEATSHIRTS",
                        type: "item"
                    },
                    {
                        id: "jeans",
                        title: "Jeans",
                        translate: "NAV.JEANS",
                        type: "item"
                    },
                    {
                        id: "pants",
                        title: "Pants",
                        translate: "NAV.PANTS",
                        type: "item"
                    },
                    {
                        id: "suitsandblazer",
                        title: "Suits & Blazer",
                        translate: "NAV.SUITSBLAZER",
                        type: "item"
                    },
                    {
                        id: "shorts",
                        title: "Shorts",
                        translate: "NAV.SHORTS",
                        type: "item"
                    },
                    {
                        id: "accessories",
                        title: "Accessories",
                        translate: "NAV.ACCESSORIES",
                        type: "item"
                    }
                ]
            },
            {
                id: "men2",
                title: "MEN'S",
                translate: "NAV.MEN2",
                type: "collapsable",
                icon: "cat-mega-thumb",
                children: []
            },
        ]
    }    
];

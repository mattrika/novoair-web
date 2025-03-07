export interface Office {
    name: string;
    address: string;
    phone: string;
    email?: string;
}

export interface City {
    city: string;
    offices: Office[];
}

export interface Country {
    country: string;
    cities: City[];
}

export type Offices = Country[];


export const offices : Offices = [
    {
        country: "Bangladesh",
        cities: [
            {
                city: "Dhaka",
                offices: [
                    {
                        name: "Corporate Office",
                        address: "House-50, Road-11, Block-F, Banani.",
                        phone: "13603, +88-09638-013603, +88-09666722224",
                        email: "info@flynovoair.com"
                    },
                    {
                        name: "Banani Sales Office",
                        address: "House-50, Road-11, Block-F, Banani.",
                        phone: "13603, +88-09638-013603, +880-9666722224, ext: 5111, +880-1755656662"
                    },
                    {
                        name: "Motijheel Sales Office",
                        address: "Shop No: G-7, Eastern Arzoo, 197 Shahid Syed Nazrul Shoroni, 61 Bijoynagar, Dhaka-1000",
                        phone: "13603, +88-09638-013603, +880-9666722224, ext:5161; +880-1755656648"
                    },
                    {
                        name: "Uttara Sales Office",
                        address: "House-53, Road-18, Sector-3, Uttara.",
                        phone: "13603, +88-09638-013603, +88-09666722224, ext: 5121; +880-1755656664"
                    },
                    {
                        name: "Asad Gate Sales Office",
                        address: "Shop No. 15, New Colony Masjid Market (First Floor) 01, Asad Gate, Mohammadpur, Dhaka-1207.",
                        phone: "13603, +88-09638-013603, +880-9666722224, ext: 5167-5168; +880-1755656643"
                    },
                    {
                        name: "Airport Sales Office",
                        address: "Hazrat Shahjalal International Airport, Domestic Terminal.",
                        phone: "13603, +88-09638-013603, +88-09666722224, ext: 5123; +880-1755656663"
                    }
                ]
            },
            {
                city: "Chattogram",
                offices: [
                    {
                        name: "Agrabad Sales Office",
                        address: "H & M Tower, 23 Agrabad ( 2nd Floor), Commercial Area, Sheikh Mujib Road Agrabad",
                        phone: "13603, +88-09638-013603, +88-09666722224, +880-1755656666, ext: 5130"
                    },
                    {
                        name: "Airport Sales Office",
                        address: "Shah Amanat International Airport.",
                        phone: "13603, +88-09638-013603, +88-09666722224, ext: 5144; +880-1755656668"
                    }
                ]
            },
            {
                city: "Cox's Bazar",
                offices: [
                    {
                        name: "Cox’s Bazar Sales Office",
                        address: "Hotel Sea Palace (Front Side Market) Kolatoli Road",
                        phone: "13603, +88-09638-013603, +88-09666722224, ext: 5145; +880-1755656669"
                    },
                    {
                        name: "Airport Office",
                        address: "Cox's Bazar Airport.",
                        phone: "13603, ext: 5146; +880-1755656604"
                    }
                ]
            },
            {
                city: "Jashore",
                offices: [
                    {
                        name: "Jashore Sales Office",
                        address: "Moti Shopping Mall, 1st Floor 30 Mujib Sarak Kotowali, Jashore - 7400",
                        phone: "13603, +88-09638-013603, +88-09666722224, ext: 5147-48, +880-1755656670"
                    },
                    {
                        name: "Airport Office",
                        address: "Jashore Airport.",
                        phone: "13603, ext: 5173, +880-1755656603"
                    }
                ]
            },
            {
                city: "Khulna",
                offices: [
                    {
                        name: "Khulna Sales Office",
                        address: "46, K D A Avenue, Jiban Bima Bhaban (1st floor), Khulna",
                        phone: "13603, +88-09638-013603, +88-09666722224, ext: 5149-50; +880-1755656671; +88 02-477729135; +88 02-477724365"
                    }
                ]
            },
            {
                city: "Sylhet",
                offices: [
                    {
                        name: "Sylhet Office",
                        address: "Firoz Centre (1st Floor), 891/Ka, Chouhatta, Noya Sharak Road, Sylhet-3100",
                        phone: "13603, +88-09638-013603, +88-09666722224, ext: 5151-52; +88-01755656672"
                    },
                    {
                        name: "Airport Office",
                        address: "Osmani International Airport.",
                        phone: "13603, ext: 5176; +88-01755656605"
                    }
                ]
            },
            {
                city: "Rajshahi",
                offices: [
                    {
                        name: "Rajshahi Sales Office",
                        address: "55, Boalia para, Alokar Mor, Ghoramara – 6100 (Opposite site of Rajshahi Chamber of Commerce and Industries)",
                        phone: "13603, +88-09638-013603, +88-09666722224, ext: 5155-56, +880-1755656657"
                    },
                    {
                        name: "Airport Office",
                        address: "Shah Makhdum Airport",
                        phone: "13603, ext: 5179; +88-01755656607"
                    }
                ]
            },
            {
                city: "Saidpur",
                offices: [
                    {
                        name: "Saidpur Sales Office",
                        address: "Holding No# 0011 (Ground Floor), Shahid Dr. Zikrul Haque Road. Saidpur, Nilphamari",
                        phone: "13603, +88-09638-013603, +88-09666722224, ext: 5153-54, +880-1755656656"
                    },
                    {
                        name: "Rangpur Sales Office",
                        address: "47, Dhap Cantonment Road, Rangpur",
                        phone: "13603, +88-09638-013603, +88-09666722224, ext: 5163-64 +88-01755656647"
                    },
                    {
                        name: "Airport Office",
                        address: "Saidpur Airport.",
                        phone: "13603, ext: 5178, +880-1755656606"
                    }
                ]
            }
        ]
    },
    {
        country: "Overseas",
        cities: [
            {
                city: "India",
                offices: [
                    {
                        name: "NOVOAIR, Kolkata, India",
                        address: "Chowringhee Mansions, Room: B & C, Block: E, A/2D Dr. MD Ishaque Road (Kyd Street) Kolkata - 700016, India.",
                        phone: "+91-9836333603, +91-9836133603",
                        email: "ccu@flynovoair.com"
                    },
                    {
                        name: "Kolkata Airport Office",
                        address: "Counter No.27 at Arrival Area New Integrated Building (Terminal - 2), Near Gate No 4 Netaji Subhas Chandra Bose International Airport Kolkata - 700052, India",
                        phone: "+91 98747 23603",
                        email: "ccuapt@flynovoair.com"
                    }
                ]
            }
        ]
    }
];

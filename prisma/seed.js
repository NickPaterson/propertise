import { PrismaClient } from '@prisma/client';
import process from 'process';
const prisma = new PrismaClient();

async function main() {
  // Seed the User table
  await prisma.user.create({
    data: {
      email: 'test@test.com',
      password: 'password',
      bookmarkedIds: [],
      bookmarks: [],
      profile: {
        create: {
          firstName: 'John',
          lastName: 'Doe',
          phone: '1234567890',
          role: 'USER',
        },
        }
      }
    
  }); 
  const estateAgent1 = await prisma.estateAgent.create({
    data: {
      name: 'Estate Agent 1',
      contactNames: ['John Doe', 'Jane Doe'],
      branch: 'Paisley',
      address: {
        create: {
          line1: '1 Main Street',
          line2: 'Paisley',
          city: 'Glasgow',
          state: 'Renfrewshire',
          postcode: 'PA1 1AA',
          coordinates: {
            create: {
              latitude: 55.847258,
              longitude: -4.424616,
            },
          },
        }
      },
      phone: '1234567890',
      email: 'hello@estateagent.com',
      website: 'https://www.estateagent.com',
      logo: {
        create: {
          url: 'https://mr1.homeflow-assets.co.uk/files/site_asset/image/4957/6595/_x_/Allen_Harris.png',
          caption: 'Estate Agent 1 Logo',
        }
      },
      backgroundColor: '#FFFFFF',
      textColor: '#000000',
      description: 'Estate Agent 1 is a well established estate agent in Paisley. We have a wide range of properties available for sale and rent.',
      properties: [{
        create: {
          title: '2 Bedroom Flat',
          address: {
            create: {
              line1: '1 Main Street',
              line2: 'Paisley',
              city: 'Glasgow',
              state: 'Renfrewshire',
              postcode: 'PA1 1AA',
              coordinates: {
                create: {
                  latitude: 55.847258,
                  longitude: -4.424616,
                },
              },
            }
          },
          downloads: {
            create: {
              homeReport: {
                create: {
                  url: 'https://www.homeflow.co.uk/property/1/home-report',
                  caption: 'Home Report',
                }
              },
              epcCertificate: {
                create: {
                  url: 'https://www.homeflow.co.uk/property/1/epc',
                  caption: 'EPC Certificate',
                }
              },
              brochures: {
                create: {
                  url: 'https://www.homeflow.co.uk/property/1/brochure',
                  caption: 'Brochure',
                }
              },
            }
          },
          estateAgent: estateAgent1,
          media: {
            create: {
              images: {
                create: [
                  {
                    url: 'http://via.placeholder.com/300x205',
                    caption: 'Property Image 1',
                  },
                  {
                    url: 'http://via.placeholder.com/300x205',
                    caption: 'Property Image 2',
                  },
                  {
                    url: 'http://via.placeholder.com/300x205',
                    caption: 'Property Image 3',
                  },
                ]
              },
              videos: {
                create: [
                  {
                    url: 'https://www.youtube.com/watch?v=12345',
                    caption: 'Property Video 1',
                  },
                  {
                    url: 'https://www.youtube.com/watch?v=67890',
                    caption: 'Property Video 2',
                  },
                ]
              },
            },
            floorplans: {
              create: [
                {
                  url: 'http://via.placeholder.com/300x205',
                  caption: 'Floorplan 1',
                },
                {
                  url: 'http://via.placeholder.com/300x205',
                  caption: 'Floorplan 2',
                },
              ]
            },
            virtualTours: {
              create: [
                {
                  url: 'https://www.360.com/property/1',
                  caption: 'Virtual Tour 1',
                },
                {
                  url: 'https://www.360.com/property/2',
                  caption: 'Virtual Tour 2',
                },
              ]
            },
            thumbnail: {
              create: {
                url: 'http://via.placeholder.com/300x205',
                caption: 'Thumbnail',
              }
            },
          },
          nearby: {
            create: [
              {
                name: 'School',
                distance: 0.5,
              },
              {
                name: 'Supermarket',
                distance: 0.2,
              },
              {
                name: 'Train Station',
                distance: 0.8,
              },
            ]
          },
          priceInformation: {
            create: {
              price: 150000.00,
              priceOption: 'Offers Over',
            }
          },
          propertyInformation: {
            create: {
              rooms: [{
                create: {
                  name: 'Living Room',
                  dimensions: '4.5m x 3.5m',
                  features: ['Hardwood Flooring', 'Double Glazing'],
                  description: 'Spacious living room with large windows.',
                }
              },{
                create: {
                name: 'Kitchen',
                dimensions: '3.5m x 3.0m',
                features: ['Integrated Appliances', 'Tiled Flooring'],
                description: 'Modern kitchen with integrated appliances.',
              },
            }],
            bedroomCount: 2,
            bathroomCount: 1,
            receptionRoomCount: 1,
            propertyType: 'Flat',
            councilTaxBand: 'B',
            energyPerformanceRating: {
              create: {
                currentRating: 'C',
                potentialRating: 'B',
                currentEnvironmentalRating: 'C',
                potentialEnvironmentalRating: 'B',
              }
            },
            propertyHistory: "This property was built in 2000 and has been well maintained by the current owners. The property is in a great location with easy access to local amenities and transport links.",
            propertyTenure: 'Freehold',
            propertyAge: 'Modern',
            propertyCondition: 'Good',
            propertyKeyFeatures: ['Modern Kitchen', 'Spacious Living Room', 'Double Glazing', 'Gas Central Heating'],
            propertyTags: ['New', 'Featured'],
            propertyStyle: 'Modern',
            additionalInformation: 'This property is in a great location with easy access to local amenities and transport links.',
            summary: 'This is a spacious 2 bedroom flat in Paisley. The property is in a great location with easy access to local amenities and transport links.',
            floorArea: 75.5,
            }
          },
          usersWhoBookmarkedIds: [],
          usersWhoBookmarked: [],
        }
      }]
    }
  });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

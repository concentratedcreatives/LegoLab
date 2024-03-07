const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('Category', 'categories');
    await cleanDB('Product', 'products');
    await cleanDB('User', 'users');

    const categories = await Category.insertMany([
        {
            name: 'Star Wars',
            image: ''
        },
        {
            name: 'Marvel',
            image: ''
        },
        {
            name: 'Harry Potter',
            image: ''
        },
        {
            name: 'DC',
            image: ''
        },
        {
            name: 'Dune',
            image: ''
        },
        {
            name: 'Other',
            image: 'otherlego.jpg'
        }
    ]);

    console.log('categories seeded');

    const products = await Product.insertMany([
        {
            name: 'Avengers Tower',
            description:
                'Capture the heroic style and scale of the most iconic building in the Avengers Universe with the 5,201-piece Avengers Tower. Standing over 35.5 in. (90 cm) tall, this monumental set is more than just an impressive display piece. Its filled with ways to replay Infinity Saga battles alongside an all-star cast of 31 figures.',
            image: 'avengers-tower.jpg',
            category: categories[1]._id,
            price: 499.99,
            quantity: 50
        },
        {
            name: 'Gringotts™ Wizarding Bank: Collectors Edition',
            description:
                'From the opulent foyer and mezzanine floor with a safe in the wall where Hagrids secret package is kept, to a spiraling vault cart track with a mechanism that stops the cart at each of 3 underground vaults, The Gringotts™ Wizarding Bank: Collectors Edition is indeed a treasure to behold. Stack the two models with the Ukrainian Ironbelly dragon perched on top of the bank to complete a magical, spectacular centerpiece.',
            image: 'gringotts.jpg',
            category: categories[2]._id,
            price: 429.99,
            quantity: 50
        },
        {
            name: 'Daily Bugle',
            category: categories[1]._id,
            description:
                'Measuring over 32 in. (82 cm) high, this 3,772-piece recreation of the Daily Bugle office block provides a towering backdrop for an all-star cast of Marvel heroes and villains, many new to this set! The building is filled with authentic details, fascinating features and classic comic-book action, from the New York taxi cab outside to the penthouse office of the Bugles Editor in Chief. Marvel enthusiasts will find the model challenging but highly rewarding to build. Once its completed, the removable floors, roof and detachable facades reveal this Marvel tribute for all to admire.',
            image: 'daily bugle.jpg',
            price: 349.99,
            quantity: 20
        },
        {
            name: 'Dune Atreides Royal Ornithopter',
            category: categories[4]._id,
            description:
                'Heres an epic movie-themed gift idea for Dune fans: The LEGO® Icons Dune Atreides Royal Ornithopter (10327) building set for adults. Treat your favorite movie-lover or take quality time out to construct a meticulously detailed replica model of the legendary House Atreides aircraft. This premium- quality replica features fold - out, flappable wings, deployable landing gear and an opening cockpit.The set also includes 8 iconic characters from the movie: Paul Atreides, Lady Jessica, Gurney Halleck, Chani, Leto Atreides, Liet Kynes, Duncan Idaho and Baron Harkonnen in his long robe.',
            image: 'Dune Atreides.jpg',
            price: 164.99,
            quantity: 50
        },
        {
            name: 'PAC-MAN Arcade',
            category: categories[5]._id,
            description:
                'This LEGO replica is loaded with retro design details and fun features, including a 4-way joystick and an illuminating coin slot. Turn the handle to activate a mechanical maze that simulates the classic chase between your favorite characters or open the back panel to view the mechanical elements. There’s even a 1980s arcade scene to build, complete with a gaming minifigure and a display case with rotatable PAC-MAN, BLINKY and CLYDE figures.',
            image: 'PAC-MAN Arcade.webp',
            price: 269.99,
            quantity: 100
        },
        {
            name: 'Batmobile™ Tumbler',
            category: categories[3]._id,
            description:
                'The ultimate, armored crime-fighting machine! The impressive build- and - display Tumbler from the Dark Knight™ trilogy of Batman movies features an opening roof, which provides access to the driver and passenger seats and control panel.Batman and The Joker™ minifigures are included with a stand.With a sturdy base to display the finished model at its best, your recreation of the Tumbler will provide pleasure long after the hands - on work has been completed.',
            image: 'Batmobile Tumbler.jpg',
            price: 399.99,
            quantity: 30
        },
        {
            name: 'Clayface™ Splat Attack',
            category: categories[3]._id,
            description:
                'Team up with Batman™ to take on Clayface™ and free Mayor McCaskill from the clay prison in THE LEGO® BATMAN MOVIE: Clayface Splat Attack set. The highly posable, buildable Clayface figure features three interchangeable hands—two with a six-stud rapid shooter each and one with a clay hammer—while Batman is armed with a Batarang to dial up the role-play conflict. Includes two minifigures and a brick-built figure.',
            image: 'Clayface Splat Attack.jpg',
            price: 399.99,
            quantity: 5
        },
        {
            name: 'Hogwarts™ Castle',
            category: categories[2]._id,
            description:
                'Make the magic come alive at the LEGO® Harry Potter™ 71043 Hogwarts™ Castle! This highly detailed LEGO Harry Potter collectible has over 6,000 pieces and offers a rewarding build experience. It comes packed with highlights from the Harry Potter series, where you will discover towers, turrets, chambers, classrooms, creatures, the Whomping Willow™ and Hagrid´s hut, plus many more iconic features. And with 4 minifigures, 27 microfigures featuring students, professors and statues, plus 5 Dementors, this advanced building set makes the perfect Harry Potter gift.',
            image: 'Hogwarts Castle.jpg',
            price: 469.99,
            quantity: 100
        },
        {
            name: 'Hogwarts Express ™ Train Set with Hogsmeade Station™',
            category: categories[2]._id,
            description: 'Recreate the arrival of new Hogwarts™ students with the LEGO® Harry Potter™ Hogwarts Express™ & Hogsmeade™ Station (76423) toy playset for ages 8 and up. The new-for-June-2023 LEGO brick model of the Hogwarts Express features an engine, coal car, 2 passenger carriages and the Trolley Witch’s confectionery trolley. Drive the train on the tracks or rotate the engine’s front buffer beam for off-track journeys. Hogsmeade Station includes a ticket office, Owl Post, restroom and platform and has manyauthentic details to delight fans.',
            image: 'Hogwarts Express Train Set.jpg',
            price: 129.99,
            quantity: 100
        },
        {
            name: 'LEGO® Titanic',
            category: categories[5]._id,
            description:
                'An authentic scale model. This 1: 200 scale model is designed in 3 sections, faithfully recreating the features of the Titanic.The cross section reveals interior details like the first- class dining room, the grand staircase, one of the boiler rooms and many cabins from the different passenger classes.Bring the story of the Titanic to life by recreating details such as the ship’s bridge, promenade deck, reading lounge, swimming pool and many more.This magnificent model makes a perfect gift for history buffs.',
            image: 'LEGO Titanic.jpg',
            price: 679.99,
            quantity: 100
        },
        {
            name: 'Natural History Museum',
            category: categories[5]._id,
            description:
                'Embark on a fulfilling journey with this cool LEGO set as you craft each detail of the museum and its exhibits, piece by piece. The first floor offers a range of natural history exhibits, while the second floor focuses on space and science artifacts, with a separate display that references classic LEGO sets. The roof is home to the curator’s office and features 2 skylights that allow light to permeate the building. The set also includes 7 minifigures for storytelling and display.',
            image: 'Natural History Museum.jpg',
            price: 299.99,
            quantity: 75
        },
        {
            name: 'Millennium Falcon™',
            category: categories[0]._id,
            description:
                'Welcome to the largest, most detailed LEGO® Star Wars Millennium Falcon model we’ve ever created—in fact, with 7,500 pieces it’s one of our biggest LEGO models, period! This amazing LEGO interpretation of Han Solo’s unforgettable Corellian freighter has all the details that Star Wars fans of any age could wish for, including intricate exterior detailing, upper and lower quad laser cannons, landing legs, lowering boarding ramp and a 4-minifigure cockpit with detachable canopy. Remove individual hull plates to reveal the highly detailed main hold, rear compartment and gunnery station. This amazing model also features interchangeable sensor dishes and crew, so you decide whether to play out classic LEGO Star Wars adventures with Han, Leia, Chewbacca and C-3PO, or enter the world of Episode VII and VIII with older Han, Rey, Finn and BB-8!',
            image: 'Millennium Falcon.jpg',
            price: 849.99,
            quantity: 50
        },
        {
            name: 'Mos Eisley Cantina™',
            category: categories[0]._id,
            description:
                'Enjoy quality me-time and relive iconic Star Wars: A New Hope moments with the awesome LEGO® Star Wars™ Mos Eisley Cantina (75290) construction model for display. This 3,187-piece Master Builder Series set features the Cantina with lots of authentic details to delight fans, plus attachable buildings to recreate a Mos Eisley city scene.',
            image: 'Mos Eisley Cantina.jpg',
            price: 399.99,
            quantity: 600
        }
    ]);

    console.log('products seeded');

    await User.create({
        firstName: 'Quinn',
        lastName: 'Roth',
        email: 'quinn@testmail.com',
        password: 'password12345',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});
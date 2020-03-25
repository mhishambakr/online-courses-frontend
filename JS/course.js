var courseApp = angular.module('courseApp', ['ui.bootstrap', 'seeMoreFilter', 'ngSanitize']);

courseApp.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
});

courseApp.controller('courseCtrl', ['$scope', 'filterFilter', function ($scope, filterFilter) {
    $scope.num =1;
    $scope.courses = [
        {
            id: 1,
            name: 'Data Structure',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 1',
            price: 100,
            points: 100,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 2,
            name: 'Django',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 2',
            price: 100,
            points: 30,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 3,
            name: 'Adonis JS',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 4',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 4,
            name: 'Angular JS',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 4',
            price: 100,
            points: 20,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 5,
            name: 'React',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 3',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 6,
            name: 'Laravel',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 2',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 7,
            name: 'Course 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 1',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 8,
            name: 'Course 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 1',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 9,
            name: 'Course 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 2',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 10,
            name: 'Course 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 3',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 11,
            name: 'Course 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 4',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 12,
            name: 'Course 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 2',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 13,
            name: 'Course 7',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 2',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 14,
            name: 'Course 8',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 4',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 15,
            name: 'Course 9',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 4',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 16,
            name: 'Course 10',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 3',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 17,
            name: 'Course 11',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 3',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 18,
            name: 'Course 12',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 3',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 19,
            name: 'Course 13',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 4',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 20,
            name: 'Course 14',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 2',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 21,
            name: 'Course 15',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 2',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 22,
            name: 'Course 16',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 1',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 23,
            name: 'Course 17',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 1',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 24,
            name: 'Course 18',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 1',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        },
        {
            id: 25,
            name: 'Course 19',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea fugit tempore error, tenetur adipisci hic voluptas sapiente distinctio, ducimus et facilis! Ipsam aliquid porro delectus facilis similique, fuga atque!Corrupti nemo alias repellat id libero at autem aliquid dolore, sequi sunt beatae numquam, culpa dolorum illo cum? Ex laudantium praesentium assumenda, quidem maiores incidunt illum voluptatum maxime commodi fuga!Id, inventore. Molestias obcaecati culpa nemo reprehenderit sequi praesentium quos laboriosam voluptas blanditiis hic autem temporibus rem dignissimos nobis molestiae porro ipsam est, cumque aut et tempora quia inventore! Veniam. Voluptate, voluptatem. Adipisci possimus qui, iusto doloremque consectetur commodi neque quisquam fuga earum maiores dolor magnam, quos accusamus corporis sint officiis omnis ad, consequatur voluptatem? Perferendis amet quos inventore expedita? Sint animi rem, reiciendis corporis quae blanditiis tempore qui nisi repellat, velit ipsa ab eum! Iste tempore, mollitia accusantium voluptas odio placeat nemo maiores, sit corporis, repudiandae sapiente ipsam. Amet.',
            category: 'category 3',
            price: 100,
            points: 50,
            image: 'images/course.png',
            media: 'media',
            registered: 10
        }
    ];

    $scope.categories = ['category 1', 'category 2', 'category 3', 'category 4'];
    
    $("document").ready(function(){
        $(".btn_cart").click(function () {
            $(this).html('<i class="fas fa-check"></i> Added');
        });        
    });


    $scope.search = {};

    $scope.resetFilters = function () {
        $scope.search = {};
    };

    // pagination controls
    $scope.currentPage = 1;
    $scope.totalCourses = $scope.courses.length;
    $scope.entryLimit = 8;
    $scope.noOfPages = Math.ceil($scope.totalCourses / $scope.entryLimit);


    $scope.$watch('search', function (newVal, oldVal) {
        $scope.filtered = filterFilter($scope.courses, newVal);
        $scope.totalCourses = $scope.filtered.length;
        $scope.noOfPages = Math.ceil($scope.totalCourses / $scope.entryLimit);
        $scope.currentPage = 1;
    }, true);
}]);



angular.bootstrap(document.getElementById("courseView1"), ['courseApp']);
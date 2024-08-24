import { Post } from "./common/types/Post";

const timeout = 500

const generateRandomId = () => {
    return Math.floor(Math.random() * 1000000000)
}

const getFakePosts = (size: number) => {
    return new Promise<{ posts: Post[] }>((resolve) => {
        setTimeout(() => {
            const totalPosts = FAKE_POSTS.length
            const startIndex = Math.floor(Math.random() * Math.max(totalPosts - size, 0))
            const posts : Post[] = FAKE_POSTS.slice(startIndex, startIndex + size).map(post => ({
                ...post,
                id: generateRandomId()
            }))
            resolve({ posts })
        }, timeout)
    })
}

export default getFakePosts

export const FAKE_POSTS : Post[] = [
    {
        title: 'This is my mind when I am actually calm for once',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/originals/1e/b4/9d/1eb49dd34d176a4350e47776ee2b20aa.gif'
    },
    {
        title: 'Water is so hard to draw, let alone animate. I love the shine and style of they did it!',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/originals/ab/eb/3a/abeb3a2030882a1bf12225d23701ee5b.gif'
    },
    {
        title: 'Cuteness overload <3',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/originals/ed/23/9d/ed239ddc0e23afd424de14db792c6bf8.gif'
    },
    {
        title: '‟Mỗi người đều có cách sống của riêng mình, chúng ta không cần phải ngưỡng mộ cuộc sống của người khác.”',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/originals/69/23/d0/6923d08d5eb5d43a7172a9b747fb3587.gif'
    },
    {
        title: 'Awwwwww so cute 😚',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/originals/5d/d3/89/5dd389c36a4521e882928eac7ed57d22.jpg'
    },
    {
        title: 'I can\'t explain why I find this that cool... but I definitely do 🤔',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/564x/ba/c5/19/bac519be675a67981f046fa721d05809.jpg'
    },
    {
        title: 'Good one',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/564x/e5/66/84/e56684d564b3f6acec2b41508773f958.jpg'
    },
    {
        title: 'Maxwell is awngwy (angry)🙃',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/564x/d2/83/c2/d283c21ab422417da77f03474e15ba49.jpg'
    },
    {
        title: 'Chilling...',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/originals/42/96/f3/4296f3d393f8727ab082dfb687fe598f.gif'
    },
    {
        title: '마루밑 아리에티',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/originals/7c/b0/f6/7cb0f6a884078a4bacf5b42b8bd6eb16.gif'
    },
    {
        title: 'BATENDO NO COMPUTADOR!!!',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/originals/30/40/e7/3040e7c869a391e1326b371b2bd41d51.gif'
    },
    {
        title: 'The Art of Animation',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/564x/89/c5/f1/89c5f1db4ca343da55e1ba3dc1e77681.jpg'
    },
    {
        title: 'What is the name of this art style? I love it!',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/564x/64/2f/c4/642fc46b31c681b0da36dbbbcf28076d.jpg'
    },
    {
        title: 'Love it ❤️',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/originals/5e/0c/c4/5e0cc44666c0d0d8f342df98ca8a088b.gif'
    },
    {
        title: 'This It could very well be crowley plants',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/564x/b2/51/57/b251576b95b7a118838bfdeba934ae33.jpg'
    },
    {
        title: 'Street art aesthetic',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/564x/8f/42/04/8f4204c60401061738b618e07999a8d4.jpg'
    },
    {
        title: 'Dude it looks like and overgrown Bluey streetlight',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/564x/54/1a/3f/541a3f75945b7d4c0ffe5602aacee64e.jpg'
    },
    {
        title: 'Lara',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/736x/1d/a1/c1/1da1c150c0825e1fd9bca56f687ac9d1.jpg'
    },
    {
        title: 'Totoro vibes',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/564x/82/77/ba/8277baa430011e4217de10cf4877d490.jpg'
    },
    {
        title: 'Flourishing',
        createdAt: '24-08-2024',
        image: 'https://i.pinimg.com/564x/2a/11/85/2a1185f65c8da23b52710c48e0e84436.jpg'
    },
]

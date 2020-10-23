# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

lasa = User.create({
    email: "lasa@demo.demo", 
    password: "123456", 
    first_name: "Lasa", 
    last_name: "Gna", 
    bio: "I love bird watching and playing the saxophone with my buddies", 
    birthday: "9/13/2000", 
    location: "San Diego, CA",
    gender: "Male",
    work: "Interior Designer",
    school: "Crestmoor Elementary"
})
lasa.cover_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_4003.JPG'), filename: 'lasa_cover.jpg')
lasa.profile_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_4858.jpg'), filename: 'lasa_pic.jpg')

jo = User.create({
    email: "jo@demo.demo", 
    password: "123456", 
    first_name: "Jo", 
    last_name: "Wong", 
    bio: "I like teaching kids and petting dogs", 
    birthday: "2/13/1990", 
    location: "San Francisco, CA",
    gender: "Female",
    work: "3rd Grade Teacher",
    school: "Lincoln Elementary"
})
jo.cover_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_4783.jpg'), filename: 'jo_cover.jpg')
jo.profile_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_5206.jpg'), filename: 'jo_pic.jpg')
mac = User.create({
    email: "mac@demo.demo",
    password: "123456",
    first_name: "Mac", 
    last_name: "Chang", 
    bio: "Check me out on twitch!", 
    birthday: "8/9/1990", 
    location: "Los Angeles, CA",
    gender: "Male",
    work: "Photographer",
    school: "Harvard"
})
mac.profile_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_8718.JPG'), filename: 'mac_pic.jpg')
mac.cover_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_8975.JPG'), filename: 'mac_cover.jpg')

enawk = User.create({
    email: "enawk@demo.demo", 
    password: "123456", 
    first_name: "Enawk", 
    last_name: "Chow", 
    bio: "If they're not Jordans, I don't want them near my feet", 
    birthday: "7/11/1999", 
    location: "San Francisco, CA",
    gender: "Male",
    work: "Product Designer at Jelly Belly",
    school: "University of California, Irvine"
})
enawk.cover_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_1481.jpg'), filename: 'enawk_cover.jpg')
enawk.profile_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_4307.jpg'), filename: 'enawk_pic.jpg')

kody = User.create({
    email: "kody@demo.demo", 
    password: "123456", 
    first_name: "Kody", 
    last_name: "Fujikawa", 
    bio: "I like granite more than sandstone", 
    birthday: "4/15/1997", 
    location: "San Jose, CA",
    gender: "Male",
    work: "Janitor at Western Digital",
    school: "College of San Mateo"
})
kody.cover_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_4565.jpg'), filename: 'kody_cover.jpg')
kody.profile_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_4634.jpg'), filename: 'kody_pic.jpb')

dan = User.create({
    email: "dan@demo.demo", 
    password: "123456", 
    first_name: "Dan", 
    last_name: "Bran", 
    bio: "Its not a crime for your name to rhyme!", 
    birthday: "1/1/1990", 
    location: "Burlingame, CA",
    gender: "Male",
    work: "Professional Flutist",
    school: "University of California, Riverside"
})
dan_pic = open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_0641.JPG')
dan.profile_photo.attach(io: dan_pic, filename: 'dan_pic.jpg')
dan.cover_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_7464.JPG'), filename: 'dan_cover.jpg')
becky = User.create({
    email: "becky@demo.demo", 
    password: "123456", 
    first_name: "Becky", 
    last_name: "Long", 
    bio: "Oatmeal doesn't belong on pizza!", 
    birthday: "3/11/1950", 
    location: "New York City, New York",
    gender: "Female",
    work: "Software Engineer",
    school: "University of California, San Diego"
})
becky.profile_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_7446.JPG'), filename: 'becky_pic.jpg')
becky.cover_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_7691.JPG'), filename: 'becky_cover.jpg')
jawsh = User.create({
    email: "jawsh@demo.demo", 
    password: "123456", 
    first_name: "Jawsh", 
    last_name: "Bolognese", 
    bio: "No you may not wrap my hair around ears", 
    birthday: "7/7/1997", 
    location: "Santa Cruz, CA",
    gender: "Male",
    work: "Student",
    school: "University of California, Davis"
})
jawsh_pic = open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/117955974_10217360598187290_8523501595194673681_o.jpg')
jawsh.profile_photo.attach(io: jawsh_pic, filename: 'jawsh_pic.jpg')
jawsh.cover_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_8701.JPG'), filename: 'jawsh_cover.jpg')
brit = User.create({
    email: "brit@demo.demo", 
    password: "123456", 
    first_name: "Brit", 
    last_name: "Chang", 
    bio: "I like collecting beanie babies and color coordinating them", 
    birthday: "10/28/1992", 
    location: "Cupertino, CA",
    gender: "Female",
    work: "Ramen Chef",
    school: "San Jose State University"
})
brit_pic = open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/56350770_2405512066128515_7864173582417395712_o.jpg')
brit.profile_photo.attach(io: brit_pic, filename: 'brit_pic.jpg')
brit.cover_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_8670.JPG'), filename: 'brit_cover.jpg')
jana = User.create({
    email: "jaba@demo.demo", 
    password: "123456", 
    first_name: "Jana", 
    last_name: "Padablo", 
    bio: "Fishing! Hunting!", 
    birthday: "11/29/1992", 
    location: "Marin, CA",
    gender: "Female",
    work: "Botanist",
    school: "Cal Poly, Pamona"
})
jana.profile_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_1902.JPG'), filename: 'jana_pic.jpg')
jana.cover_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_8496.JPG'), filename: 'jana_cover.jpg')
yatu = User.create({
    email: "yatu@demo.demo", 
    password: "123456", 
    first_name: "Yatu", 
    last_name: "Yumumatu", 
    bio: "I love to surf and watch people drink neopolitan milkshakes!", 
    birthday: "8/21/1992", 
    location: "Tokyo, Japan",
    gender: "Male",
    work: "Make-up Artist",
    school: "Groovy Kids"
})
yatu.cover_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_9065.JPG'), filename: 'yatu_cover.jpg')
yatu.profile_photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_9148.JPG'), filename: 'yatu_pic.jpg')

p1 = Post.create({
    body: "Caught a beautiful sunrise in Bryce Canyon!",
    author_id:  jana.id,
    wall_id: jana.id
})
p1.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/9629655B-12B3-4C20-99D2-F49887AEA1AE.jpg'), filename: 'p1.jpg')

p2 = Post.create({
    body: "Taken right before a rattlesnake bit me!",
    author_id: jawsh.id,
    wall_id: jawsh.id 
})
p2.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_0817.jpg'), filename: 'p2.jpg')

p3 = Post.create({
    body: "Carrots for power",
    author_id: enawk.id,
    wall_id: enawk.id 
})

p4 = Post.create({
    body: "What a day... I can't wait to get home and watch some anime",
    author_id: becky.id,
    wall_id: becky.id 
})

c1 = Comment.create({
    body: "Let's do a marathon together!",
    author_id: enawk.id,
    post_id: p4.id 
})

l1 = Like.create({
    likeable_id: c1.id,
    likeable_type: "Comment",
    user_id: becky.id 
})

p5 = Post.create({
    body: "These posts won't write themselves!",
    author_id: mac.id,
    wall_id: yatu.id
})

l2 = Like.create({
    likeable_id: p5.id,
    likeable_type: "Post",
    user_id: yatu.id 
})

l3 = Like.create({
    likeable_id: p5.id,
    likeable_type: "Post",
    user_id: kody.id 
})

p6 = Post.create({
    body: "Oceanside charcuterie... sand, cheese, and crackers!",
    author_id: jo.id,
    wall_id: jo.id 
})

p7 = Post.create({
    body: "Looks ABSOLUTELY delicious. I can't WAIT to dig in",
    author_id: dan.id,
    wall_id:  dan.id
})
p7.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_1346.jpg'), filename: 'p7.jpg')

l4 = Like.create({
    likeable_id: p7.id,
    likeable_type: "Post",
    user_id: jana.id
})

l5 = Like.create({
    likeable_id: p7.id,
    likeable_type: "Post",
    user_id: enawk.id
})

l6 = Like.create({
    likeable_id: p7.id,
    likeable_type: "Post",
    user_id: lasa.id
})

c2 = Comment.create({
    body: "Dan... you've outdone yourself once again",
    author_id: brit.id,
    post_id: p7 
})

l7 = Like.create({
    likeable_id: c2.id,
    likeable_type: "Comment",
    user_id: jawsh.id 
})


p8 = Post.create({
    body: "A tribute to my favorite Disney movie",
    author_id: enawk.id,
    wall_id:  enawk.id
})

l8 = Like.create({
    likeable_id: p8.id,
    likeable_type: "Post",
    user_id: jo.id
})

p9 = Post.create({
    body: "Pie for supply",
    author_id: yatu.id,
    wall_id: lasa.id 
})

p9.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_2981.JPG'), filename: 'p9.jpg')

l9 = Like.create({
    likeable_id: p9.id,
    likeable_type: "Post",
    user_id: lasa.id
})

p10 = Post.create({
    body: "Lowering off a San Diego classic!",
    author_id: lasa.id,
    wall_id:  lasa.id
})

p10.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_3050.JPG'), filename: 'p10.jpg')

l10 = Like.create({
    likeable_id: p10.id,
    likeable_type: "Post",
    user_id: jo.id 
})

l11 = Like.create({
    likeable_id: p10.id,
    likeable_type: "Post",
    user_id: jawsh.id 
})

l12 = Like.create({
    likeable_id: p10.id,
    likeable_type: "Post",
    user_id: mac.id 
})

l13 = Like.create({
    likeable_id: p10.id,
    likeable_type: "Post",
    user_id: becky.id 
})

c3 = Comment.create({
    body: "Looks soft to me",
    author_id: brit.id,
    post_id: p10.id
})

l13 = Like.create({
    likeable_id: c3.id,
    likeable_type: "Comment",
    user_id: becky.id 
})

l14 = Like.create({
    likeable_id: c3.id,
    likeable_type: "Comment",
    user_id: yatu.id 
})

l15 = Like.create({
    likeable_id: c3.id,
    likeable_type: "Comment",
    user_id: jana.id 
})

p11 = Post.create({
    body: "dog... i saw it",
    author_id: jo.id,
    wall_id:  lasa.id
})

p11.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_3403.JPG'), filename: 'p11.jpg')

l16 = Like.create({
    likeable_id: p11.id,
    likeable_type: "Post",
    user_id: mac.id 
})

l16 = Like.create({
    likeable_id: p11.id,
    likeable_type: "Post",
    user_id: kody.id 
})

l17 = Like.create({
    likeable_id: p11.id,
    likeable_type: "Post",
    user_id: dan.id 
})

p12 = Post.create({
    body: 'Absolutely destroyingt the proj',
    author_id: enawk.id,
    wall_id: enawk.id 
})

p12.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_3417.JPG'), filename: 'p12.jpg')

c4 = Comment.create({
    body: "I think I saw you while driving past",
    author_id: jawsh.id,
    post_id: p12.id
})

c5 = Comment.create({
    body: "Crushing it muchacho",
    author_id: becky.id,
    post_id: p12.id
})

l18 = Like.create({
    likeable_id: c5.id,
    likeable_type: "Comment",
    user_id: enawk.id 
})

c6 = Comment.create({
    body: "Cheers thanks!",
    author_id: enawk.id,
    post_id: p12.id
})

p13 = Post.create({
    body: "Highlight of my trip",
    author_id: lasa.id,
    wall_id:  lasa.id
})
p13.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_7458.JPG'), filename: 'p13.jpg')

c7 = Comment.create({
    body: "Thank you for sharing",
    author_id: becky.id,
    post_id: p13.id
})

c8 = Comment.create({
    body: "I wish there was a button I could click to show that I laughed",
    author_id: mac.id,
    post_id: p13.id
})

c9 = Comment.create({
    body: "Yeah a sad button would be real cool too",
    author_id: enawk.id,
    post_id: p13.id
})

l19 = Like.create({
    likeable_id: c9.id,
    likeable_type: "Comment",
    user_id: jana.id
})

p14 = Post.create({
    body: "A poor decision",
    author_id: dan.id,
    wall_id: lasa.id
})
p14.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_8589.JPG'), filename: 'p14.jpg')

c10 = Comment.create({
    body: "Yeah I've found that 50 nuggets usually requires a table",
    author_id: jawsh.id,
    post_id: p14.id
})

c11 = Comment.create({
    body: "Not getting ranch?",
    author_id: jo.id,
    post_id: p14.id
})

l20 = Like.create({
    likeable_id: p14.id,
    likeable_type: "Post",
    user_id: kody.id
})

l21 = Like.create({
    likeable_id: p14.id,
    likeable_type: "Post",
    user_id: mac.id
})

p15 = Post.create({
    body: "Thought 2020 couldn't get any worse",
    author_id: jawsh.id,
    wall_id:  jawsh.id
})
p15.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_8675.JPG'), filename: 'p15.jpg')

c12 = Comment.create({
    body: "I wanna show my support, but it doesn't seem right to like this... Still waiting on that sad button",
    author_id: enawk.id,
    post_id: p15.id
})

c13 = Comment.create({
    body: "Totally agree. I might just leave this site for BlueBird",
    author_id: becky.id,
    post_id: p15.id
})

p16 = Post.create({
    body: "😍",
    author_id: jo.id,
    wall_id: jo.id 
})
p16.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_8766.JPG'), filename: 'p16.jpg')

l22 = Like.create({
    likeable_id: p16.id,
    likeable_type: "Post",
    user_id: lasa.id
})

l24 = Like.create({
    likeable_id: p16.id,
    likeable_type: "Post",
    user_id: brit.id
})

l25 = Like.create({
    likeable_id: p16.id,
    likeable_type: "Post",
    user_id: dan.id
})

p17 = Post.create({
    body: "Felt some heavy inspiration in this room... #spreadmywings #andfly",
    author_id: dan.id,
    wall_id: dan.id
})
p17.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_9382.JPG'), filename: 'p17.jpg')

p18 = Post.create({
    body: "Last day in this apartment",
    author_id: yatu.id,
    wall_id:  yatu.id
})
p18.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_9438.JPG'), filename: 'p18.jpg')

l26 = Like.create({
    likeable_id: p18.id,
    likeable_type: "Post",
    user_id: jo.id
})

l27 = Like.create({
    likeable_id: p18.id,
    likeable_type: "Post",
    user_id: jana.id
})

l28 = Like.create({
    likeable_id: p18.id,
    likeable_type: "Post",
    user_id: dan.id
})

l29 = Like.create({
    likeable_id: p18.id,
    likeable_type: "Post",
    user_id: lasa.id
})

l30 = Like.create({
    likeable_id: p18.id,
    likeable_type: "Post",
    user_id: kody.id
})

p19 = Post.create({
    body: "Best coffee of my life! Sure beats water!! ",
    author_id: lasa.id,
    wall_id:  lasa.id
})
p19.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_9596.JPG'), filename: 'p19.jpg')
l31 = Like.create({
    likeable_id: p19.id,
    likeable_type: "Post",
    user_id: becky.id
})

c14 = Comment.create({
    body: "You're not tricking anyone with that diet coke",
    author_id: jawsh.id,
    post_id: p19 
})

p20 = Post.create({
    body: "Chalking up for a Japan classic",
    author_id: enawk.id,
    wall_id: kody.id
})

p20.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/IMG_9726.JPG'), filename: 'p20.jpg')

l32 = Like.create({
    likeable_id: p20.id,
    likeable_type: "Post",
    user_id: kody.id
})

l33 = Like.create({
    likeable_id: p20.id,
    likeable_type: "Post",
    user_id: dan.id
})

l34 = Like.create({
    likeable_id: p20.id,
    likeable_type: "Post",
    user_id: mac.id
})

p21 = Post.create({
    body: "Third pitch on dark shadows!",
    author_id: enawk.id,
    wall_id:  enawk.id
})
p21.photo.attach(io: open('https://facebewk-seeds.s3-us-west-1.amazonaws.com/dark+shadows+pitch+3-3.jpg'), filename: 'p21.jpg')

l35 = Like.create({
    likeable_id: p22.id,
    likeable_type: "Post",
    user_id: brit.id
})

c15 = Comment.create({
    body: "Sure seems high!",
    author_id: jana.id,
    post_id: p22.id
})

fr1 = FriendRequest.create({
    requester_id: becky.id, 
    requested_id: lasa.id
})

fr2 = FriendRequest.create({
    requester_id: dan.id,
    requested_id: lasa.id
})

f1 = Friendship.create({
    user_id: lasa.id,
    friend_id: jo.id 
})
f2 = Friendship.create({
    user_id: jo.id,
    friend_id: lasa.id 
})
f3 = Friendship.create({
    user_id: lasa.id,
    friend_id: mac.id 
})
f4 = Friendship.create({
    user_id: mac.id,
    friend_id: lasa.id 
})

f5 = Friendship.create({
    user_id: lasa.id,
    friend_id: kody.id 
})
f6 = Friendship.create({
    user_id: kody.id,
    friend_id: lasa.id 
})
f7 = Friendship.create({
    user_id: lasa.id,
    friend_id: enawk.id 
})
f8 = Friendship.create({
    user_id: enawk.id,
    friend_id: lasa.id 
})

# f9 = Friendship.create({
#     user_id: lasa.id,
#     friend_id: dan.id 
# })
# f10 = Friendship.create({
#     user_id: dan.id,
#     friend_id: lasa.id 
# })
# f11 = Friendship.create({
#     user_id: lasa.id,
#     friend_id: becky.id 
# })
# f12 = Friendship.create({
#     user_id: becky.id,
#     friend_id: lasa.id 
# })

f13 = Friendship.create({
    user_id: lasa.id,
    friend_id: jawsh.id 
})
f14 = Friendship.create({
    user_id: jawsh.id,
    friend_id: lasa.id 
})
f15 = Friendship.create({
    user_id: lasa.id,
    friend_id: brit.id 
})
f16 = Friendship.create({
    user_id: brit.id,
    friend_id: lasa.id 
})
f17 = Friendship.create({
    user_id: lasa.id,
    friend_id: jana.id 
})
f18 = Friendship.create({
    user_id: jana.id,
    friend_id: lasa.id 
})
f19 = Friendship.create({
    user_id: lasa.id,
    friend_id: yatu.id 
})
f20 = Friendship.create({
    user_id: yatu.id,
    friend_id: lasa.id 
})
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({email: "demo@demo.demo", password: "123456", first_name: "Enawk", last_name: "Chow", bio: "I love bird watching and playing the saxophone with my friends", birthday: "9/13/2000", location: "San Diego, CA"})
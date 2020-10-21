class Friendship < ApplicationRecord
    validates :friend_a, :friend_b, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :friend_a,
        class_name: :User 

    # belongs_to :friend_b,
    #     class_name: :User,
    #     primary_key: :id,
    #     foreign_key: :friend_b
end

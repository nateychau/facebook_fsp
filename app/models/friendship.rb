# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friendship < ApplicationRecord
    validates :user_id, :friend_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User 

    belongs_to :friend,
        class_name: :User,
        primary_key: :id,
        foreign_key: :friend_id

    def corresponding_friendship
        friendship = Friendship.find_by(friend_id: self.user_id, user_id: self.friend_id)
    end


end

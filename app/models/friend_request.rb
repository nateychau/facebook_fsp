# == Schema Information
#
# Table name: friend_requests
#
#  id           :bigint           not null, primary key
#  requester_id :integer          not null
#  requested_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class FriendRequest < ApplicationRecord
    validates :requester_id, :requested_id, presence:true
    validates :requested_id, uniqueness: {scope: :requester_id,
        message: "User already has a pending friend request"}

    belongs_to :requester,
        class_name: :User 
    
    belongs_to :requested,
        class_name: :User
end

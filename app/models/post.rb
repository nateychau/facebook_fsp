# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  body       :text             not null
#  wall_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :author_id, :wall_id, :body, presence:true

    belongs_to :author, 
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :wall,
        primary_key: :id,
        foreign_key: :wall_id,
        class_name: :User

    has_many :comments, dependent: :destroy

end

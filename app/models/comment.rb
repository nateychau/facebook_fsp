# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  body       :text             not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :author_id, :body, :post_id, presence: true

    belongs_to :author, 
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :post

end

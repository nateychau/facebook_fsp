# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  bio             :string
#  birthday        :date
#  location        :string
#  work            :string
#  school          :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  gender          :string
#
class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :first_name, :last_name, :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :email, 'valid_email_2/email': true

    attr_reader :password
    after_initialize :ensure_session_token

    has_one_attached :profile_photo
    has_one_attached :cover_photo

    has_many :authored_posts,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Post

    has_many :wall_posts,
        primary_key: :id,
        foreign_key: :wall_id,
        class_name: :Post

    has_many :comments,
        foreign_key: :author_id

    has_many :outgoing_friend_requests,
        foreign_key: :requester_id,
        primary_key: :id,
        class_name: :FriendRequest

    has_many :received_friend_requests, 
        foreign_key: :requested_id,
        primary_key: :id,
        class_name: :FriendRequest

    has_many :friendships,
        foreign_key: :user_id,
        primary_key: :id,
        class_name: :Friendship

    has_many :friends,
        through: :friendships, 
        source: :friend

    has_many :likes


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token! 
        self.session_token = SecureRandom.urlsafe_base64
        self.save! 
        self.session_token 
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end

class ChangeFriendshipColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :friendships, :friend_a, :user_id 
    rename_column :friendships, :friend_b, :friend_id
  end
end

class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :friend_a, null:false
      t.integer :friend_b, null:false
      t.timestamps
    end
    add_index :friendships, :friend_a
    add_index :friendships, :friend_b
  end
end

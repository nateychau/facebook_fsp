class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :requester_id, null:false
      t.integer :requested_id, null:false 

      t.timestamps
    end
    add_index :friend_requests, [:requested_id, :requester_id], unique:true
  end
end

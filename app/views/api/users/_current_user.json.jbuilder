json.user do 
    json.extract! user, :first_name, :last_name, :email, :id, :bio, :birthday, :location, :work, :school, :gender
    if user.profile_photo.attached?
        json.profile_photo url_for(user.profile_photo)
    else 
        json.profile_photo image_url('default_prof_male.jpg')
    end
    if user.cover_photo.attached?
        json.cover_photo url_for(user.cover_photo)
    else 
        json.cover_photo nil 
    end
end


json.friend_requests do
    user.outgoing_friend_requests.each do |friend_request|
        json.set! friend_request.id do
            json.extract! friend_request, :requester_id, :requested_id, :id, :created_at
        end
    end

    user.received_friend_requests.each do |friend_request|
        json.set! friend_request.id do 
            json.extract! friend_request, :requester_id, :requested_id, :id, :created_at
        end
    end
end

json.friendships do 
    user.friendships.each do |friendship|
        json.set! friendship.id do 
            json.extract! friendship, :user_id, :friend_id, :id, :created_at 
        end
    end
end
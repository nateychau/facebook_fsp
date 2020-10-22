json.user do 
    json.partial! 'api/users/user', user: @user
    if @user.profile_photo.attached?
        json.profile_photo url_for(@user.profile_photo)
    else 
        json.profile_photo image_url('default_prof_male.jpg')
    end
    if @user.cover_photo.attached?
        json.cover_photo url_for(@user.cover_photo)
    else 
        json.cover_photo nil 
    end
end


json.friend_requests do
    @user.outgoing_friend_requests.each do |friend_request|
        json.set! friend_request.id do
            json.partial! 'api/friend_requests/friend_request', friend_request: friend_request
        end
    end

    @user.received_friend_requests.each do |friend_request|
        json.set! friend_request.id do 
            json.partial! 'api/friend_requests/friend_request', friend_request: friend_request
        end
    end
end

json.friendships do 
    @user.friendships.each do |friendship|
        json.set! friendship.id do 
            json.partial! 'api/friendships/friendship', friendship: friendship 
        end
    end
end

# json.likes do 
#     @user.likes.each do |like|
#         json.set! like.id do 
#             json.partial! 'api/likes/like', like: like 
#         end
#     end
# end
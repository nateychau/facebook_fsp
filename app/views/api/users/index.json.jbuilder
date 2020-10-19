@users.each do |user|
    json.set! user.id do 
        json.partial! 'api/users/user', user: user
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
        # json.profile_photo user.profile_photo ? url_for(user.profile_photo) : nil
        # json.cover_photo user.cover_photo ? url_for(user.cover_photo) : nil
    end
end
@posts.each do |post|
    json.posts do
        json.set! post.id do 
            json.partial! 'api/posts/post', post: post
            if post.photo.attached?
                json.photo url_for(post.photo)
            end
        end
    end
    json.comments do 
        post.comments.each do |comment|
            json.set! comment.id do 
                json.partial! 'api/comments/comment', comment: comment
            end
        end
    end
    json.likes do 
        post.likes.each do |like|
            json.set! like.id do 
                json.partial! 'api/likes/like', like: like 
            end
        end
        post.comments.each do |comment|
            comment.likes.each do |like|
                json.set! like.id do 
                    json.partial! 'api/likes/like', like: like
                end
            end
        end
    end
end


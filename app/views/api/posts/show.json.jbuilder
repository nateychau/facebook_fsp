json.partial! 'api/posts/post', post: @post
if @post.photo.attached?
    json.photo url_for(@post.photo)
end
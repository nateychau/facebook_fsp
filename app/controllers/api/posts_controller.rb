class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 400
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post
            @post.destroy
            render :show
        else
            render json:  ['Unable to find post with that ID'], status: 404
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.ful_messages, status: 422
        end
    end

    def index
        #COME BACK TO THIS TO ADD FILTERING 
        if wall_id != 0 
            @posts = Post.where("wall_id = #{wall_id}").order("created_at DESC")
            #UNCOMMENT AFTER ADDING FRIENDS TABLE AND ASSOCIATIONS
        elsif user_id != 0
            current_user = User.find(user_id)
            friend_id_array = current_user.friends.map do |friend|
                friend.id
            end
            friend_id_array << user_id
            @posts = Post.where(author_id: friend_id_array)
        else
            @posts = Post.all
        end 
        render :index
    end

    #don't think i still need this
    def wall_id
        params[:wallId].to_i
    end

    # use userId and wallId as key when calling update filter method in components
    def user_id
        params[:userId].to_i
    end


    def post_params
        params.require(:post).permit(:author_id, :wall_id, :body, :photo)
    end
end

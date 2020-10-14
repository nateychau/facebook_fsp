class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 404
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        @post.destroy
        render :show 
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
        @posts = Post.all 
        render :index
    end


    def post_params
        params.require(:post).permit(:author_id, :wall_id, :body)
    end
end

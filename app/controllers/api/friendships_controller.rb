class Api::FriendshipsController < ApplicationController

    def create
        @friendship = Friendship.new(friendship_params)
        # corresponding_friendship = Friendship.new({friend_a: params[:friend_b], friend_b: params[:friend_a]})
        if @friendship.save
            # corresponding_friendship.save
            render :show
        else 
            render json: @friendship.errors.full_messages, status: 400
        end
    end

    def destroy
        @friendship = Friendship.find_by(id: params[:id])
        # corresponding_friendship = Friendship.where(friend_a: params[:friend_b], friend_b: params[:friend_a])
        if @friendship
            @friendship.destroy
            # corresponding_friendship.destroy
            render :show 
        else 
            render json: ['Unable to find friendship'], status 404 
        end
    end

    def friendship_params
        params.require(:friendship).permit(:friend_a, :friend_b)
    end
end

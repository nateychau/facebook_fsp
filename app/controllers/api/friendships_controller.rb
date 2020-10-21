class Api::FriendshipsController < ApplicationController

    def create
        @friendship = Friendship.new(friendship_params)
        friend_request = FriendRequest.find_by(requested_id: params[:friendship][:user_id], requester_id: params[:friendship][:friend_id])
        corresponding_friendship = Friendship.new({user_id: params[:friendship][:friend_id], friend_id: params[:friendship][:user_id]})
        if @friendship.save
            corresponding_friendship.save
            friend_request.destroy
            render :show
        else 
            render json: @friendship.errors.full_messages, status: 400
        end
    end

    def destroy
        @friendship = Friendship.find_by(id: params[:id])
        corresponding_friendship = @friendship.corresponding_friendship
        if @friendship
            @friendship.destroy
            corresponding_friendship.destroy
            render :show 
        else 
            render json: ['Unable to find friendship'], status: 404 
        end
    end

    def friendship_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end
end

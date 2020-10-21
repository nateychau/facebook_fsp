class Api::FriendRequestsController < ApplicationController

    def create
        @friend_request = FriendRequest.new(friend_request_params)
        if @friend_request.save
            render :show 
        else
            render json: @friend_request.errors.full_messages, status: 400
        end
    end

    def destroy
        @friend_request = FriendRequest.find_by(id: params[:id])
        if @friend_request 
            @friend_request.destroy 
            render :show 
        else
            render json: ['Unable to find friend request'], status: 404
        end
    end


    def friend_request_params 
        params.require(:friend_request).permit(:requester_id, :requested_id)
    end
end

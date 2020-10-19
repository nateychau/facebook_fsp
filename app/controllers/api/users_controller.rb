class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        # @user.profile_photo.attach(io: File.open("https://facebewk-seeds.s3-us-west-1.amazonaws.com/default_prof_male.jpg"), filename: "default_prof_male.jpg")
        # @user.cover_photo.attach(io: File.open("app/assets/images/test_cover.jpg"), filename: "cover_test.jpg")
        if @user.save 
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def show 
        @user = User.find_by(id: params[:id])
        if @user 
            render :show
        else
            render json: ["User does not exist"], status: 404
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user.update(user_params)
            render :show
        else
            render json:@user.errors.full_messages, status: 404
        end
    end

    def index 
        @users = author_id_arr ? User.where({id: author_id_arr}) : User.all
        render :index
    end

    def author_id_arr 
        params[:idArr]
    end

    def user_params 
        params.require(:user).permit(
            :first_name,
            :last_name, 
            :email, 
            :password,
            :bio, 
            :gender,
            :birthday,
            :location, 
            :work,
            :school,
            :profile_photo,
            :cover_photo
        )
    end
end

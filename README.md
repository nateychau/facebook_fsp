# README

# Facebewk 
Facebewk is a functional Facebook clone that allows users to create profiles for themselves, add other users as friends, and create text and image posts on their own walls and friends' walls. Users can view all of their friends' posts in one place on the news feed page, and add likes to posts and comments that they like.

### Live site: [Facebewk](https://facebewk.herokuapp.com/#/)

### Technologies used: 
- Front end
  - Vanilla Javascript
    - Front end functionality
  - jQuery
    - AJAX requests to the back end
  - React
    - Front end structure
  - Redux
    - Front end store 
  - HTML
  - CSS
- Back end
  - Ruby on Rails 
  - PostgreSQL
  
## Features: 

### Friendships
Friendships and friend requests are a core feature of Facebewk, and they were a challenge to implement. For the sake of improving performance when making requests to the back end, each friendship is represented by two corresponding rows in a table - one where user A is the user and user B is the friend, and vice versa. This allows backend requests to be more specific, and helps the front end avoid having to do unnecesarry filtering. Connecting friend requests to friendships was also tricky, as I wanted to avoid leaving friend requests in the database where the users had already become friends. In order to tie them together, I created custom actions in the back end for the friendships controller. When a friend request is accepted, the two corresponding rows for the friendships table is created, and then the outstanding friend request is deleted. 

```ruby 
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
```


### Profiles 
Facebewk is a single page web application, and in order to avoid heavy routing in the front end, I structured profile pages to keep track of, and conditionally render, different profile sections with state. 

```javascript
render(){
    if(this.props.isFetching || !this.props.user){
        return null
    }
    let renderedPage;
    if(this.state.page === 'timeline'){
        renderedPage = <Timeline 
        user={this.props.user} 
        currentUser={this.props.currentUser}/>
    }
    else if(this.state.page === 'about'){
        renderedPage = <About 
        user={this.props.user} 
        currentUser={this.props.currentUser}/> 
    } else if(this.state.page === 'friends'){
        renderedPage = <Friends 
        user={this.props.user} 
        full={true}/>
    }else if(this.state.page === 'photos'){
        renderedPage = <Photos 
        user={this.props.user} 
        full={true}/>
    }
```
....
....
....
```javascript
<div className="profile-nav-links">
    <div 
        className={this.state.page === 'timeline' ? 'active-profile-page' : ''}
        onClick={this.handlePageToRender('timeline')}>
        <p>Timeline</p>
    </div>
    <div 
        className={this.state.page === 'about' ? 'active-profile-page' : ''}
        onClick={this.handlePageToRender('about')}>
        <p>About</p>
    </div>
    <div 
        className={this.state.page === 'friends' ? 'active-profile-page' : ''}
        onClick={this.handlePageToRender('friends')}>
        <p>Friends</p>
    </div>
    <div 
        className={this.state.page === 'photos' ? 'active-profile-page' : ''}
        onClick={this.handlePageToRender('photos')}>
        <p>Photos</p>
    </div>
</div>
```

I also had to decide between fetching all data for profiles up front in a high-level component, or to fetch a smaller amount of meta data, and pass that data down to children components to handle more specific fetching. I decided to go with the second option, as this avoided refetching data that might already be available in the Redux store. 

## Future Plans
- Optimize for mobile (media-queries)
- Messaging functionality
- Notifications for comments and likes 
- Groups 

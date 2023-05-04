# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) (Read) Defines the controller class which runs the routing of the app. All the routes get defined within the controller class
class BlogPostsController < ApplicationController
  def index
    # ---2) (Read) Assigns the action of displaying all blogposts to the @posts instance variable
    @posts = BlogPost.all
  end

  # ---3) (Read) Defines the "show" route which will return a single blog post based on the post ID passed as an argument
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) (Read) Defines the "new" route which is a form to allow the user to input information for creating a new blog post
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) (Create) Assigns the action of creating a blog post and verifies the validity based on the parameters provided in the private section. If the post is valid it will redirect the user to the path of the newly created post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) (Read) Assigns the action of finding a single post based on the ID passed as an argument. This is a form and therefore a read action 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) (Update) Performs an update action on the post that was passed as an argument. If the update results in a valid post then it will redirect the user to the path of the updated post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) (Delete) Redirects the user to the path of all the blog posts. 
      redirect_to blog_posts_path
    end
  end

  # ---9) The private keyword restricts the scope of the methods created afterwards so that they can't be access from just anywhere in the program. This adds protection to prevent additional parameters from being added and possibly allowing injection of harmful code
  private
  def blog_post_params
    # ---10) Defines what paramentes are required and allowed when performing actions related to a post
    params.require(:blog_post).permit(:title, :content)
  end
end

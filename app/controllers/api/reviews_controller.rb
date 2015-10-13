class Api::ReviewsController < ApplicationController

    def index
      @reviews = Review.find_by_corgi_id(params[:reviews][:bike_id])
    end

    def create
      @review = Review.new(review_params)

      if @review.save
        render :show
      else
        render json: @review.errors.full_messages, status: 422
      end
    end

    private

    def review_params
      params.require(:review).permit(:body, :number)
    end
end

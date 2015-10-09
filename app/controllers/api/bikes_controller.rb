class Api::BikesController < ApplicationController
  def index
    @bikes = Bike.in_bounds(params[:bounds])
  end

  def create
    @bike = Bike.new(bike_params)

    if @bike.save
      render :show
    else
      render json: @bike.errors.full_messages, status: 422
    end
  end

  def show
    @bike = Bike.find(params[:id])
  end

  private

  def bike_params
    params.require(:bike).permit(:lat, :lng, :description)
  end
end

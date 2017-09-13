class TripsController < ApplicationController
respond_to :json
skip_before_action :verify_authenticity_token

    def show
        respond_with current_user.trips.find(params[:id])
    end

    def index
        respond_with search(params)
    end

    def create
        trip = current_user.trips.build(trip_params)
        if trip.save
          render json: trip, status: 201
        else
          render json: { errors: trip.errors }, status: 422
        end
    end

    def update
        trip = current_user.trips.find(params[:id])
        if trip.update(trip_params)
          render json: trip, status: 200
        else
          render json: { errors: trip.errors }, status: 422
        end
    end

    def destroy
      trip = current_user.trips.find(params[:id])
      trip.destroy
      head 204
    end

    def search(params = {})
      trips = params[:trip_ids].present? ? current_user.trips.find(params[:trip_ids]) : current_user.trips.all
      trips = current_user.trips.filter_by_destination(params[:destination]) if params[:destination]
      trips
    end

    def trip_params
      params.require(:data).require(:attributes).permit(:destination, :startdate, :enddate, :comment)
    end
  end

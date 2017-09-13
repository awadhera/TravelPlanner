class TripSerializer < ActiveModel::Serializer
  attributes :id, :destination, :startdate, :enddate, :comment
  has_one :user
end

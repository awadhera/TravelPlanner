class Trip < ActiveRecord::Base
    validates :destination, :startdate, :enddate, :user_id, presence: true
    belongs_to :user
    scope :filter_by_destination, lambda { |destination|
      where("lower(destination) LIKE ?", "%#{destination.downcase}%" )
    }
end

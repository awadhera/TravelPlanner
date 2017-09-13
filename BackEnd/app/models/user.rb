class User < ActiveRecord::Base
    validates :auth_token, uniqueness: true
    before_save :ensure_authentication_token
    has_many :trips, dependent: :destroy

    devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable

    scope :search_equal_email, lambda { |email|
      where("email == ?", email)
    }
    def ensure_authentication_token
        if auth_token.blank?
            self.auth_token = generate_authentication_token
        end
    end

    private

    def generate_authentication_token
        loop do
            token = Devise.friendly_token
            break token unless User.where(auth_token: token).first
        end
    end
end

class ApplicationController < ActionController::Base
    before_filter :authenticate_user_from_token!
    before_filter :authenticate_user!
    protect_from_forgery with: :null_session

    private

    def authenticate_user_from_token!
        authenticate_with_http_token do |token, options|
            user_email = options[:email].presence
            user = user_email && User.find_by_email(user_email)

            if user && Devise.secure_compare(user.auth_token, token)
                sign_in user, store: false
            end
        end
    end
end
